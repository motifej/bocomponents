import React from "react";
import { Field } from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import ItemGrid from "MUI/Grid/ItemGrid";
import Inputs from "./form-inputs";
import {
    setStyle,
    setFormat,
    wrapWithFormControl,
    wrrapWithFormControlLabel
} from "./helpers";

const createMenuItems = (options, classes) => {
    return options.map((item, index) => {
        return (
            <MenuItem
                key={index}
                value={item.value}
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                }}
            >
                {item.primaryText}
            </MenuItem>
        );
    });
};

const createField = (input, classes, index) => {
    return (
        <Field
            className={setStyle(input.type, classes)}
            key={index}
            name={input.name}
            component={Inputs[input.type]}
            format={value => setFormat(value, input.multiple)}
            validate={input.validate}
            {...input}
        >
            {input.type === "select"
                ? createMenuItems(input.options, classes)
                : null}
        </Field>
    );
};

const createInput = (input, index, classes) => {
    const field = createField(input, classes, index);
    return (
        <React.Fragment key={index}>
            <ItemGrid
                xs={(input.grid && input.grid.field.xs) || 12}
                sm={(input.grid && input.grid.field.sm) || 12}
            >
                {input.type === "select"
                    ? wrapWithFormControl(field)
                    : input.type === "checkbox"
                        ? wrrapWithFormControlLabel(field, input.label)
                        : field}
            </ItemGrid>
        </React.Fragment>
    );
};

export const inputsGenerator = (inputs, classes) =>
    inputs.map((input, index) => createInput(input, index, classes));
