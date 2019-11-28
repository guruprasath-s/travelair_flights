import React from "react";
import FlighList from "../fixtures/flights";
import { Jumbotron, Table, Button } from "reactstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const data = FlighList.flights;
    const columns = [
      {
        Header: "Flight Id",
        accessor: "id"
      },
      {
        Header: "Travel Between",
        accessor: "travel"
      },
      {
        Header: "Time",
        accessor: "time"
      }
    ];
    return (
      <>
        <Jumbotron>
          <h1 className="display-7">
            Welcome to TravelAir Flight Onboarding WebApp
          </h1>
        </Jumbotron>
        <div>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={3}
            pageSizeOptions={[3, 6]}
          />
        </div>
      </>
    );
  }
}

export { Home as default };
