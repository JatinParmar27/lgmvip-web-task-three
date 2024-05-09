import React, { useState } from "react";

const RegistrationForm = ({ enrollStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  const handleClear = () => {
    // Clear form fields
    setName("");
    setEmail("");
    setWebsite("");
    setImageFile(null);
    setGender("");
    setSkills([]);
  };

  const handleEnroll = () => {
    // Proceed with enrollment
    enrollStudent({ name, email, website, imageFile, gender, skills });
    // Clear form fields after enrollment
    setName("");
    setEmail("");
    setWebsite("");
    setImageFile(null);
    setGender("");
    setSkills([]);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div className="container pt-3 pb-3 bg-light rounded">
      <h2 className="bg-dark text-light rounded">Student Enrollment Form</h2>
      <form>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-start">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Website */}
        <div className="mb-3">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        {/* Image File */}
        <div className="mb-3">
          <label htmlFor="imageFile" className="form-label">
            Image File
          </label>
          <input
            type="file"
            className="form-control"
            id="imageFile"
            onChange={handleFileChange}
          />
        </div>
        {/* Gender Selection */}
        <div className="mb-3 d-flex justify-content-around">
          <label>Gender</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {/* Skills */}
        <div className="mb-3 d-flex justify-content-around pb-4">
          <label>Skills</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="java"
              value="Java"
              onChange={(e) => handleSkillsChange(e)}
            />
            <label className="form-check-label" htmlFor="java">
              Java
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="html"
              value="HTML"
              onChange={(e) => handleSkillsChange(e)}
            />
            <label className="form-check-label" htmlFor="html">
              HTML
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="css"
              value="CSS"
              onChange={(e) => handleSkillsChange(e)}
            />
            <label className="form-check-label" htmlFor="css">
              CSS
            </label>
          </div>
        </div>
        {/* Buttons */}
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleEnroll}
        >
          Enroll Student
        </button>
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
