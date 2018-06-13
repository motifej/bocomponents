import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({
    input,
    placeholder,
    defaultValue,
    meta: { touched, error }
}) => (
    <div>
        <DatePicker
            {...input}
            dateForm="MM/DD/YYYY"
            selected={input.value ? moment(input.value, "MM/DD/YYYY") : null}
        />
        {touched && error && <span>{error}</span>}
    </div>
);

export default renderDatePicker;
