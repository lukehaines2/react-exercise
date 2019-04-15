import { 
  UPDATE_SELECTED_LESSONS_REQUEST, 
  UPDATE_SELECTED_LESSONS_SUCCESS 
} from '../../actions/updateSelectedLessons'

const initialState = {
  selectedLessons: [],
  isLoading: false
}

const selectedLessons = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LESSONS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_SELECTED_LESSONS_SUCCESS:
      return {
        state: [...action.data],
        isLoading: false
      }
    default:
      return state
  }
}

export default selectedLessons
