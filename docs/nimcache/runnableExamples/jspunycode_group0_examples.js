/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555919 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555124.base = NTI33555113;
var NNI33555919 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555919.node = NNI33555919;
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557140, src_33557141, ti_33557142) {
  var result_33557151 = null;

    switch (ti_33557142.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557131(ti_33557142))) {
      result_33557151 = src_33557141;
      }
      else {
        result_33557151 = [src_33557141[0], src_33557141[1]];
      }
      
      break;
    case 19:
            if (dest_33557140 === null || dest_33557140 === undefined) {
        dest_33557140 = {};
      }
      else {
        for (var key in dest_33557140) { delete dest_33557140[key]; }
      }
      for (var key in src_33557141) { dest_33557140[key] = src_33557141[key]; }
      result_33557151 = dest_33557140;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557142.base == null))) {
      result_33557151 = nimCopy(dest_33557140, src_33557141, ti_33557142.base);
      }
      else {
      if ((ti_33557142.kind == 17)) {
      result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {m_type: ti_33557142} : dest_33557140;
      }
      else {
        result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {} : dest_33557140;
      }
      }
      nimCopyAux(result_33557151, src_33557141, ti_33557142.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557141 === null) {
        result_33557151 = null;
      }
      else {
        if (dest_33557140 === null || dest_33557140 === undefined) {
          dest_33557140 = new Array(src_33557141.length);
        }
        else {
          dest_33557140.length = src_33557141.length;
        }
        result_33557151 = dest_33557140;
        for (var i = 0; i < src_33557141.length; ++i) {
          result_33557151[i] = nimCopy(result_33557151[i], src_33557141[i], ti_33557142.base);
        }
      }
    
      break;
    case 28:
            if (src_33557141 !== null) {
        result_33557151 = src_33557141.slice(0);
      }
    
      break;
    default: 
      result_33557151 = src_33557141;
      break;
    }

  return result_33557151;

}

function makeNimstrLit(c_33556801) {
      var result = [];
  for (var i = 0; i < c_33556801.length; ++i) {
    result[i] = c_33556801.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557179, value_33557180, typ_33557181) {
        var result = new Array(len_33557179);
    for (var i = 0; i < len_33557179; ++i) result[i] = nimCopy(null, value_33557180, typ_33557181);
    return result;
  

  
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

function raiseException(e_33556667, ename_33556668) {
    e_33556667.name = ename_33556668;
    if ((excHandler == 0)) {
    unhandledException(e_33556667);
    }
    
    e_33556667.trace = nimCopy(null, rawWriteStackTrace_33556631(), NTI33554439);
    throw e_33556667;

  
}

function subInt(a_33556944, b_33556945) {
        var result = a_33556944 - b_33556945;
    checkOverflowInt(result);
    return result;
  

  
}

function chckIndx(i_33557184, a_33557185, b_33557186) {
      var Temporary1;

  var result_33557187 = 0;

  BeforeRet: do {
      if (!(a_33557185 <= i_33557184)) Temporary1 = false; else {        Temporary1 = (i_33557184 <= b_33557186);      }    if (Temporary1) {
    result_33557187 = i_33557184;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557184, a_33557185, b_33557186);
    }
    
  } while (false);

  return result_33557187;

}

function addInt(a_33556940, b_33556941) {
        var result = a_33556940 + b_33556941;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/src/nodejs/jspunycode.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557131(ti_33557132) {
  var result_33557133 = false;

  BeforeRet: do {
    result_33557133 = !((ConstSet1[ti_33557132.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557133;

}

function nimCopyAux(dest_33557144, src_33557145, n_33557146) {
    switch (n_33557146.kind) {
    case 0:
      break;
    case 1:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557146.sons.length; i++) {
      nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i]);
    }
    
      break;
    case 3:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
      for (var i = 0; i < n_33557146.sons.length; ++i) {
        nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556420(x_33556421, x_33556421_Idx, y_33556422) {
          if (x_33556421[x_33556421_Idx] === null) { x_33556421[x_33556421_Idx] = []; }
      var off = x_33556421[x_33556421_Idx].length;
      x_33556421[x_33556421_Idx].length += y_33556422.length;
      for (var i = 0; i < y_33556422.length; ++i) {
        x_33556421[x_33556421_Idx][off+i] = y_33556422.charCodeAt(i);
      }
    

  
}

function auxWriteStackTrace_33556559(f_33556560) {
          var Temporary3;

  var result_33556561 = [[]];

    var it_33556569 = f_33556560;
    var i_33556570 = 0;
    var total_33556571 = 0;
    var tempFrames_33556572 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555919);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556569 == null))) Temporary3 = false; else {            Temporary3 = (i_33556570 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556572[i_33556570].Field0 = it_33556569.procname;
          tempFrames_33556572[i_33556570].Field1 = it_33556569.line;
          tempFrames_33556572[i_33556570].Field2 = it_33556569.filename;
          i_33556570 += 1;
          total_33556571 += 1;
          it_33556569 = it_33556569.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556569 == null))) break Label5;
          total_33556571 += 1;
          it_33556569 = it_33556569.prev;
        }
    } while (false);
    result_33556561[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556571 == i_33556570))) {
    result_33556561[0].push.apply(result_33556561[0], makeNimstrLit("("));;
    result_33556561[0].push.apply(result_33556561[0], cstrToNimstr(((total_33556571 - i_33556570)) + ""));;
    result_33556561[0].push.apply(result_33556561[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556602 = 0;
      var colontmp__570425442 = 0;
      colontmp__570425442 = (i_33556570 - 1);
      var res_570425444 = colontmp__570425442;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_570425444)) break Label8;
            j_33556602 = res_570425444;
            result_33556561[0].push.apply(result_33556561[0], cstrToNimstr(tempFrames_33556572[j_33556602].Field2));;
            if ((0 < tempFrames_33556572[j_33556602].Field1)) {
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit("("));;
            result_33556561[0].push.apply(result_33556561[0], cstrToNimstr((tempFrames_33556572[j_33556602].Field1) + ""));;
            if (false) {
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit(", "));;
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit("0"));;
            }
            
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit(")"));;
            }
            
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit(" at "));;
            add_33556420(result_33556561, 0, tempFrames_33556572[j_33556602].Field0);
            result_33556561[0].push.apply(result_33556561[0], makeNimstrLit("\x0A"));;
            res_570425444 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556561[0];

}

