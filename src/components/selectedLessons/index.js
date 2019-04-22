import React, { Component } from "react";
import { connect } from "react-redux";
// import moize from "moize";

import CheckboxList from "../checkboxList";
import "./selectedLessons.scss";

import { updateSelectedLessons } from "../../actions/updateSelectedLessons";
import { getCheckboxLessons } from "../../store/selectors/getCheckboxLessons";

class SelectedLessons extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedLessons: []
    }
  }

  handleSelection(id, checked) {
    let newArr = this.state.selectedLessons;
    if (checked) {
      newArr = newArr.filter((lesson) => lesson !== id );
    } else {
      newArr.push(id);
    }
    this.setState({
      selectedLessons: newArr
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // send the arr
    this.props.updateSelectedLessons(this.state.selectedLessons)
  }

  render() {
    const { lessons, isLoading } = this.props;
    const btnDisabled = isLoading || !this.state.selectedLessons.length;
    return (
      <div className="lessonsContainer">
        <form onSubmit={this.handleSubmit} disabled={true}>
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

