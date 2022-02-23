import React, { useState, useEffect, memo } from "react";
import HOC from "./Hoc";


const Button = HOC((props) => (
  <button onClick={props.update}>
    {props.children}-{props.count}
  </button>
));

class Label extends React.Component {
  //传统组件
  static defaultProps = {
    n: "C",
  };
  componentWillMount() {
    console.log("C will mount");
  }
  componentDidMount() {
    console.log("C did mount");
    console.log(this.props);
  }
  render() {
    return (
      <label>
        {this.props.children}-{this.props.count}
      </label>
    );
  }
}

const LabelHoc = HOC(Label);


class HocTestPage extends React.Component {
  //根组件

  render() {
    return (
      <div>
        <Button>button</Button>
        <br />
        <LabelHoc>label</LabelHoc>
      </div>
    );
  }
}

export default HocTestPage;
