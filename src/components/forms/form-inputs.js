import TextField from "inputs/TextField";
import Checkbox from "inputs/Checkbox";
import SelectField from "inputs/SelectField";
import RenderDateTimePicker from "../inputs/date-picker";
import RenderInputRange from "../inputs/range-input";

export default {
	text: TextField,
	number: TextField,
	email: TextField,
	checkbox: Checkbox,
	select: SelectField,
	date: RenderDateTimePicker,
	range: RenderInputRange
};
