// import React from "react";

// const ReactDataTable = () => {
//   return <div>React data Table component</div>;
// };

// export default ReactDataTable;

import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
// import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import DataList from "./DataList";
import { Card } from "@material-ui/core";

const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true,
  },
  {
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Directior",
    selector: "director",
    sortable: true,
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: true,
    right: true,
  },
];

const ReactDataTable = () => {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={DataList}
          defaultSortFieldId={1}
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
};

export default ReactDataTable;
