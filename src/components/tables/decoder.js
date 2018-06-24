import React from "react";
import enJson from "../../en.json";

const includes = (array, key) => array.includes(key)

const decoder = {
    coded: ["country_iso"],
    time: ["timestamp", "time_stamp"],
    isCode(key) {
        return includes(decoder.coded, key)
    },
    isTime(key) {
        return includes(decoder.time, key)
    },
    getTime(timestamp) {
        return `${new Date(timestamp).toLocaleTimeString(timestamp)}`
    },
    T(token) {
        return enJson[token]
    },
    run(key, value) {
        if (decoder.isCode(key)) return decoder.T(`${key}.${value}`)
        if (decoder.isTime(key)) return decoder.getTime(value)
        return value
    }
}

export default decoder