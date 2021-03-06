import React from "react";
import GridContainer from "MUI/Grid/GridContainer";
import Button from "MUI/CustomButton";
import { inputsGenerator } from "../../utils";

const DefaultForm = props => {
    const { name, onSubmit, inputsConfig, classes, reset, invalid } = props;
    return (
        <form name={name} onSubmit={onSubmit}>
            <GridContainer>
                {inputsGenerator(inputsConfig, classes)}
                <div className={classes.buttonWrapper}>
                    <Button
                        color="info"
                        onClick={reset}
                        customClass={classes.formButton}
                    >
                        Reset Form
                    </Button>
                    <Button
                        color="success"
                        onClick={onSubmit}
                        disabled={invalid}
                        customClass={classes.formButton}
                    >
                        Send
                    </Button>
                </div>
            </GridContainer>
        </form>
    );
};

export default DefaultForm;
