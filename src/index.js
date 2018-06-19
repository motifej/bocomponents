require("babel-core/register");
require("babel-polyfill");

export { default as SelectField } from "./components/inputs/select-field";
export { default as Checkbox } from "./components/inputs/checkbox";
export { default as TextField } from "./components/inputs/text-field";
export { default as RadioGroup } from "./components/inputs/radio-group";
export { default as Switch } from "./components/inputs/switch";

export { default as FormTemplate } from "./components/forms/";

export { BuildDefaultTable } from "./components/tables/";
