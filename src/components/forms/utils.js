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
import TextField from "../inputs/text-field";
import Checkbox from "../inputs/checkbox";
import SelectField from "../inputs/select-field";

const Inputs = {
    text: TextField,
    number: TextField,
    email: TextField,
    "datetime-local": TextField,
    checkbox: Checkbox,
    select: SelectField
};

export const generateInputs = (inputs, classes) =>
    inputs.map((input, index) => {
        switch (input.type) {
            case "select":
                return createSelectInput(input, index, classes);
                break;
            default:
                return createInput(input, index, classes);
                break;
        }
    });

const createLabelItemGrid = (input, classes) => {
    return (
        <ItemGrid xs={input.grid.label.xs || 12} sm={input.grid.label.sm || 2}>
            <FormLabel className={classes.formLabel}>{input.label}</FormLabel>
        </ItemGrid>
    );
};
const createInput = (input, index, classes) => {
    const inputClass = () => {
        switch (input.type) {
            case "checkbox":
                return classes.checkbox;
                break;
            case "datetime-local":
                return classes.dateInput;
                break;
            default:
                return classes.input;
        }
    };
    const field = (
        <Field
            className={inputClass()}
            label={input.type === "datetime-local" ? input.inputLabel : ""}
            key={index}
            name={input.name}
            type={input.type}
            component={Inputs[input.type]}
            InputLabelProps={{
                shrink: true
            }}
        />
    );

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
                    <Field
                        className={classes.select}
                        inputProps={{ id: input.input_id }}
                        MenuProps={{ className: classes.selectMenu }}
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
                        {input.options.map((option, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    value={option.value}
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                >
                                    {option.primaryText}
                                </MenuItem>
                            );
                        })}
                    </Field>
                </FormControl>
            </ItemGrid>
        </React.Fragment>
    );
};
