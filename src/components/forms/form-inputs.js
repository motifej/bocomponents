import TextField from "inputs/TextField";
import Checkbox from "inputs/Checkbox";
import SelectField from "inputs/SelectField";
import RenderDateTimePicker from "inputs/datePicker";
import RenderInputRange from "inputs/rangeInput";
import RenderSliderWithInputs from "inputs/sliderWithInputs";

export default {
    text: TextField,
    number: TextField,
    email: TextField,
    checkbox: Checkbox,
    select: SelectField,
    date: RenderDateTimePicker,
    range: RenderInputRange,
    sliderWithInputs: RenderSliderWithInputs
};
