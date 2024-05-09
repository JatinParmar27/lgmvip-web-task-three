import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card">
        <img
          src={URL.createObjectURL(student.imageFile)}
          className="card-img-left"
          alt={student.name}
        />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">Email: {student.email}</p>
          <p className="card-text">Website: {student.website}</p>
          <p className="card-text">Gender: {student.gender}</p>
          <p className="card-text">Skills: {student.skills.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
