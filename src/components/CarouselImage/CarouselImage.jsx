import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const Example = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      renderIndicator={(i) => {
        return <div>{i}</div>;
      }}
      showArrows={true}
      autoPlay={false}
    >
      <div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};

export default Example;

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};
