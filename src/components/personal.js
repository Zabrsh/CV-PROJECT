import React from "react";

export default function Personal(props) {
  return (
    <div>
      <form onSubmit={props.handlePersonalInfoSubmit} className="personalForm">
        <div className="personal">
          <div className="personal-header">
            <h4>Personal Information</h4>
          </div>

          <div className="one">
            <div>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.firsName}
              ></input>
            </div>
            <div>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.lastName}
              ></input>
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.title}
              ></input>
            </div>
          </div>
          <div className="two">
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.phoneNumber}
              ></input>
            </div>
            <div>
              <label>City, Sub city</label>
              <input
                type="text"
                name="address"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.address}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={props.handlePersonalInfoChange}
                value={props.personalInfo.email}
              ></input>
            </div>
          </div>
        </div>
        <div className="action">
          
          <button>+ Add</button>
        </div>
      </form>
    </div>
  );
}
