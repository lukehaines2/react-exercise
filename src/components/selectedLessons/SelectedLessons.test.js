import { SelectedLessons } from "./";
import lessonsData from "../../store/staticData/all-lessons";

let props = {
  lessons: lessonsData,
  isLoading: false,
  selectedLessons: [],
}

describe('<SelectedLessons /> component', () => {
  
  it('should render', () => {
    const component = shallow(<SelectedLessons {...props} />);
    expect(component).toBeTruthy()
  });

  it('should disable the submit button if there are no lessons selected', () => {
    const component = shallow(<SelectedLessons {...props} />);
    expect(component.find('button').prop("disabled")).toBeTruthy();
  });

  // it('should enable the submit button if there are any lessons selected', () => {
  //   // write test here
  // })

  // it('should disable form if the data is being saved', () => {
  //   // write test here
  // })

})
