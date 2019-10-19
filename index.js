"use strict"

const _ = require("lodash")

function setProto(obj, newProto) {
    const o = obj
    _.forOwn(newProto, (value, key) => {
        o[key] = value
    })
    return o
}

module.exports = (forExport, otherExports) => {
    if (forExport && otherExports) return setProto(forExport, otherExports)
    else if (forExport && !otherExports) {
        let o = _.values(forExport)[0]
        o = _.isFunction(o) ? o.bind() : _.clone(o)
        return setProto(o, forExport)
    } else throw new ReferenceError("Invalid parameters provided!")
}
