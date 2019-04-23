import { SelectedLessons } from "./";
import lessonsData from "../../store/staticData/all-lessons";


describe('<SelectedLessons /> component', () => {
  let props = {
    lessons: lessonsData,
    isLoading: false,
    selectedLessons: [],
  }

  it('should render', () => {
    const component = shallow(<SelectedLessons {...props} />);
    expect(component).toBeTruthy();
  });

  it('should disable the submit button if there are no lessons selected', () => {
    const component = shallow(<SelectedLessons {...props} />);
    expect(component.find('button').prop("disabled")).toBeTruthy();
  });

  it('should enable the submit button if there are any lessons selected', () => {
    const selectedLessons = shallow(<SelectedLessons {...props} />);
    const checkbox = selectedLessons.find('CheckboxList').dive().find('input').first();

    expect(selectedLessons.find('button').prop("disabled")).toBeTruthy();
    checkbox.simulate('change', { target: { checked: true }});
    expect(selectedLessons.find('button').prop('disabled')).toBeFalsy();
  });

  it('should disable form if the data is being saved', () => {
    props.isLoading = true;
    const component = shallow(<SelectedLessons {...props} />);
    expect(component.find('fieldset').prop("disabled")).toBeTruthy();
  });

});
