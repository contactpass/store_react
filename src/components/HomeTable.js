import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

export default function HomeTable(props) {
  const tableList = () => {
    if (props.product.data !== undefined) {
      // var dataList = [];
      for (let i = 0; i < props.product.data.length; i++) {
        let item = props.product.data[i];
        item.action = (
          <Link to={{ pathname: "/product", data: item }}>
            <span style={{ color: "green" }}>Edit</span>
          </Link>
        );
      }
    }
    return props.product.data;
  };
  const data = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "Detail",
        field: "detail",
        sort: "asc",
        width: 270,
      },
      {
        label: "Stock",
        field: "stock",
        sort: "asc",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: tableList(),
  };
  console.log("data: ", data);

  return (
    <div>
      <MDBDataTable striped bordered small data={data} />
      <p>Hello</p>
    </div>
  );
}
