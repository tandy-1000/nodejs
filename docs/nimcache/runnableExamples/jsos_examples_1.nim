#[
autogenerated by docgen
loc: /home/runner/work/nodejs/nodejs/src/nodejs/jsos.nim(245, 1)
rdoccmd: 
]#
import "/home/runner/work/nodejs/nodejs/src/nodejs/jsos.nim"
{.line: ("/home/runner/work/nodejs/nodejs/src/nodejs/jsos.nim", 245, 1).}:
  requireOs()
  echo arch()
  echo endianness()
  echo freemem()
  echo getPriority(pid = 0.cint)
  echo homedir()
  echo $loadavg()
  echo platform()
  echo release()
  echo tmpdir()
  echo totalmem()
  echo ostype()
  echo uptimeOs()
  echo version()

