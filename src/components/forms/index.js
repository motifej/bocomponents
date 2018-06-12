import React from "react";
import { reduxForm } from "redux-form";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "../MUI-Components/Grid/GridContainer.jsx";
import ItemGrid from "../MUI-Components/Grid/ItemGrid";
import Button from "../MUI-Components/CustomButtons/Button.jsx";
import HeaderCard from "../MUI-Components/Cards/HeaderCard";

import { createInputs } from "./utils";
import formStyle from "./style.js";

const Form = props => {
    const { name, onSubmit, inputsConfig, classes } = props;
    return (
        <form name={name} onSubmit={onSubmit}>
            <GridContainer>
                {createInputs(inputsConfig, classes)}
                <div className={classes.buttonWrapper}>
                    <Button color="info">Reset Form</Button>
                    <Button color="success" onClick={onSubmit}>
                        Send
                    </Button>
                </div>
            </GridContainer>
        </form>
    );
};

const FormTemplate = props => {
    const { config, pristine, reset, submitting, onSubmit, classes } = props;
    const newForm = (
        <Form
            name={config.name}
            onSubmit={onSubmit}
            inputsConfig={config.formInputs}
            classes={classes}
        />
    );
    return (
        <GridContainer className={classes.container}>
            <ItemGrid xs={12} sm={12} md={12}>
                <HeaderCard
                    cardTitle={config.title || "Search"}
                    headerColor="blue"
                    content={newForm}
                />
            </ItemGrid>
        </GridContainer>
    );
};

export default withStyles(formStyle)(FormTemplate);
