import React, { Component } from 'react';
import CheckboxList from './checkboxList'
import { connect } from 'react-redux'
import moize from 'moize'
import { updateSelectedLessons } from '../actions/updateSelectedLessons'

// Add code in this file to create a component for the main view:
// You may want to connect component to store props & dispatch 

class SelectedLessons extends Component {
  render() {
    return (
        <React.Fragment>
          <div>
            <h1>Lets have a little render then son</h1>
          </div>
        </React.Fragment>
    )
  }
}



const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SelectedLessons)

