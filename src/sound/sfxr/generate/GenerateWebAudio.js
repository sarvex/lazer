import GenerateData from 'sound/sfxr/generate/GenerateData.js';
import UpdateData from 'sound/sfxr/generate/UpdateData.js';
import Envelope from 'sound/sfxr/generate/Envelope.js';
import Filter from 'sound/sfxr/generate/Filter.js';
import Noise from 'sound/sfxr/generate/Noise.js';
import Phaser from 'sound/sfxr/generate/Phaser.js';
import Vibrato from 'sound/sfxr/generate/Vibrato.js';
import Repeat from 'sound/sfxr/generate/Repeat.js';
import SoundEffect from 'sound/sfxr/SoundEffect.js';
import GetShape, * as SHAPE from 'sound/sfxr/Shapes.js';

const MIN_SAMPLE_RATE = 44100;
const SOUND_VOL = 0.25;
const SAMPLE_RATE = 5512;
const BIT_DEPTH = 8;

let masterVolume = 1;

// let filter;
// let vibrato;
// let envelope;
// let phaser;
// let noise;
// let repeat;

export default function GenerateWebAudio (fx) {

    let data = GenerateData(fx);

    UpdateData(data, fx);

    let filter = Filter(fx);
    let vibrato = Vibrato(fx);
    let envelope = Envelope(fx);
    let phaser = Phaser(fx);
    let noise = Noise(fx);
    let repeat = Repeat(fx);

    data.bufferLength = Math.ceil(envelope.total_length / data.summands);

    let sound;

    if (fx.sampleRate < MIN_SAMPLE_RATE)
    {
        // Assume 4x gets close enough to MIN_SAMPLE_RATE
        sound = SoundEffect(4 * data.bufferLength, MIN_SAMPLE_RATE);
    }
    else
    {
        sound = SoundEffect(data.bufferLength, fx.sampleRate);
    }

    let buffer = sound.getBuffer();

    for (let t = 0;; t++)
    {
        // Repeats
        if (repeat.limit !== 0 && ++data.repeatTime >= repeat.limit)
        {
            UpdateData(data, fx);
        }

        applyArpeggio(data, t);
        applyFrequencySlide(data, fx);
        applyVibrato(data, fx, vibrato);
        applyEnvelope(data, fx, envelope);
        applyPhaser(data, fx, phaser, filter);

        let sample = apply8xSuperSampling(data, fx, phaser, noise, filter, envelope);

        // Accumulate samples appropriately for sample rate
        data.sampleSum += sample;

        if (++data.numSummed >= data.summands)
        {
            data.numSummed = 0;
            sample = data.sampleSum / data.summands;
            data.sampleSum = 0;
        }
        else
        {
            continue;
        }

        sample = sample / 8 * masterVolume;
        sample *= data.gain;

        buffer[data.bufferIndex++] = sample;

        if (fx.sampleRate < MIN_SAMPLE_RATE)
        {
            buffer[data.bufferIndex++] = sample;
            buffer[data.bufferIndex++] = sample;
            buffer[data.bufferIndex++] = sample;
        }

        if (data.bufferComplete)
        {
            for (; data.bufferIndex < data.bufferLength; data.bufferIndex++)
            {
                if (fx.sampleRate < MIN_SAMPLE_RATE)
                {
                    buffer[data.bufferIndex++] = 0;
                    buffer[data.bufferIndex++] = 0;
                    buffer[data.bufferIndex++] = 0;
                }

                buffer[data.bufferIndex] = 0;
            }

            break;
        }
    }

    return sound;

}

function applyArpeggio (data, t) {

    // Arpeggio (single)
    if (data.arpLimit !== 0 && t >= data.arpLimit)
    {
        data.arpLimit = 0;
        data.fPeriod *= data.arpMod;
    }

}

function applyFrequencySlide (data, fx) {

    // Frequency slide, and frequency slide slide!
    data.fSlide += data.fDeltaSlide;
    data.fPeriod *= data.fSlide;

    if (data.fPeriod > data.fMaxPeriod)
    {
        data.fPeriod = data.fMaxPeriod;

        if (fx.tone.limit > 0)
        {
            data.bufferComplete = true;
        }
    }

}

