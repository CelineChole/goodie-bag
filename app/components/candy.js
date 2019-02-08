import { connect } from 'react-redux'
import React from 'react'

const candy = () => {
  return (
    <div>
      Yo from Candy component
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    candies: state.candies
  }
}

export default connect(mapStateToProps)(candy)
