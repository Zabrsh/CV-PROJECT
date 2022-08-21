import React from "react";

export default function Experience(props) {
  return (
    <div>
      <form onSubmit={props.handleExperienceInfoSubmit} className="experienceForm">
        <div className="experience">
          <div className="education-header">
            <h4>Experience</h4>
          </div>

          <div className="one">
            <div>
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                onChange={props.handleExperience}
                value={props.experienceInfo.companyName}
              ></input>
            </div>
            <div>
              <label>Role</label>
              <input
                type="text"
                name="role"
                onChange={props.handleExperience}
                value={props.experienceInfo.role}
              ></input>
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="companyCity"
                onChange={props.handleExperience}
                value={props.experienceInfo.companyCity}
              ></input>
            </div>
          </div>
          <div className="two">
            <div>
              <label>From</label>
              <input
                type="text"
                name="fromYear"
                onChange={props.handleExperience}
                value={props.experienceInfo.fromYear}
              ></input>
            </div>
            <div>
              <label>To</label>
              <input
                type="text"
                name="toYear"
                onChange={props.handleExperience}
                value={props.experienceInfo.toYear}
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
