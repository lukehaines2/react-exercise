import CheckboxList from "./";
import lessonsData from "../../store/staticData/all-lessons";

describe("<CheckboxList /> component", () => {
  let props;

  beforeEach(() => {
    props = {
      lessons: lessonsData
    }
  });

  it("should display the correct name for the first item", () => {
    const checkboxList = shallow(<CheckboxList {...props} />);
    expect(checkboxList.find('label').first().text()).toEqual(props.lessons[0].name);
  });

  it("should display the right number of items", () => {
    const checkboxList = shallow(<CheckboxList {...props} />);
    expect(checkboxList.find('.checkboxItem')).toHaveLength(props.lessons.length);
  });
});
