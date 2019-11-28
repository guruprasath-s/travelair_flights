import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
class RenderPassengerCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardBody>
          <CardTitle>Name: {this.props.passenger.name}</CardTitle>
          <CardSubtitle>Age: {this.props.passenger.Age}</CardSubtitle>
          <CardText>Services: {this.props.passenger.ancillary}</CardText>
          <p>
            Seat Number{" "}
            <Badge color="success">{this.props.passenger.seat}</Badge>
          </p>
        </CardBody>
      </Card>
    );
  }
}

export { RenderPassengerCard as default };