function rawWriteStackTrace_33556631() {
  var result_33556632 = [];

    if (!((framePtr == null))) {
    result_33556632 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556559(framePtr) || []), NTI33554439);
    }
    else {
      result_33556632 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556632;

}

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 680;
    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }  framePtr = F.prev;

  return result_33556828;

}

function unhandledException(e_33556663) {
    var buf_33556664 = [[]];
    if (!(((e_33556663.message).length == 0))) {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556664[0].push.apply(buf_33556664[0], e_33556663.message);;
    }
    else {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit(" ["));;
    add_33556420(buf_33556664, 0, e_33556663.name);
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("]\x0A"));;
    buf_33556664[0].push.apply(buf_33556664[0], rawWriteStackTrace_33556631());;
    var cbuf_33556665 = toJSStr(buf_33556664[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556665);
  }
  else {
    throw cbuf_33556665;
  }
  

  
}

function sysFatal_218103844(message_218103847) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103847, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103842(msg_218103843) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 29;
    sysFatal_218103844(msg_218103843);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103866(msg_218103867) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 39;
    raiseAssert_218103842(msg_218103867);
  framePtr = F.prev;

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556938) {
        if (a_33556938 > 2147483647 || a_33556938 < -2147483648) raiseOverflow();
  

  
}

function raiseIndexError(i_33556754, a_33556755, b_33556756) {
    var Temporary1;

    if ((b_33556756 < a_33556755)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_33556754) + "") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_33556755) + "") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_33556756) + "") || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function HEX3DHEX3D_570425371(x_570425373, y_570425374) {
  var result_570425375 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/.choosenim/toolchains/nim-#devel/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_570425383 = false;
    F.line = 302;
    sameObject_570425383 = x_570425373 === y_570425374
    if (sameObject_570425383) {
    F.line = 303;
    result_570425375 = true;
    break BeforeRet;
    }
    
    if (!(((x_570425373).length == (y_570425374).length))) {
    F.line = 306;
    result_570425375 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_570425397 = 0;
      F.line = 75;
      var colontmp__570425449 = 0;
      F.line = 308;
      colontmp__570425449 = subInt((x_570425373).length, 1);
      F.line = 90;
      var res_570425451 = 0;
      Label2: do {
        F.line = 91;
          Label3: while (true) {
          if (!(res_570425451 <= colontmp__570425449)) break Label3;
            F.line = 308;
            i_570425397 = res_570425451;
            if (!((x_570425373[chckIndx(i_570425397, 0, (x_570425373).length - 1)] == y_570425374[chckIndx(i_570425397, 0, (y_570425374).length - 1)]))) {
            F.line = 310;
            result_570425375 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_570425451 = addInt(res_570425451, 1);
          }
      } while (false);
    } while (false);
    F.line = 312;
    result_570425375 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_570425375;

}
var F = {procname: "module jspunycode_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim", line: 0};
framePtr = F;
F.line = 27;
const punycode = require('punycode');
if (!((punycode.decode("hello") == "㗁㖼㖶"))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(10, 12) `decode(str) == \"\xE3\x97\x81\xE3\x96\xBC\xE3\x96\xB6\".cstring` "));
}

if (!((punycode.encode("hello") == "hello-"))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(11, 12) `encode(str) == \"hello-\".cstring` "));
}

if (!((punycode.toASCII("hello") == "hello"))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(12, 12) `toASCII(str) == \"hello\".cstring` "));
}

if (!((punycode.toUnicode("hello") == "hello"))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(13, 12) `toUnicode(str) == \"hello\".cstring` "));
}

if (!(HEX3DHEX3D_570425371(punycode.ucs2.decode("hello"), [104, 101, 108, 108, 111]))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(14, 12) `ucs2Decode(str) == @[104.cint, 101, 108, 108, 111]` "));
}

if (!((punycode.ucs2.encode([104, 101, 108, 108, 111]) == "hello"))) {
F.line = 27;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim(15, 12) `ucs2Encode(@[104.cint, 101, 108, 108, 111]) == \"hello\".cstring` "));
}

framePtr = F.prev;
var F = {procname: "module jspunycode_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode_examples_1", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jspunycode_group0_examples", prev: framePtr, filename: "/home/runner/work/nodejs/nodejs/docs/nimcache/runnableExamples/jspunycode_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
