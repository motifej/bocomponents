# SHARED-COMPONENTS (2.6.0)

##Info
This project should be used by all Back Office applications for most of their components

-   Install: npm install bocomponents
-   Package location : https://www.npmjs.com/package/bocomponents

## Basic components :

## Advanced components

#### Form:

-   Available inputs in Form:
    -   text
    -   number
    -   email
    -   checkbox
    -   select
    -   radio-group
    -   checkbox
    -   range
-   Form usage example:

```javascript
import { FormTemplate } from "bocomponents";

const Form = props => {
    const { classes, reset, history } = props;

    const showResults = () => {
        history.push("/results");
    };

    return (
        <div className={classes.container}>
            <FormTemplate
                config={config}
                onSubmit={showResults}
                reset={reset}
            />
        </div>
    );
};

export default withRouter(
    reduxForm({
        form: "SearchForm",
        destroyOnUnmount: false
    })(withStyles(styles)(Form))
);
```

-   Config usage example:

```javascript
const config = {
    name: "searchUsers",
    title: "Search Diamonds",
    formInputs: [
        {
            name: "shape", // name=value will be submitted in query_string
            type: "select", //from available inputs above
            label: "Shape",
            options: shapes, // for select box only
            multiple: false, // for select box only
            grid: { //[optional]default grid is xs:12 , sm:12 (the whole grid row always)
                field: {
                    xs: 12, //amount of grid in small screen view
                    sm: 6 //amount of grid in normal view
                }
            },
            validate: [minValue(0), maxValue(1000000)] // [optional] client side validation,
            rangeProps: { // for range slider only
                defaultValue: [1, 1000000],
                marks: { 1: "1", 1000000: "1000000" },
                pushable: true,
                allowCross: false,
                min: 1,
                max: 1000000,
                step: 50
            }

        }...
```

-   Validation:

Usage:

```javascript
import { TextField } from "bocomponents/inputs/";
```

Available validation methods(self explanatory):

-   required
-   minLength
-   maxLength
-   minValue
-   maxValue
-   email
    number

#### Table

Table usage example:

```javascript
const Table = BuildDefaultTable(config);

const Results = props => {
    const { classes, history, searchForm } = props;

    const onRowClick = id => {
        history.push("/info/" + id);
    };

    config.query = (searchForm && searchForm.values) || "";
    config.onRowClick = onRowClick;

    return (
        <div>
            <Table />
        </div>
    );
};

const mapStateToProps = state => ({
    searchForm: state.form.SearchForm
});

export default withRouter(
    connect(mapStateToProps)(withStyles(styles)(Results))
);
```

Config usage example

```javascript
const config = {
    domain: "http://localhost:8083",
    endPoint: "/gems",
    onRowClick: "",
    title: "Diamonds Search Results",
    resultsHeader: [
        {
            value: "id", //value from service response
            name: "ID",  //column name in table's header
            sortable: true,
            filterable: true
        }...
```

#### MUI components (from dashboard)

Usage:

```javascript
import { GridContainer, ItemGrid, RegularCard, NavPills } from "bocomponents";
```

Docs:
https://material-ui.com/
