import React from "react";

export default function Skill(props) {
  return (
    <form onSubmit={props.handleSkillInfoSubmit} className="skillForm">
      <div className="skill">
        <div className="skill-header">
          <h4>Skill</h4>
        </div>
        <div className="">
          <label>Skill</label>
          <input
            type="skill"
            name="skillAcquired"
            onChange={props.handleSkill}
            value={props.skillInfo.skillAcquired}
          ></input>
        </div>
        <div className="action">
          <button>+ Add</button>
        </div>
      </div>
    </form>
  );
}
