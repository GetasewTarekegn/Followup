import React from 'react'
import { useParams } from 'react-router-dom';

const UpdateFinding = () => {
    const {finding_id} = useParams;
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
          .post("http://localhost:7000/updatefindings/"+finding_id, values)
          .then((res) => navigate("/viewfindings"))
          .catch((err) => console.log(err));
      };

      useEffect(() => {
        axios
          .get("http://localhost:7000/getrecord/"+finding_id)
          .then((res) =>
            setValues({
              ...values,
              fid: res.data[0].finding_id,
              asubject: res.data[0].audit_subject,
              department: res.data[0].auditee_dpt,
              responseG: res.data[0].auditee_response,
              auditor1: res.data[0].auditor_1,
              auditor2: res.data[0].auditor_2,
              fdetail: res.data[0].finding_detail,
              aresponse: res.data[0].auditee_response,
              arefelection:res.data[0].audit_refelection,
              statuses:res.data[0].status,
              tdate: res.data[0].target_date
              
            })
          )
          .catch((err) => console.log(err));
      }, []);
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
            value={values.finding_id}
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
            value={values.audit_subject}
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
                      value={values.auditee_dpt}
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
            value={values.auditee_response}
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
                     value={values.auditor_1}
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
                     value={values.auditor_2} required>
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
            value={values.finding_detail}
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
            value={values.auditee_response}
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
            value={values.audit_refelection}
            onChange={(e) => setValues ({...values, arefelection: e.target.value})}

          ></textarea>
        </div>

        <div className="col-md-6">
          <label for="inputstatus" className="form-label">
            Status
          </label>
          <select className="form-select" name="statuses"
                      onChange={(e) => setValues ({...values, statuses: e.target.value})}
                     value={value.status} required>
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
                       value={values.target_date} required />
          </div>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary btn-lg col-md-4">
            Update Finding
          </button>
        </div>
      </form>
    </div>
  );
};



export default UpdateFinding
