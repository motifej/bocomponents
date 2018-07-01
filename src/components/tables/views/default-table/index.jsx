import React from "react";
import Assignment from "@material-ui/icons/Assignment";
import { withStyles } from "@material-ui/core/styles";
import GridContainer from "MUI/Grid/GridContainer";
import ItemGrid from "MUI/Grid/ItemGrid";
import IconCard from "MUI/Cards/IconCard";
import Pagination from "subscribe/pagination";
import Filter from "subscribe/filter";
import {
    createTableHeader,
    createTableBody,
    createTableContent
} from "./utils";
import tableStyle from "./style";

const defaultTitle = "Results";

const DefaultTable = props => {
    const {
        classes,
        data,
        header,
        title,
        page,
        orderBy,
        order,
        onRowClick,
        updatePage,
        decoder,
        request,
        sortQuery,
        updateSort,
        updateQueryObject
    } = props;

    const tableHeader = createTableHeader(
        header,
        classes,
        request,
        order,
        orderBy,
        sortQuery,
        updateSort
    );
    const Filters = (
        <Filter
            header={header}
            queryObject={props.queryObject}
            classes={classes}
            updateQueryObject={updateQueryObject}
        />
    );
    const tableBody =
        data && createTableBody(data, onRowClick, classes, decoder);
    if (data && header) {
        return (
            <GridContainer>
                <ItemGrid xs={12}>
                    <IconCard
                        icon={Assignment}
                        iconColor="blue"
                        title={title || defaultTitle}
                        content={
                            <div>
                                <Pagination
                                    request={request}
                                    data={data}
                                    page={page}
                                    updatePage={updatePage}
                                />
                                {createTableContent(
                                    classes,
                                    tableHeader,
                                    Filters,
                                    tableBody
                                )}
                            </div>
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );
    } else {
        return <div>table not loaded</div>;
    }
};

export default withStyles(tableStyle)(DefaultTable);
