import React from "react";
import enJson from "../../en.json";

const coded = ["country_iso"];
const time = ["timestamp", "time_stamp"];
const isCoded = key => coded.includes(key);
const isTime = key => time.includes(key);
const getTime = timestamp => {
    return `${new Date(timestamp).toDateString()} ${new Date(
        timestamp
    ).toLocaleTimeString()}`;
};

const T = token => {
    return enJson[token];
};

const decoder = (key, value) => {
    if (isCoded(key)) return T(`${key}.${value}`);
    if (isTime(key)) return getTime(value);
    return value;
};

export default decoder;
