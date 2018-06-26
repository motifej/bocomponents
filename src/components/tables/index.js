import "babel-core/register";
import "babel-polyfill";

import Subscribe from "subscribe/table";
import DefaultTable from "tables/default";

export const BuildDefaultTable = config => Subscribe(DefaultTable, config);
