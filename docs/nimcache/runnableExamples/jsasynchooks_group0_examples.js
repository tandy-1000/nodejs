/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function toJSStr(s_33556807) {
                    var Temporary5;
            var Temporary7;

  var result_33556808 = null;

    var res_33556842 = newSeq_33556825((s_33556807).length);
    var i_33556843 = 0;
    var j_33556844 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556843 < (s_33556807).length)) break Label2;
          var c_33556845 = s_33556807[i_33556843];
          if ((c_33556845 < 128)) {
          res_33556842[j_33556844] = String.fromCharCode(c_33556845);
          i_33556843 += 1;
          }
          else {
            var helper_33556857 = newSeq_33556825(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556858 = c_33556845.toString(16);
                  if ((((code_33556858) == null ? 0 : (code_33556858).length) == 1)) {
                  helper_33556857.push("%0");;
                  }
                  else {
                  helper_33556857.push("%");;
                  }
                  
                  helper_33556857.push(code_33556858);;
                  i_33556843 += 1;
                    if (((s_33556807).length <= i_33556843)) Temporary5 = true; else {                      Temporary5 = (s_33556807[i_33556843] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556845 = s_33556807[i_33556843];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556842[j_33556844] = decodeURIComponent(helper_33556857.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556842[j_33556844] = helper_33556857.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556844 += 1;
        }
    } while (false);
    if (res_33556842.length < j_33556844) { for (var i = res_33556842.length ; i < j_33556844 ; ++i) res_33556842.push(null); }
               else { res_33556842.length = j_33556844; };
    result_33556808 = res_33556842.join("");

  return result_33556808;

}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

function cstrToNimstr(c_33556804) {
      var ln = c_33556804.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556804.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556804.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jsasynchooks.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 680;
    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }  framePtr = F.prev;

  return result_33556828;

}
var F = {procname: "module jsasynchooks_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples_1.nim", line: 0};
framePtr = F;
F.line = 15;
const async_hooks = require('async_hooks');
F.line = 15;
rawEcho(cstrToNimstr((((async_hooks.triggerAsyncId()) | 0)) + ""));
F.line = 15;
rawEcho(cstrToNimstr((((async_hooks.executionAsyncId()) | 0)) + ""));
framePtr = F.prev;
var F = {procname: "module jsasynchooks_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
