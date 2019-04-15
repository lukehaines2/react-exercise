export const getCheckboxLessons = state => {
  return mapLessonsToCheckbox(state.allLessons, state.selectedLessons.selectedLessons) || [];
};

const mapLessonsToCheckbox = (lessons, selectedLessons) => {
  return lessons.map(lesson => {
    return {
      value: lesson.id,
      name: lesson.name,
      checked: selectedLessons.includes(lesson.id)
    };
  });
};
