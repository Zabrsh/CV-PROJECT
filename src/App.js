import React from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";
import Skill from "./components/skill";
import Header from "./components/header";

export default function App() {
  //State Definitions

  const [edit, setEdit] = React.useState(true);
  const [preview, setPreview] = React.useState(false);

  //state definition for perosnal info
  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  //state definition for educational info
  const [educationalInfo, setEducationalInfo] = React.useState({
    institution: "",
    institutionCity: "",
    fromYear: "",
    toYear: "",
    stream: "",
  });

  //state definition for experience info
  const [experienceInfo, setExperienceInfo] = React.useState({
    companyName: "",
    companyCity: "",
    fromYear: "",
    toYear: "",
    role: "",
  });

  //state definition for skill info
  const [skillInfo, setSkill] = React.useState({
    skillAcquired: "",
  });

  //State Handling Functions
  // const clearState = () => {
  //   setPersonalInfo({});
   
  // };
  //Setting Mode functions
  function editMode() {
    setEdit(prevEdit => !prevEdit)
  }
  function previewMode() {
    setPreview(prev => !prev)
  }

  
//Personal information hander functions
  function handlePersonalInfoChange(event) {
    setPersonalInfo((prevPersonalInfo) => {
      return {
        ...prevPersonalInfo,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handlePersonalInfoSubmit(event) {
    event.preventDefault()
    
  }

//educational information handler function
  function handleEducation(event) {
    setEducationalInfo((prevEducationalInfo) => {
      return {
        ...prevEducationalInfo,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleEducationalInfoSubmit(event) {
    event.preventDefault();

  }

  //experience information handler function
  function handleExperience(event) {
    setExperienceInfo((prevExperienceInfo) => {
      return {
        ...prevExperienceInfo,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleExperienceInfoSubmit(event) {
    event.preventDefault();
  }

  //skill information handler function
  function handleSkill(event) {
    setSkill((prevSkill) => {
      return {
        ...prevSkill,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSkillInfoSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Header
        edit={edit}
        preview={preview}
        editMode={editMode}
        previewMode={previewMode}
      />
      
      <div className="main">
        <Personal
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
          handlePersonalInfoSubmit={handlePersonalInfoSubmit}
        />
        <Education
          educationalInfo={educationalInfo}
          handleEducation={handleEducation}
          handleEducationalInfoSubmit={handleEducationalInfoSubmit}
        />
        <Experience
          experienceInfo={experienceInfo}
          handleExperience={handleExperience}
          handleExperienceInfoSubmit={handleExperienceInfoSubmit}
        />
        <Skill
          skillInfo={skillInfo}
          handleSkill={handleSkill}
          handleSkillInfoSubmit={handleSkillInfoSubmit}
        />
      </div>
    </div>
  );
}

