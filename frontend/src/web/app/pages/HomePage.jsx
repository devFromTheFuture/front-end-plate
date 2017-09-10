import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="home-page">
        <p>Home page</p>
      </div>
    )
  }
}

HomePage.propTypes = {

}

export default connect(mapStateToProps)(HomePage)

function mapStateToProps(state, props) {

  return {
  }
}