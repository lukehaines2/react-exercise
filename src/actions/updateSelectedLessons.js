// These can be moved to a constants file if we desire
export const UPDATE_SELECTED_LESSONS_REQUEST = "UPDATE_SELECTED_LESSONS_REQUEST";
export const UPDATE_SELECTED_LESSONS_SUCCESS = "UPDATE_SELECTED_LESSONS_SUCCESS";

export const updateSelectedLessonsRequest = () => {
  return {
    type: UPDATE_SELECTED_LESSONS_REQUEST
  }
};

export const updateSelectedLessonsSuccess = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_SUCCESS,
    data: data
  }
};

export const updateSelectedLessons = lessonsIds => {
  return async dispatch => {
    const body = { lessonsIds: lessonsIds };
    dispatch(updateSelectedLessonsRequest());

    try {
      // This will error :)
      await fetch("https://admin.circusstreet.com/fake", {
        method: "POST",
        body: body
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout( () => {
        // "before catching the error and returning a successful response"
        dispatch(updateSelectedLessonsSuccess(body.lessonsIds));
      }, 1500);
    }
  };
};
