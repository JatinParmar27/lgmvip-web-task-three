import React from "react";

const EnrolledStudents = ({ students }) => {
  return (
    <div className="container pt-3">
      <h2 className="bg-dark text-light rounded">Enrolled Students</h2>
      <div className="row">
        {students.map((student, index) => (
          <div className=" mb-3" key={index}>
            <div className="card">
              <div className="row g-0">
                <div className="col ">
                  <div
                    className="imgbox"
                    style={{ width: "250px", height: "250px" }}
                  >
                    <img
                      src={URL.createObjectURL(student.imageFile)}
                      className="card-img-top"
                      alt={student.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body text-start">
                    <h3 className="card-title pb-3 fw-bold">{student.name}</h3>
                    <p className="card-text">Email: {student.email}</p>
                    <p className="card-text">Website: {student.website}</p>
                    <p className="card-text">Gender: {student.gender}</p>
                    <p className="card-text">
                      Skills: {student.skills.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledStudents;
