import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getAllCandies } from '../store'


class Candy extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount = () => {
    this.props.getCandies()
  }

  
  render() {
    
    const candiesList = this.props.candies.map(candy => {
      console.log(candy)
      return candy.name
    })
    return (
      <div>
        { candiesList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candies: state.candies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCandies: () => dispatch(getAllCandies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Candy)
