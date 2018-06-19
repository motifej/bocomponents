import Subscribe from "./Subscribe";
import DefaultTable from "./default-table";
import Pagination from "./pagination";

export const BuildDefaultTable = config => Subscribe(DefaultTable, config);
