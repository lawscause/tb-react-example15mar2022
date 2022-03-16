import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
  }
  render() {
    return (
      <h1>
        Hi, I am a {this.props.color} {this.props.model} Car!
      </h1>
    );
  }
}


/*
var Car = () => {
  return (
    <div>
      <p1></p1>
      <h1>Hi, I am a Car from an arrow function!</h1>
    </div>
  );
};
*/

/*let mazda = new Car();
mazda.state.color = "yellow";
console.log("mazda.state.color", mazda.state.color);

console.log("Car: ", Car);*/

export default Car;
