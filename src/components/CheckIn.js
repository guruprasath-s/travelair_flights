import React from "react";
import FlightList from "../fixtures/flights";
import { Jumbotron, Alert, Badge } from "reactstrap";
import RenderPassengerCard from "../components/RenderPassengerCard";
class CheckIn extends React.Component {
  render() {
    console.log(this.props);
    const id = this.props.match.params.flightid;
    const flights = FlightList.flights || [];
    const flight = flights.filter(flight => flight.id === id);
    const passengers = flight.length ? flight[0].passengers : [];
    console.log(id);
    return (
      <>
        <Jumbotron>
          <h1 className="display-3" color="primary">
            Flight: {flight[0].id}
          </h1>
          <p className="lead">
            Travels Between: <b>{flight[0].travel}</b>
          </p>
          <p className="display-7">
            Total Seats: <Badge color="secondary">{flight[0].totalseats}</Badge>
          </p>
        </Jumbotron>
        <div className="passengers-cont">
          <h6 className="passengers-list-title">
            Passengers Travelling{" "}
            <Badge color="primary">{passengers.length}</Badge>
          </h6>
          <div className="flexCont">
            {flight.length ? (
              passengers.map(passenger => {
                return (
                  <RenderPassengerCard
                    passenger={passenger}
                    key={passenger.name}
                  />
                );
              })
            ) : (
              <Alert color="danger">
                Passenger List is Not Available for Flight {id}
              </Alert>
            )}
          </div>
        </div>
      </>
    );
  }
}

export { CheckIn as default };
