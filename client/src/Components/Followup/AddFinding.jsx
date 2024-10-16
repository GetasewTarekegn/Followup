import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ViewFinding from "./ViewFinding";
const AddFinding = () => {
  const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     const value = event.target.value;
//     if (value.startsWith("IAD-IT-AF-")) {
//       setInputValue(value);
//     } else {
//       setInputValue(`IAD-AF-${value}`);
//     }
//   };

  const [values, setValues] = useState({
    fid: "",
    asubject: "",
    department: "",
    responseG: "",
    auditor1: "",
    auditor2: "",
    fdetail: "",
    aresponse: "",
    arefelection: "",
    statuses: "",
    tdate: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/addfinding", values)
      .then((res) => navigate("/viewfindings"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container  col-md-8 ps-2">
      <form
        className="row g-3 d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label for="inputfname" className="form-label">
            Finding ID<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="fid"
            className="form-control"
            placeholder="Enter Finding ID"
            // value={inputValue}
            // onInput={handleChange}
            onChange={(e) => setValues ({...values, fid: e.target.value})}
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputfname" className="form-label">
            Audit Subject
          </label>
          <input
            type="text"
            name="asubject"
            className="form-control"
            placeholder="Enter Full Name"
            onChange={(e) => setValues ({...values, asubject: e.target.value})}
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputgender" className="form-label">
            Auditee(Department)
          </label>
          <select className="form-select" name="department" 
                      onChange={(e) => setValues ({...values, department: e.target.value})}
                      required>
            <option selected>Choose...</option>
            <option>ABa Technology Infrastructure Department</option>
            <option>ABa Information System Security Department</option>
            <option>ABa Application Development and Systems Department</option>
            <option>ABa Digital Banking Operation Department</option>
            <option>ABa Digital Banking Buisness Operation</option>
            <option>Aba Programm Managment Office Department</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputfname" className="form-label">
            Response Given by
          </label>
          <input
            type="text"
            name="responseG"
            className="form-control"
            placeholder="Enter Response Giver"
            onChange={(e) => setValues ({...values, responseG: e.target.value})}

            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputgender" className="form-label">
            Audito 1
          </label>
          <select className="form-select" name="auditor1"
                      onChange={(e) => setValues ({...values, auditor1: e.target.value})}
                      required>
            <option selected>Choose...</option>
            <option>Tigist Alemayehu Gissila</option>
            <option>Fasika Shumet Demelash</option>
            <option>Abiy Bekele G/Yohannes</option>
            <option>Getasew Tarekegn Mesfin</option>
            <option>Tigist Gashaw Negera</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputgender" className="form-label">
            Auditor 2
          </label>
          <select className="form-select" name="auditor2"
                      onChange={(e) => setValues ({...values, auditor2: e.target.value})}
                      required>
            <option selected>Choose...</option>
            <option>Tigist Alemayehu Gissila</option>
            <option>Fasika Shumet Demelash</option>
            <option>Abiy Bekele G/Yohannes</option>
            <option>Getasew Tarekegn Mesfin</option>
            <option>Tigist Gashaw Negera</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="textareaInput" class="form-label">
            Finding Detial
          </label>
          <textarea
            name="fdetail"
            class="form-control"
            rows="5"
            placeholder="Type Finding detail here..."
            onChange={(e) => setValues ({...values, fdetail: e.target.value})}
          ></textarea>
        </div>
        <div class="col-md-6">
          <label for="textareaInput" class="form-label">
            Auditee Response
          </label>
          <textarea
            name="aresponse"
            class="form-control"
            rows="5"
            placeholder="Type auditee Response here..."
            onChange={(e) => setValues ({...values, aresponse: e.target.value})}

          ></textarea>
        </div>

        <div class="col-md-6">
          <label for="textareaInput" class="form-label">
            Audit Reflection
          </label>
          <textarea
            name="arefelection"
            class="form-control"
            rows="5"
            placeholder="Type Audit Refelection here..."
            onChange={(e) => setValues ({...values, arefelection: e.target.value})}

          ></textarea>
        </div>

        <div className="col-md-6">
          <label for="inputstatus" className="form-label">
            Status
          </label>
          <select className="form-select" name="statuses"
                      onChange={(e) => setValues ({...values, statuses: e.target.value})}
                      required>
            <option selected></option>
            <option>Rectified</option>
            <option>Unreactified</option>
            <option>Unreactifiable</option>
            <option>Target Date</option>
            <option>Closing To Target Date</option>
          </select>
          <div className="col-md-8">
            <label for="inputtdate" className="form-label">
              Target Date
            </label>
            <input type="date" className="form-control" name="tdate" 
                        onChange={(e) => setValues ({...values, tdate: e.target.value})}
                        required />
          </div>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary btn-lg col-md-6">
            Register Finding
          </button>
        </div>
        <div className="col-md-6">
          <Link to={'/viewfindings'} className="btn btn-primary btn-lg col-md-6">
            View Finding
          </Link>
        </div>
      </form>
      
    </div>
  );
};

export default AddFinding;
