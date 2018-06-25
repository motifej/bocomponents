import {
	RaisedPrimaryButton,
	RaisedDefaultButton,
	RaisedSecondaryButton,
	RaisedDsiabledButton
} from "./buttons";
import {
	FlatDefaultButton,
	FlatPrimaryButton,
	FlatSecondaryButton,
	FlatDisabledButton
} from "./buttons";
import Subscribe from "./Subscribe";

export const RaisedPrimaryBtn = Subscribe(RaisedPrimaryButton);
export const RaisedDefaultBtn = Subscribe(RaisedDefaultButton);
export const RaisedSecondaryBtn = Subscribe(RaisedSecondaryButton);
export const RaisedDsiabledBtn = Subscribe(RaisedDsiabledButton);

export const FlatDefaultBtn = Subscribe(FlatDefaultButton);
export const FlatPrimaryBtn = Subscribe(FlatPrimaryButton);
export const FlatSecondaryBtn = Subscribe(FlatSecondaryButton);
export const FlatDsiabledBtn = Subscribe(FlatDisabledButton);