function applyVibrato (data, fx, vibrato) {

    // Vibrato
    let rfPeriod = data.fPeriod;

    if (vibrato.amp > 0)
    {
        vibrato.phase += vibrato.speed;
        rfPeriod = data.fPeriod * (1 + Math.sin(vibrato.phase) * vibrato.amp);
    }

    data.period = Math.floor(rfPeriod);

    if (data.period < 8)
    {
        data.period = 8;
    }

    data.squareDuty += data.squareSlide;

    if (data.squareDuty < 0)
    {
        data.squareDuty = 0;
    }

    if (data.squareDuty > 0.5)
    {
        data.squareDuty = 0.5;
    }

}

function applyEnvelope (data, fx, envelope) {

    // Volume envelope
    envelope.time++;

    if (envelope.time > envelope.length[envelope.stage])
    {
        envelope.time = 0;
        envelope.stage++;

        if (envelope.stage === 3)
        {
            data.bufferComplete = true;
        }
    }

    if (envelope.stage === 0)
    {
        envelope.vol = envelope.time / envelope.length[0];
    }
    else if (envelope.stage === 1)
    {
        envelope.vol = 1 + Math.pow(1 - envelope.time / envelope.length[1], 1) * 2 * fx.envelope.punch;
    }
    else
    {
        envelope.vol = 1 - envelope.time / envelope.length[2];
    }

}

function applyPhaser (data, fx, phaser, filter) {

    // Phaser step
    phaser.fphase += phaser.fdphase;

    phaser.iphase = Math.abs(Math.floor(phaser.fphase));

    if (phaser.iphase > 1023)
    {
        phaser.iphase = 1023;
    }

    if (filter.hp_d !== 0)
    {
        filter.hp *= filter.hp_d;

        if (filter.hp < 0.00001)
        {
            filter.hp = 0.00001;
        }

        if (filter.hp > 0.1)
        {
            filter.hp = 0.1;
        }
    }

}

function apply8xSuperSampling (data, fx, phaser, noise, filter, envelope) {

    // 8x supersampling
    let sample = 0;

    for (let si = 0; si < 8; si++)
    {
        let subSample = 0;

        phaser.phase++;

        if (phaser.phase >= data.period)
        {
            phaser.phase %= data.period;

            if (fx.waveType === SHAPE.NOISE)
            {
                for (let i = 0; i < 32; i++)
                {
                    noise.buffer[i] = Math.random() * 2 - 1;
                }
            }
        }

        // Base waveform
        let fp = phaser.phase / data.period;

        if (fx.waveType === SHAPE.SQUARE)
        {
            if (fp < data.squareDuty)
            {
                subSample = 0.5;
            }
            else
            {
                subSample = -0.5;
            }
        }
        else if (fx.waveType === SHAPE.SAWTOOTH)
        {
            subSample = 1 - fp * 2;
        }
        else if (fx.waveType === SHAPE.SINE)
        {
            subSample = Math.sin(fp * 2 * Math.PI);
        }
        else if (fx.waveType === SHAPE.NOISE)
        {
            subSample = noise.buffer[Math.floor(phaser.phase * 32 / data.period)];
        }
        else if (fx.waveType === SHAPE.TRIANGLE)
        {
            subSample = Math.abs(1 - fp * 2) - 1;
        }
        else if (fx.waveType === SHAPE.BREAKER)
        {
            subSample = Math.abs(1 - fp * fp * 2) - 1;
        }
        else
        {
            throw new Exception('sfxr - Bad waveType: ' + fx.waveType);
        }

        // Low-pass filter
        let pp = filter.p;

        filter.w *= filter.w_d;

        if (filter.w < 0)
        {
            filter.w = 0;
        }

        if (filter.w > 0.1)
        {
            filter.w = 0.1;
        }

        if (fx.lpf.frequency !== 1)
        {
            filter.dp += (subSample - filter.p) * filter.w;
            filter.dp -= filter.dp * filter.dmp;
        }
        else
        {
            filter.p = subSample;
            filter.dp = 0;
        }

        filter.p += filter.dp;

        // High-pass filter
        filter.php += filter.p - pp;
        filter.php -= filter.php * filter.hp;
        subSample = filter.php;

        // Phaser
        phaser.buffer[phaser.ipp & 1023] = subSample;
        subSample += phaser.buffer[(phaser.ipp - phaser.iphase + 1024) & 1023];
        phaser.ipp = (phaser.ipp + 1) & 1023;

        // final accumulation and envelope application
        sample += subSample * envelope.vol;
    }

    return sample;

}
