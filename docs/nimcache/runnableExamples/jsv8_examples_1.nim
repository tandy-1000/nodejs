#[
autogenerated by docgen
loc: /home/runner/work/nodejs/nodejs/src/nodejs/jsv8.nim(34, 1)
rdoccmd: 
]#
import "/home/runner/work/nodejs/nodejs/src/nodejs/jsv8.nim"
{.line: ("/home/runner/work/nodejs/nodejs/src/nodejs/jsv8.nim", 34, 1).}:
  requireV8()
  doAssert cachedDataVersionTag() is cint
  # takeCoverage()
  # stopCoverage()
  echo writeHeapSnapshot("file.txt".cstring)

