import React from "react";

import "./checkboxList.scss";


export default ({ lessons, isLoading, handleSelection}) => {
  const onChange = (e) => {
    console.log(e.target);
    handleSelection(parseInt(e.target.id), !e.target.checked);
  };

  return (
    <div className="checkboxList">
      {lessons.map(lesson => (
        <div className="checkboxItem" key={lesson.name}>
          <input 
            type="checkbox" 
            id={lesson.id}
            disabled={isLoading}
            onChange={onChange}
          />
          <label className="name" htmlFor={lesson.id}>
            {lesson.name}
          </label>
        </div>
      ))}
    </div>
  )
}
