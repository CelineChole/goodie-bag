import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getCandyById, changeQuantity } from '../store'

class SingleCandy extends Component {

  componentDidMount = () => {
    this.props.getCandyById(this.props.match.params.id)
  }

  handleSubmit = (event) => {
    switch (event.target.id) {
      case "increase":
        this.props.changeQuantity(this.props.candy.id, this.props.candy.quantity + 1);
        break;
      case "decrease":
        this.props.changeQuantity(this.props.candy.id, this.props.candy.quantity - 1);
        break;
      default:
        break;
    }
  }

  render() {

    const disabled = this.props.candy.quantity === 0 ? true : false

    return (
      <div>
        <p>Candy: {this.props.candy.name}</p>
        <img src={this.props.candy.imageUrl}></img>
        <p>Quantity: {this.props.candy.quantity}</p>
        <p><button onClick={this.handleSubmit} id="increase"type="submit">Increase</button></p>
        <p><button onClick={this.handleSubmit} id="decrease" type="submit" disabled={disabled}>Decrease</button></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candy: state.candy,
    quantity: state.quantity
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    getCandyById: (id) => dispatch(getCandyById(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(SingleCandy)
