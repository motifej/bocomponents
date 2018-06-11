import React from "react";
import Button from "@material-ui/core/Button";

/* Raised Buttons */
export const RaisedDefaultButton = () => (
    <Button variant="raised">Click me</Button>
);

export const RaisedPrimaryButton = () => (
    <Button variant="raised" color="primary">
        Click me
    </Button>
);

export const RaisedSecondaryButton = () => (
    <Button variant="raised" color="secondary">
        Click me
    </Button>
);

export const RaisedDsiabledButton = () => (
    <Button variant="raised" color="secondary" disabled>
        Disabled
    </Button>
);

/*Flat Buttons */
export const FlatDefaultButton = () => <Button>Click me</Button>;

export const FlatPrimaryButton = () => (
    <Button color="primary">Click me</Button>
);

export const FlatSecondaryButton = () => (
    <Button color="secondary">Click me</Button>
);

export const FlatDisabledButton = () => <Button disabled>Click me</Button>;
