(module
  (import "console" "log" (func $log (param i32)))
  (func $add (param $x i32) (param $y i32) (result i32)
    (call $log (i32.add (get_local $x) (get_local $y)))
    (i32.add (get_local $x) (get_local $y))
  )
  (export "add" (func $add))
)
