import React from "react";

// material-ui components
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import { Field } from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// core components
import ItemGrid from "../MUI-Components/Grid/ItemGrid.jsx";
import Inputs from "./form-inputs";

export const createInputs = (inputs, classes) =>
    inputs.map(
        (input, index) =>
            input.type === "select"
                ? createSelectInput(input, index, classes)
                : createInput(input, index, classes)
    );

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

const setStyle = (type, styles) =>
    type === "select"
        ? styles.select
        : type === "checkbox"
            ? styles.checkbox
            : styles.input;

const setFormat = (value, multiple) =>
    !multiple ? value || "" : multiple && Array.isArray(value) ? value : [];

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

const createCheckboxField = (field, label) => (
    <FormControlLabel control={field} label={label} />
);

const createInput = (input, index, classes) => {
    const field = createField(input, classes, index);
    const checkboxField = createCheckboxField(field, input.checkboxLabel);

    return (
        <React.Fragment key={index}>
            {createLabelItemGrid(input, classes)}
            <ItemGrid
                xs={(input.grid && input.grid.field.xs) || 12}
                sm={(input.grid && input.grid.field.sm) || 9}
            >
                {input.type !== "checkbox" ? field : checkboxField}
            </ItemGrid>
        </React.Fragment>
    );
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

const createSelectInput = (input, index, classes) => {
    return (
        <React.Fragment key={index}>
            {createLabelItemGrid(input, classes)}
            <ItemGrid
                xs={(input.grid && input.grid.field.xs) || 12}
                sm={(input.grid && input.grid.field.sm) || 9}
            >
                <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel className={classes.selectLabel}>
                        {"Select.."}
                    </InputLabel>
                    {createField(input, classes, index)}
                </FormControl>
            </ItemGrid>
        </React.Fragment>
    );
};

// <Field className={input.type === "checkbox" ? classes.checkbox : classes.input}
//  key={index} name={input.name} placeholder={input.placeholder} type={input.type} component={Inputs[input.type]}
//  InputLabelProps={{ shrink: true }} />

// const Subscribe = (Input, config) =>
//     class extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (

//         )
//     }
// }
