import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import { Field } from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import ItemGrid from "../MUI-Components/Grid/ItemGrid.jsx";
import Inputs from "./form-inputs";
import {
    setStyle,
    setFormat,
    wrrapWithFormControl,
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

const createLabelItemGrid = (input, classes) => {
    return (
        <ItemGrid
            xs={(input.grid && input.grid.label.xs) || 12}
            sm={(input.grid && input.grid.label.sm) || 2}
        >
            <FormLabel className={classes.formLabel}>{input.label}</FormLabel>
        </ItemGrid>
    );
};

const createField = (input, classes, index) => (
    <Field
        className={setStyle(input.type, classes)}
        key={index}
        name={input.name}
        type={input.type}
        component={Inputs[input.type]}
        placeholder={input.placeholder}
        format={value => setFormat(value, input.multiple)}
        multiple={input.multiple}
    >
        {input.type === "select"
            ? createMenuItems(input.options, classes)
            : null}
    </Field>
);

const createInput = (input, index, classes) => {
    const field = createField(input, classes, index);
    return (
        <React.Fragment key={index}>
            {createLabelItemGrid(input, classes)}
            <ItemGrid
                xs={(input.grid && input.grid.field.xs) || 12}
                sm={(input.grid && input.grid.field.sm) || 9}
            >
                {input.type === "select"
                    ? wrrapWithFormControl(field)
                    : input.type === "checkbox"
                        ? wrrapWithFormControlLabel(field, input.checkboxLabel)
                        : field}
            </ItemGrid>
        </React.Fragment>
    );
};

export const inputsGenerator = (inputs, classes) =>
    inputs.map((input, index) => createInput(input, index, classes));
