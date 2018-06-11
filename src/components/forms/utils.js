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
import TextField from "inputs/TextField";
import Checkbox from "../inputs/checkbox";
import SelectField from "../inputs/select-field";

const Inputs = {
    text: TextField,
    number: TextField,
    email: TextField,
    checkbox: Checkbox,
    select: SelectField
};

export const createInputs = (inputs, classes) =>
    inputs.map(
        (input, index) =>
            input.type === "select"
                ? createSelectInput(input, index, classes)
                : createInput(input, index, classes)
    );

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
const createField = (input, classes, index) => (
    <Field
        className={
            input.type === "select"
                ? classes.select
                : input.type === "checkbox"
                    ? classes.checkbox
                    : classes.input
        }
        inputProps={{ id: input.input_id }}
        MenuProps={input.options ? { className: classes.selectMenu } : null}
        key={index}
        name={input.name}
        type={input.type}
        component={SelectField}
        placeholder={input.placeholder}
        format={value =>
            !input.multiple
                ? value || ""
                : input.multiple && Array.isArray(value)
                    ? value
                    : []
        }
        multiple={input.multiple}
    >
        {input.type === "select"
            ? createMenuItems(input.options, classes)
            : null}
    </Field>
);

const createInput = (input, index, classes) => {
    const field = createField(input, classes, index);

    // <Field className={input.type === "checkbox" ? classes.checkbox : classes.input}
    //  key={index} name={input.name} placeholder={input.placeholder} type={input.type} component={Inputs[input.type]}
    //  InputLabelProps={{ shrink: true }} />

    const checkboxField = (
        <FormControlLabel control={field} label={input.checkboxLabel} />
    );

    return (
        <React.Fragment key={index}>
            {createLabelItemGrid(input, classes)}
            <ItemGrid
                xs={input.grid.field.xs || 12}
                sm={input.grid.field.sm || 9}
            >
                {input.type !== "checkbox" ? field : checkboxField}
            </ItemGrid>
        </React.Fragment>
    );
};
const createLabelItemGrid = (input, classes) => {
    return (
        <ItemGrid xs={input.grid.label.xs || 12} sm={input.grid.label.sm || 2}>
            <FormLabel className={classes.formLabel}>{input.label}</FormLabel>
        </ItemGrid>
    );
};
const createSelectInput = (input, index, classes) => {
    return (
        <React.Fragment key={index}>
            {createLabelItemGrid(input, classes)}
            <ItemGrid
                xs={input.grid.field.xs || 12}
                sm={input.grid.field.sm || 9}
            >
                <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                        htmlFor={input.input_id}
                        className={classes.selectLabel}
                    >
                        {"Select" + " " + input.label}
                    </InputLabel>
                    {createField(input, classes, index)}
                </FormControl>
            </ItemGrid>
        </React.Fragment>
    );
};
