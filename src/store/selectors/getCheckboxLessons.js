export const getCheckboxLessons = state => {
  console.log(state)
  return mapLessonsToCheckbox(state.allLessons, state.selectedLessons.selectedLessons) || [];
};

const mapLessonsToCheckbox = (lessons, selectedLessons) => {
  return lessons.map(lesson => {
    return {
      id: lesson.id,
      name: lesson.name,
      checked: selectedLessons.includes(lesson.id)
    };
  });
};
