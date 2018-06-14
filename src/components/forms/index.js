import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import HeaderCard from "../MUI-Components/Cards/HeaderCard";

import defaultFormStyle from "./style.js";
import DefaultForm from "./default-form";

const FormTemplate = props => {
    const { config, onSubmit, classes, reset, invalid } = props;
    const newForm = (
        <DefaultForm
            name={config.name}
            onSubmit={onSubmit}
            inputsConfig={config.formInputs}
            classes={classes}
            reset={reset}
            invalid={invalid}
        />
    );
    return (
        <HeaderCard
            cardTitle={config.title || "Search"}
            headerColor="blue"
            content={newForm}
        />
    );
};

export default withStyles(defaultFormStyle)(FormTemplate);
