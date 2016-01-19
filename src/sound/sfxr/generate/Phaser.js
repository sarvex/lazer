export default function Phaser (fx) {

    let fphase = Math.pow(ps.phaser.offset, 2) * 1020;

    if (ps.phaser.offset < 0)
    {
        fphase = -fphase;
    }

    let fdphase = Math.pow(ps.phaser.ramp, 2) * 1;

    if (ps.phaser.ramp < 0)
    {
        fdphase = -fdphase;
    }

    let buffer = [];

    for (var i = 0; i < 1024; i++)
    {
        buffer[i] = 0;
    }

    return {

        phase: 0,
        fphase,
        fdphase,
        iphase: Math.abs(Math.floor(fphase)),
        ipp: 0,
        buffer
    };

}
