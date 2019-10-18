import test from "ava"
import defaultExports from "."

test("main", (t) => {
    t.throws(() => {
        defaultExports()
    }, {
        instanceOf: ReferenceError,
        message: "Invalid parameters provided!",
    })
})

test("defaultExports(forExport)", (t) => {
    const a = ["a"]
    const b = ["b"]

    const result = defaultExports({
        a,
        b,
    })

    t.is(result, a)
    t.is(result.a, a)
    t.is(result.b, b)
})

test("defaultExports(defaultExport, otherExports)", (t) => {
    const a = ["a"]
    const b = ["b"]

    const result = defaultExports(a, {
        b,
    })

    t.is(result, a)
    t.falsy(result.a)
    t.is(result.b, b)
})
