import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Link }    from 'react-router'

class Navigation extends Component {

  render() {
    return(
      <div id="component-navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User without</Link></li>
          <li><Link to="/user/roar">User with token</Link></li>
        </ul>
      </div>
    )
  }
}

Navigation.propTypes = {
   
}

export default Navigation;