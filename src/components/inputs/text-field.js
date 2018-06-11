import TextField from "@material-ui/core/TextField";
import Subscribe from "./subscribe";
import { mapError } from "./utils";

export default Subscribe(TextField, ({ defaultValue, ...props }) => ({
    ...mapError(props)
}));
