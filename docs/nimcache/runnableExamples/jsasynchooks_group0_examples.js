/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function toJSStr(s_33556793) {
                    var Temporary5;
            var Temporary7;

  var result_33556794 = null;

    var res_33556828 = newSeq_33556811((s_33556793).length);
    var i_33556829 = 0;
    var j_33556830 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556829 < (s_33556793).length)) break Label2;
          var c_33556831 = s_33556793[i_33556829];
          if ((c_33556831 < 128)) {
          res_33556828[j_33556830] = String.fromCharCode(c_33556831);
          i_33556829 += 1;
          }
          else {
            var helper_33556843 = newSeq_33556811(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556844 = c_33556831.toString(16);
                  if ((((code_33556844) == null ? 0 : (code_33556844).length) == 1)) {
                  helper_33556843.push("%0");;
                  }
                  else {
                  helper_33556843.push("%");;
                  }
                  
                  helper_33556843.push(code_33556844);;
                  i_33556829 += 1;
                    if (((s_33556793).length <= i_33556829)) Temporary5 = true; else {                      Temporary5 = (s_33556793[i_33556829] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556831 = s_33556793[i_33556829];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556828[j_33556830] = decodeURIComponent(helper_33556843.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556828[j_33556830] = helper_33556843.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556830 += 1;
        }
    } while (false);
    if (res_33556828.length < j_33556830) { for (var i = res_33556828.length ; i < j_33556830 ; ++i) res_33556828.push(null); }
               else { res_33556828.length = j_33556830; };
    result_33556794 = res_33556828.join("");

  return result_33556794;

}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

function cstrToNimstr(c_33556790) {
      var ln = c_33556790.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556790.charCodeAt(i);

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
            ch = 65536 + (((ch & 1023) << 10) | (c_33556790.charCodeAt(i) & 1023));
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
var F = {procname: "module jsasynchooks_examples1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556811(len_33556813) {
  var result_33556814 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 676;
    result_33556814 = new Array(len_33556813); for (var i = 0 ; i < len_33556813 ; ++i) { result_33556814[i] = null; }  framePtr = F.prev;

  return result_33556814;

}
var F = {procname: "module jsasynchooks_examples1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples1.nim", line: 0};
framePtr = F;
F.line = 7;
const async_hooks = require('async_hooks');
F.line = 8;
rawEcho(cstrToNimstr((((async_hooks.triggerAsyncId()) | 0)) + ""));
F.line = 9;
rawEcho(cstrToNimstr((((async_hooks.executionAsyncId()) | 0)) + ""));
framePtr = F.prev;
var F = {procname: "module jsasynchooks_examples1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_examples1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsasynchooks_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jsasynchooks_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
