import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navigation  from '../components/Navigation'

class App extends Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <Navigation />
            {this.props.children}
         </div>
      )
   }
}

App.propTypes = {
   children : PropTypes.element
}

function mapStateToProps(state) {
   return Object.assign({}, {
      
   });
}

export default connect(mapStateToProps)(App)