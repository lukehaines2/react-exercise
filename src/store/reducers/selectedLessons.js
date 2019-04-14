import { 
  UPDATE_SELECTED_LESSONS_REQUEST, 
  UPDATE_SELECTED_LESSONS_SUCCESS 
} from '../../actions/updateSelectedLessons'

// add code to make reducer work in this file. 

const selectedLessons = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSONS_REQUEST:
      return action.payload
    case UPDATE_SELECTED_LESSONS_SUCCESS:
      return action.payload
  }

  return state
}

export default selectedLessons
