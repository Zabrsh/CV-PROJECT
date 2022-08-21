import React from "react";

export default function Education(props) {
  return (
    <div>
      <form onSubmit={props.handleEducationalInfoSubmit} className="educationForm">
        <div className="education">
          <div className="education-header">
            <h4>Educational Information</h4>
          </div>

          <div className="one">
            <div>
              <label>Educational Institution</label>
              <input
                type="text"
                name="institution"
                onChange={props.handleEducation}
                value={props.educationalInfo.institution}
              ></input>
            </div>
            <div>
              <label>Degree or Stream</label>
              <input
                type="text"
                name="stream"
                onChange={props.handleEducation}
                value={props.educationalInfo.stream}
              ></input>
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="institutionCity"
                onChange={props.handleEducation}
                value={props.educationalInfo.institutionCity}
              ></input>
            </div>
          </div>
          <div className="two">
            <div>
              <label>From</label>
              <input
                type="text"
                name="fromYear"
                onChange={props.handleEducation}
                value={props.educationalInfo.fromYear}
              ></input>
            </div>
            <div>
              <label>To</label>
              <input
                type="text"
                name="toYear"
                onChange={props.handleEducation}
                value={props.educationalInfo.toYear}
              ></input>
            </div>
          </div>

          <div className="action">
            <button>+ Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}
