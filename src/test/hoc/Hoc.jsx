import React, { useState, useEffect, memo } from "react";

const HOC = (InnerComponent) =>

  class extends React.Component {
    static defaultProps = {
      n: "HOC",
    };
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    componentWillMount() {
      console.log("HOC will mount");
    }
    componentDidMount() {
      console.log("HOC did mount");
    }
    update = () => {
      const { count } = this.state;
      this.setState({
        count: count + 1,
      });
    };
    render() {
      const newProps = this.state;
      return (
        <InnerComponent {...this.props} {...newProps} update={this.update} />
      );
    }
  };


export default HOC;