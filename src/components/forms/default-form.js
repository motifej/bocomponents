import React from "react";
import GridContainer from "../MUI-Components/Grid/GridContainer.jsx";
import Button from "../MUI-Components/CustomButtons/Button.jsx";
import { inputsGenerator } from "./utils";

const DefaultForm = props => {
    const { name, onSubmit, inputsConfig, classes } = props;
    return (
        <form name={name} onSubmit={onSubmit}>
            <GridContainer>
                {inputsGenerator(inputsConfig, classes)}
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

export default DefaultForm;
