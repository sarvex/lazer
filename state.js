!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("state",[],t):"object"==typeof exports?exports.state=t():(e.lazer=e.lazer||{},e.lazer.state=t())}(this,function(){return function(e){function t(u){if(n[u])return n[u].exports;var o=n[u]={exports:{},id:u,loaded:!1};return e[u].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";"create index";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.StateManager=t.State=void 0;var o=n(769),r=u(o),a=n(770),d=u(a);t.State=r["default"],t.StateManager=d["default"]},157:function(e,t){"use strict";function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},769:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.name,n=void 0===t?"":t,u=e.status,o=void 0===u?d:u,r=e.init,l=void 0===r?a["default"]:r,c=e.preload,s=void 0===c?a["default"]:c,v=e.create,p=void 0===v?a["default"]:v,y=e.update,b=void 0===y?a["default"]:y,k=e.preRender,_=void 0===k?a["default"]:k,h=e.render,m=void 0===h?a["default"]:h,E=e.postRender,x=void 0===E?a["default"]:E,P=e.shutdown,j=void 0===P?a["default"]:P,D=e.destroy,M=void 0===D?a["default"]:D;return{name:n,status:o,init:l,preload:s,create:p,update:b,preRender:_,render:m,postRender:x,shutdown:j,destroy:M,pause:function(){o=f},resume:function(){o=i}}}Object.defineProperty(t,"__esModule",{value:!0}),t.DESTROYED=t.PAUSED=t.ACTIVE=t.PENDING=void 0,t["default"]=o;var r=n(157),a=u(r),d=t.PENDING=0,i=t.ACTIVE=1,f=t.PAUSED=2;t.DESTROYED=3},770:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),o=function(){function e(){n(this,e),this.states={init:[],preload:[],create:[],update:[],preRender:[],render:[],postRender:[]}}return u(e,[{key:"add",value:function(){}},{key:"remove",value:function(){}},{key:"flush",value:function(){}},{key:"switch",value:function(){}},{key:"start",value:function(){}},{key:"pause",value:function(){}},{key:"resume",value:function(){}},{key:"reload",value:function(){}},{key:"stop",value:function(){}},{key:"shutdown",value:function(){}},{key:"destroy",value:function(){}}]),e}();t["default"]=o}})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI2ZjU4YTE3NzQ1MDgwZjAwMWE/Nzc5ZSoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW0vTk9PUC5qcz8xY2ZkKiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL1N0YXRlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwibW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImluc3RhbGxlZE1vZHVsZXMiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCIwIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlN0YXRlTWFuYWdlciIsIlN0YXRlIiwidW5kZWZpbmVkIiwiX1N0YXRlIiwiX1N0YXRlMiIsIl9TdGF0ZU1hbmFnZXIiLCJfU3RhdGVNYW5hZ2VyMiIsIjE1NyIsIk5PT1AiLCI3NjkiLCJfcmVmIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX3JlZiRuYW1lIiwibmFtZSIsIl9yZWYkc3RhdHVzIiwic3RhdHVzIiwiUEVORElORyIsIl9yZWYkaW5pdCIsImluaXQiLCJfTk9PUDIiLCJfcmVmJHByZWxvYWQiLCJwcmVsb2FkIiwiX3JlZiRjcmVhdGUiLCJjcmVhdGUiLCJfcmVmJHVwZGF0ZSIsInVwZGF0ZSIsIl9yZWYkcHJlUmVuZGVyIiwicHJlUmVuZGVyIiwiX3JlZiRyZW5kZXIiLCJyZW5kZXIiLCJfcmVmJHBvc3RSZW5kZXIiLCJwb3N0UmVuZGVyIiwiX3JlZiRzaHV0ZG93biIsInNodXRkb3duIiwiX3JlZiRkZXN0cm95IiwiZGVzdHJveSIsInBhdXNlIiwiUEFVU0VEIiwicmVzdW1lIiwiQUNUSVZFIiwiREVTVFJPWUVEIiwiX05PT1AiLCI3NzAiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJzdGF0ZXMiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEdBQ0EsZ0JBQUFDLFVBQUEsZ0JBQUFDLFFBQ0FBLE9BQUFELFFBQUFELElBQ0Esa0JBQUFHLGdCQUFBQyxJQUNBRCxPQUFBLFdBQUFILEdBQ0EsZ0JBQUFDLFNBQ0FBLFFBQUEsTUFBQUQsS0FFQUQsRUFBQSxNQUFBQSxFQUFBLFVBQXFDQSxFQUFBLFlBQUFDLE1BQ3BDSyxLQUFBLFdBQ0QsTUNBZ0IsVUFBVUMsR0NOMUIsUUFBQUMsR0FBQUMsR0FHQSxHQUFBQyxFQUFBRCxHQUNBLE1BQUFDLEdBQUFELEdBQUFQLE9BR0EsSUFBQUMsR0FBQU8sRUFBQUQsSUFDQVAsV0FDQVMsR0FBQUYsRUFDQUcsUUFBQSxFQVVBLE9BTkFMLEdBQUFFLEdBQUFJLEtBQUFWLEVBQUFELFFBQUFDLElBQUFELFFBQUFNLEdBR0FMLEVBQUFTLFFBQUEsRUFHQVQsRUFBQUQsUUF2QkEsR0FBQVEsS0FxQ0EsT0FUQUYsR0FBQU0sRUFBQVAsRUFHQUMsRUFBQU8sRUFBQUwsRUFHQUYsRUFBQVEsRUFBQSxHQUdBUixFQUFBLEtEZ0JNUyxFQUNBLFNBQVNkLEVBQVFELEVBQVNNLEdBRS9CLFlFekRELGVGeUVDLFNBQVNVLEdBQXVCQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQVFFLFVBQVNGLEdBYnZGRyxPQUFPQyxlQUFlckIsRUFBUyxjQUMzQnNCLE9BQU8sSUFFWHRCLEVBQVF1QixhQUFldkIsRUFBUXdCLE1BQVFDLE1FN0R4QyxJQUFBQyxHQUFBcEIsRUFBQSxLRmlFS3FCLEVBQVVYLEVBQXVCVSxHRWhFdENFLEVBQUF0QixFQUFBLEtGb0VLdUIsRUFBaUJiLEVBQXVCWSxFQUk1QzVCLEdFckVHd0IsTUZxRWFHLGFBQ2hCM0IsRUVyRUd1QixhRnFFb0JNLGNBSWxCQyxJQUNBLFNBQVM3QixFQUFRRCxHQUV0QixZRzlFYyxTQUFTK0IsTUhnRnZCWCxPQUFPQyxlQUFlckIsRUFBUyxjQUMzQnNCLE9BQU8sSUFFWHRCLGFHbkZ1QitCLEdIaUdsQkMsSUFDQSxTQUFTL0IsRUFBUUQsRUFBU00sR0FFL0IsWUFZQSxTQUFTVSxHQUF1QkMsR0FBTyxNQUFPQSxJQUFPQSxFQUFJQyxXQUFhRCxHQUFRRSxVQUFTRixHSTlHekUsUUFBU08sS0FjbEIsR0FBQVMsR0FBQUMsVUFBQUMsUUFBQSxHQUFBVixTQUFBUyxVQUFBLE1BQUFBLFVBQUEsR0FBQUUsRUFBQUgsRUFaTUksT0FZTlosU0FBQVcsRUFaYSxHQVliQSxFQUFBRSxFQUFBTCxFQVhNTSxTQVdOZCxTQUFBYSxFQVhlRSxFQVdmRixFQUFBRyxFQUFBUixFQVZNUyxPQVVOakIsU0FBQWdCLEVBQUFFLGFBQUFGLEVBQUFHLEVBQUFYLEVBVE1ZLFVBU05wQixTQUFBbUIsRUFBQUQsYUFBQUMsRUFBQUUsRUFBQWIsRUFSTWMsU0FRTnRCLFNBQUFxQixFQUFBSCxhQUFBRyxFQUFBRSxFQUFBZixFQVBNZ0IsU0FPTnhCLFNBQUF1QixFQUFBTCxhQUFBSyxFQUFBRSxFQUFBakIsRUFOTWtCLFlBTU4xQixTQUFBeUIsRUFBQVAsYUFBQU8sRUFBQUUsRUFBQW5CLEVBTE1vQixTQUtONUIsU0FBQTJCLEVBQUFULGFBQUFTLEVBQUFFLEVBQUFyQixFQUpNc0IsYUFJTjlCLFNBQUE2QixFQUFBWCxhQUFBVyxFQUFBRSxFQUFBdkIsRUFITXdCLFdBR05oQyxTQUFBK0IsRUFBQWIsYUFBQWEsRUFBQUUsRUFBQXpCLEVBRk0wQixVQUVObEMsU0FBQWlDLEVBQUFmLGFBQUFlLENBRUYsUUFFSXJCLE9BQ0FFLFNBQ0FHLE9BQ0FHLFVBQ0FFLFNBQ0FFLFNBQ0FFLFlBQ0FFLFNBQ0FFLGFBQ0FFLFdBQ0FFLFVBRUFDLE1BQU8sV0FFSHJCLEVBQVNzQixHQUliQyxPQUFRLFdBRUp2QixFQUFTd0IsSUo4RHBCM0MsT0FBT0MsZUFBZXJCLEVBQVMsY0FDdkJzQixPQUFPLElBRWZ0QixFQUFRZ0UsVUFBWWhFLEVBQVE2RCxPQUFTN0QsRUFBUStELE9BQVMvRCxFQUFRd0MsUUFBVWYsT0FDeEV6QixhSXhHdUJ3QixDQVB4QixJQUFBeUMsR0FBQTNELEVBQUEsS0ptSEtxQyxFQUFTM0IsRUFBdUJpRCxHSWpIeEJ6QixFQUFBeEMsRUFBQXdDLFFBQVUsRUFDVnVCLEVBQUEvRCxFQUFBK0QsT0FBUyxFQUNURixFQUFBN0QsRUFBQTZELE9BQVMsQ0FDVDdELEdBQUFnRSxVQUFZLEdKK0tuQkUsSUFDQSxTQUFTakUsRUFBUUQsR0FFdEIsWUFRQSxTQUFTbUUsR0FBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FOaEhsRCxPQUFPQyxlQUFlckIsRUFBUyxjQUMzQnNCLE9BQU8sR0FHWCxJQUFJaUQsR0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNdkMsT0FBUXdDLElBQUssQ0FBRSxHQUFJQyxHQUFhRixFQUFNQyxFQUFJQyxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU0zRCxPQUFPQyxlQUFlb0QsRUFBUUcsRUFBV0ksSUFBS0osSUFBaUIsTUFBTyxVQUFVUCxFQUFhWSxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVQsRUFBaUJILEVBQVljLFVBQVdGLEdBQWlCQyxHQUFhVixFQUFpQkgsRUFBYWEsR0FBcUJiLE1Lckw1Z0I5QyxFTGdNRCxXSzlMaEIsUUFBQUEsS0FBZTRDLEVBQUEvRCxLQUFBbUIsR0FHWG5CLEtBQUtnRixRQUNEMUMsUUFDQUcsV0FDQUUsVUFDQUUsVUFDQUUsYUFDQUUsVUFDQUUsZUx1T1AsTUFuQ0FnQixHQUFhaEQsSUFDVHlELElBQUssTUFDTDFELE1BQU8sZUFFUDBELElBQUssU0FDTDFELE1BQU8sZUFFUDBELElBQUssUUFDTDFELE1BQU8sZUFFUDBELElBQUssU0FDTDFELE1BQU8sZUFFUDBELElBQUssUUFDTDFELE1BQU8sZUFFUDBELElBQUssUUFDTDFELE1BQU8sZUFFUDBELElBQUssU0FDTDFELE1BQU8sZUFFUDBELElBQUssU0FDTDFELE1BQU8sZUFFUDBELElBQUssT0FDTDFELE1BQU8sZUFFUDBELElBQUssV0FDTDFELE1BQU8sZUFFUDBELElBQUssVUFDTDFELE1BQU8sZ0JBR0pDLElBR1h2QixjS3RQb0J1QiIsImZpbGUiOiJzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic3RhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3RhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF6ZXJcIl0gPSByb290W1wibGF6ZXJcIl0gfHwge30sIHJvb3RbXCJsYXplclwiXVtcInN0YXRlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzdGF0ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXplclwiXSA9IHJvb3RbXCJsYXplclwiXSB8fCB7fSwgcm9vdFtcImxhemVyXCJdW1wic3RhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gMDpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0J2NyZWF0ZSBpbmRleCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLlN0YXRlTWFuYWdlciA9IGV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cdFxuXHR2YXIgX1N0YXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NjkpO1xuXHRcblx0dmFyIF9TdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0ZSk7XG5cdFxuXHR2YXIgX1N0YXRlTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oNzcwKTtcblx0XG5cdHZhciBfU3RhdGVNYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRlTWFuYWdlcik7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0ZXhwb3J0cy5TdGF0ZSA9IF9TdGF0ZTIuZGVmYXVsdDtcblx0ZXhwb3J0cy5TdGF0ZU1hbmFnZXIgPSBfU3RhdGVNYW5hZ2VyMi5kZWZhdWx0O1xuXG4vKioqLyB9LFxuXG4vKioqLyAxNTc6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IE5PT1A7XG5cdC8vIEluIGFsbCBtYWpvciBicm93c2VycywgcmVwbGFjaW5nIG5vbi1zcGVjaWZpZWQgZnVuY3Rpb25zIHdpdGggTk9PUHNcblx0Ly8gc2VlbXMgdG8gYmUgYXMgZmFzdCBvciBzbGlnaHRseSBmYXN0ZXIgdGhhbiB1c2luZyBjb25kaXRpb25zIHRvIG9ubHlcblx0Ly8gY2FsbCB0aGUgZnVuY3Rpb25zIGlmIHRoZXkgYXJlIHNwZWNpZmllZC4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8gZW1wdHlcblx0Ly8gZnVuY3Rpb25zIGJlaW5nIG9wdGltaXplZCBhd2F5LiBodHRwOi8vanNwZXJmLmNvbS9ub29wLXZzLWNvbmRpdGlvblxuXHRcblx0ZnVuY3Rpb24gTk9PUCgpIHtcblx0XG5cdCAgICAvLyAgVGhhdCdzIHJpZ2h0LCB0aGVyZSdzIG5vdGhpbmcgaGVyZS5cblx0XG5cdH1cblxuLyoqKi8gfSxcblxuLyoqKi8gNzY5OlxuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICAgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuREVTVFJPWUVEID0gZXhwb3J0cy5QQVVTRUQgPSBleHBvcnRzLkFDVElWRSA9IGV4cG9ydHMuUEVORElORyA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gU3RhdGU7XG5cdFxuXHR2YXIgX05PT1AgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nyk7XG5cdFxuXHR2YXIgX05PT1AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTk9PUCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIFBFTkRJTkcgPSBleHBvcnRzLlBFTkRJTkcgPSAwO1xuXHR2YXIgQUNUSVZFID0gZXhwb3J0cy5BQ1RJVkUgPSAxO1xuXHR2YXIgUEFVU0VEID0gZXhwb3J0cy5QQVVTRUQgPSAyO1xuXHR2YXIgREVTVFJPWUVEID0gZXhwb3J0cy5ERVNUUk9ZRUQgPSAzO1xuXHRcblx0ZnVuY3Rpb24gU3RhdGUoKSB7XG5cdCAgICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgICAgdmFyIF9yZWYkbmFtZSA9IF9yZWYubmFtZTtcblx0ICAgICAgICB2YXIgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJG5hbWU7XG5cdCAgICAgICAgdmFyIF9yZWYkc3RhdHVzID0gX3JlZi5zdGF0dXM7XG5cdCAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYkc3RhdHVzID09PSB1bmRlZmluZWQgPyBQRU5ESU5HIDogX3JlZiRzdGF0dXM7XG5cdCAgICAgICAgdmFyIF9yZWYkaW5pdCA9IF9yZWYuaW5pdDtcblx0ICAgICAgICB2YXIgaW5pdCA9IF9yZWYkaW5pdCA9PT0gdW5kZWZpbmVkID8gX05PT1AyLmRlZmF1bHQgOiBfcmVmJGluaXQ7XG5cdCAgICAgICAgdmFyIF9yZWYkcHJlbG9hZCA9IF9yZWYucHJlbG9hZDtcblx0ICAgICAgICB2YXIgcHJlbG9hZCA9IF9yZWYkcHJlbG9hZCA9PT0gdW5kZWZpbmVkID8gX05PT1AyLmRlZmF1bHQgOiBfcmVmJHByZWxvYWQ7XG5cdCAgICAgICAgdmFyIF9yZWYkY3JlYXRlID0gX3JlZi5jcmVhdGU7XG5cdCAgICAgICAgdmFyIGNyZWF0ZSA9IF9yZWYkY3JlYXRlID09PSB1bmRlZmluZWQgPyBfTk9PUDIuZGVmYXVsdCA6IF9yZWYkY3JlYXRlO1xuXHQgICAgICAgIHZhciBfcmVmJHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuXHQgICAgICAgIHZhciB1cGRhdGUgPSBfcmVmJHVwZGF0ZSA9PT0gdW5kZWZpbmVkID8gX05PT1AyLmRlZmF1bHQgOiBfcmVmJHVwZGF0ZTtcblx0ICAgICAgICB2YXIgX3JlZiRwcmVSZW5kZXIgPSBfcmVmLnByZVJlbmRlcjtcblx0ICAgICAgICB2YXIgcHJlUmVuZGVyID0gX3JlZiRwcmVSZW5kZXIgPT09IHVuZGVmaW5lZCA/IF9OT09QMi5kZWZhdWx0IDogX3JlZiRwcmVSZW5kZXI7XG5cdCAgICAgICAgdmFyIF9yZWYkcmVuZGVyID0gX3JlZi5yZW5kZXI7XG5cdCAgICAgICAgdmFyIHJlbmRlciA9IF9yZWYkcmVuZGVyID09PSB1bmRlZmluZWQgPyBfTk9PUDIuZGVmYXVsdCA6IF9yZWYkcmVuZGVyO1xuXHQgICAgICAgIHZhciBfcmVmJHBvc3RSZW5kZXIgPSBfcmVmLnBvc3RSZW5kZXI7XG5cdCAgICAgICAgdmFyIHBvc3RSZW5kZXIgPSBfcmVmJHBvc3RSZW5kZXIgPT09IHVuZGVmaW5lZCA/IF9OT09QMi5kZWZhdWx0IDogX3JlZiRwb3N0UmVuZGVyO1xuXHQgICAgICAgIHZhciBfcmVmJHNodXRkb3duID0gX3JlZi5zaHV0ZG93bjtcblx0ICAgICAgICB2YXIgc2h1dGRvd24gPSBfcmVmJHNodXRkb3duID09PSB1bmRlZmluZWQgPyBfTk9PUDIuZGVmYXVsdCA6IF9yZWYkc2h1dGRvd247XG5cdCAgICAgICAgdmFyIF9yZWYkZGVzdHJveSA9IF9yZWYuZGVzdHJveTtcblx0ICAgICAgICB2YXIgZGVzdHJveSA9IF9yZWYkZGVzdHJveSA9PT0gdW5kZWZpbmVkID8gX05PT1AyLmRlZmF1bHQgOiBfcmVmJGRlc3Ryb3k7XG5cdFxuXHRcblx0ICAgICAgICByZXR1cm4ge1xuXHRcblx0ICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG5cdCAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcblx0ICAgICAgICAgICAgICAgIGluaXQ6IGluaXQsXG5cdCAgICAgICAgICAgICAgICBwcmVsb2FkOiBwcmVsb2FkLFxuXHQgICAgICAgICAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG5cdCAgICAgICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcblx0ICAgICAgICAgICAgICAgIHByZVJlbmRlcjogcHJlUmVuZGVyLFxuXHQgICAgICAgICAgICAgICAgcmVuZGVyOiByZW5kZXIsXG5cdCAgICAgICAgICAgICAgICBwb3N0UmVuZGVyOiBwb3N0UmVuZGVyLFxuXHQgICAgICAgICAgICAgICAgc2h1dGRvd246IHNodXRkb3duLFxuXHQgICAgICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcblx0XG5cdCAgICAgICAgICAgICAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBQQVVTRUQ7XG5cdCAgICAgICAgICAgICAgICB9LFxuXHRcblx0ICAgICAgICAgICAgICAgIHJlc3VtZTogZnVuY3Rpb24gcmVzdW1lKCkge1xuXHRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gQUNUSVZFO1xuXHQgICAgICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICB9O1xuXHR9XG5cbi8qKiovIH0sXG5cbi8qKiovIDc3MDpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0Ly8gIFRoZSBTdGF0ZXMgdGhlbXNlbHZlcyBhcmUgcmVzcG9uc2libGUgZm9yIGFkZGluZyBsb2NhbCBoZWxwZXJzIChsaWtlIGxvYWQsIGFkZCwgZXRjKVxuXHQvLyAgRGlmZmVyZW50IFN0YXRlIHR5cGVzIGNhbiBoYXZlIGRpZmZlcmVudCBoZWxwZXJzXG5cdC8vICBUaGlzIGNsYXNzIGp1c3QgZGVhbHMgd2l0aCBpdGVyYXRpbmcgdGhlbVxuXHRcblx0Ly8gc2h1dGRvd24sXG5cdC8vIGRlc3Ryb3ksXG5cdFxuXHR2YXIgU3RhdGVNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gU3RhdGVNYW5hZ2VyKCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZU1hbmFnZXIpO1xuXHRcblx0ICAgICAgICAvLyAgQXJyYXlzIGJlY2F1c2Ugd2UncmUgZ29pbmcgdG8gdXNlIHByaW9yaXR5IG9yZGVyaW5nXG5cdCAgICAgICAgdGhpcy5zdGF0ZXMgPSB7XG5cdCAgICAgICAgICAgIGluaXQ6IFtdLFxuXHQgICAgICAgICAgICBwcmVsb2FkOiBbXSxcblx0ICAgICAgICAgICAgY3JlYXRlOiBbXSxcblx0ICAgICAgICAgICAgdXBkYXRlOiBbXSxcblx0ICAgICAgICAgICAgcHJlUmVuZGVyOiBbXSxcblx0ICAgICAgICAgICAgcmVuZGVyOiBbXSxcblx0ICAgICAgICAgICAgcG9zdFJlbmRlcjogW11cblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHRcblx0ICAgIF9jcmVhdGVDbGFzcyhTdGF0ZU1hbmFnZXIsIFt7XG5cdCAgICAgICAga2V5OiBcImFkZFwiLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7fVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogXCJyZW1vdmVcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwiZmx1c2hcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmx1c2goKSB7fVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogXCJzd2l0Y2hcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3N3aXRjaCgpIHt9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiBcInN0YXJ0XCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge31cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwicGF1c2VcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7fVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogXCJyZXN1bWVcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdW1lKCkge31cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwicmVsb2FkXCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZCgpIHt9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiBcInN0b3BcIixcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHt9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiBcInNodXRkb3duXCIsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNodXRkb3duKCkge31cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge31cblx0ICAgIH1dKTtcblx0XG5cdCAgICByZXR1cm4gU3RhdGVNYW5hZ2VyO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBTdGF0ZU1hbmFnZXI7XG5cbi8qKiovIH1cblxuLyoqKioqKi8gfSlcbn0pO1xuO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHN0YXRlLmpzXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjZmNThhMTc3NDUwODBmMDAxYVxuICoqLyIsIidjcmVhdGUgaW5kZXgnO1xyXG5cclxuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUuanMnO1xyXG5pbXBvcnQgU3RhdGVNYW5hZ2VyIGZyb20gJy4vU3RhdGVNYW5hZ2VyLmpzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBTdGF0ZSxcclxuICAgIFN0YXRlTWFuYWdlclxyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGUvaW5kZXguanNcbiAqKi8iLCIvLyBJbiBhbGwgbWFqb3IgYnJvd3NlcnMsIHJlcGxhY2luZyBub24tc3BlY2lmaWVkIGZ1bmN0aW9ucyB3aXRoIE5PT1BzXHJcbi8vIHNlZW1zIHRvIGJlIGFzIGZhc3Qgb3Igc2xpZ2h0bHkgZmFzdGVyIHRoYW4gdXNpbmcgY29uZGl0aW9ucyB0byBvbmx5XHJcbi8vIGNhbGwgdGhlIGZ1bmN0aW9ucyBpZiB0aGV5IGFyZSBzcGVjaWZpZWQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGVtcHR5XHJcbi8vIGZ1bmN0aW9ucyBiZWluZyBvcHRpbWl6ZWQgYXdheS4gaHR0cDovL2pzcGVyZi5jb20vbm9vcC12cy1jb25kaXRpb25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5PT1AgKCkge1xyXG5cclxuICAgIC8vICBUaGF0J3MgcmlnaHQsIHRoZXJlJ3Mgbm90aGluZyBoZXJlLlxyXG4gICAgXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zeXN0ZW0vTk9PUC5qc1xuICoqLyIsImltcG9ydCBOT09QIGZyb20gJy4uL3N5c3RlbS9OT09QLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQRU5ESU5HID0gMDtcclxuZXhwb3J0IGNvbnN0IEFDVElWRSA9IDE7XHJcbmV4cG9ydCBjb25zdCBQQVVTRUQgPSAyO1xyXG5leHBvcnQgY29uc3QgREVTVFJPWUVEID0gMztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRlIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgPSAnJyxcclxuICAgICAgICAgICAgc3RhdHVzID0gUEVORElORyxcclxuICAgICAgICAgICAgaW5pdCA9IE5PT1AsXHJcbiAgICAgICAgICAgIHByZWxvYWQgPSBOT09QLFxyXG4gICAgICAgICAgICBjcmVhdGUgPSBOT09QLFxyXG4gICAgICAgICAgICB1cGRhdGUgPSBOT09QLFxyXG4gICAgICAgICAgICBwcmVSZW5kZXIgPSBOT09QLFxyXG4gICAgICAgICAgICByZW5kZXIgPSBOT09QLFxyXG4gICAgICAgICAgICBwb3N0UmVuZGVyID0gTk9PUCxcclxuICAgICAgICAgICAgc2h1dGRvd24gPSBOT09QLFxyXG4gICAgICAgICAgICBkZXN0cm95ID0gTk9PUFxyXG4gICAgICAgIH0gPSB7fVxyXG4gICAgKSB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgaW5pdCxcclxuICAgICAgICBwcmVsb2FkLFxyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgcHJlUmVuZGVyLFxyXG4gICAgICAgIHJlbmRlcixcclxuICAgICAgICBwb3N0UmVuZGVyLFxyXG4gICAgICAgIHNodXRkb3duLFxyXG4gICAgICAgIGRlc3Ryb3ksXHJcblxyXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0dXMgPSBQQVVTRUQ7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHVzID0gQUNUSVZFO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIFxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGUvU3RhdGUuanNcbiAqKi8iLCIvLyAgVGhlIFN0YXRlcyB0aGVtc2VsdmVzIGFyZSByZXNwb25zaWJsZSBmb3IgYWRkaW5nIGxvY2FsIGhlbHBlcnMgKGxpa2UgbG9hZCwgYWRkLCBldGMpXHJcbi8vICBEaWZmZXJlbnQgU3RhdGUgdHlwZXMgY2FuIGhhdmUgZGlmZmVyZW50IGhlbHBlcnNcclxuLy8gIFRoaXMgY2xhc3MganVzdCBkZWFscyB3aXRoIGl0ZXJhdGluZyB0aGVtXHJcblxyXG4gICAgICAgIC8vIHNodXRkb3duLFxyXG4gICAgICAgIC8vIGRlc3Ryb3ksXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgICAgIC8vICBBcnJheXMgYmVjYXVzZSB3ZSdyZSBnb2luZyB0byB1c2UgcHJpb3JpdHkgb3JkZXJpbmdcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHtcclxuICAgICAgICAgICAgaW5pdDogW10sXHJcbiAgICAgICAgICAgIHByZWxvYWQ6IFtdLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFtdLFxyXG4gICAgICAgICAgICB1cGRhdGU6IFtdLFxyXG4gICAgICAgICAgICBwcmVSZW5kZXI6IFtdLFxyXG4gICAgICAgICAgICByZW5kZXI6IFtdLFxyXG4gICAgICAgICAgICBwb3N0UmVuZGVyOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZsdXNoICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZSAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaHV0ZG93biAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3kgKCkge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGUvU3RhdGVNYW5hZ2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==