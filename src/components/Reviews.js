import React, { Component } from "react";
import { InfoConsumer } from "./context";
import ReviewCards from "./ReviewCards";

class Reviews extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          return data.reviews.map((person) => {
            return <ReviewCards key={person.id} person={person} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
export default Reviews;
