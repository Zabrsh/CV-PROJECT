import React from "react";

export default function Header(props) {
  return (
    <div className="top">
      <img src="../images/cv.png" className="cv" />
      <h4>CV Maker App</h4>
      <div className="mode">
        <button
          id="edit"
          className={props.edit ? "postive" : ""}
          onClick={props.editMode}
        >
          Edit Mode
        </button>
        <button
          id="preview"
          className={props.preview ? "postive" : ""}
          onClick={props.previewMode}
        >
          Preview Mode
        </button>
      </div>
    </div>
  );
}
