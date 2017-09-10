import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class UserPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="user-page">
        {this.props.username}
      </div>
    )
  }
}

UserPage.propTypes = {
}

export default connect(mapStateToProps)(UserPage)

function mapStateToProps(state, props) {
  return {
    username : props.params.token
  }
}