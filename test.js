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
    const result = defaultExports({
        a: () => "a",
        b: () => "b",
        c: "c",
    })

    t.is(result(), "a")
    t.is(result.a(), "a")
    t.is(result.b(), "b")
    t.is(result.c, "c")
    t.falsy(result.a.a)
    t.falsy(result.a.b)
})

test("defaultExports(defaultExport, otherExports)", (t) => {
    const result = defaultExports(() => "a", {
        b: () => "b",
    })

    t.is(result(), "a")
    t.falsy(result.a)
    t.is(result.b(), "b")
})
