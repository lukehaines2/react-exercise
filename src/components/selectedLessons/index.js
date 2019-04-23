import React, { Component } from "react";
import { connect } from "react-redux";
// import moize from "moize";

import CheckboxList from "../checkboxList";
import "./selectedLessons.scss";

import { updateSelectedLessons } from "../../actions/updateSelectedLessons";
import { getCheckboxLessons } from "../../store/selectors/getCheckboxLessons";

export class SelectedLessons extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedLessons: []
    }
  }

  handleSelection(id, checked) {
    let newLessons = this.state.selectedLessons;
    if (checked) {
      // Remove from array rather than pushing a duplicate
      newLessons = newLessons.filter((lesson) => lesson !== id );
    } else {
      newLessons.push(id);
    }
    this.setState({
      selectedLessons: newLessons
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // send the arr to BE
    this.props.updateSelectedLessons(this.state.selectedLessons);
  }

  render() {
    const { lessons, isLoading } = this.props;
    const btnDisabled = isLoading || !this.state.selectedLessons.length;
    return (
      <div className="lessonsContainer">
        <form onSubmit={this.handleSubmit}>
          <h3>Lessons List:</h3>
          <CheckboxList {...{lessons, isLoading}} handleSelection={this.handleSelection} />
          <button disabled={btnDisabled}>Submit</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    lessons: getCheckboxLessons(state),
    isLoading: state.selectedLessons.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedLessons: lessonIds => dispatch(updateSelectedLessons(lessonIds))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SelectedLessons)

