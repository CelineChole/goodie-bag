import { connect } from "react-redux";
import React, { Component } from "react";
import { getAllCandies } from "../store";
import { NavLink } from "react-router-dom";

class Candy extends Component {
  componentDidMount = () => {
    this.props.getCandies();
  };

  render() {
    const candiesList = this.props.candies.map(candy => {
      return (
        <div key={candy.id}>
          <NavLink to={`/candies/${candy.id}`}>{candy.name}</NavLink>
        </div>
      );
    });
    return <div>{candiesList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getAllCandies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candy);
