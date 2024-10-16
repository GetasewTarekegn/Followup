import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ViewFinding() {
    const [findings, setFindings] =useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/viewFindings")
        .then((res) => setFindings(res.data))
        .catch((err) => console.log(err))
    },[])

    const handleDelete =(finding_id) =>{
        axios.delete("http://localhost:7000/delete/"+ finding_id)
        .then(res => window.alert("Are you sure you want to delete")? window.alert("Record not deleted!") :window.location.reload())
        .catch(err => console.log(err))
     }
  return (
    <div className="container-fluid">
        <h2 className="text-center">List of Findings</h2>
        <div className="table table-responsive">
    <table className="table table-bordered border-success">
  <thead className="table-dark">
    <tr>
      <td>Finding ID</td>
      <td>Audit Subject</td>
      <td>Audited Department</td>
      <td>Response Given By</td>
      <td>Auditors</td>
      <td>Finding Detail</td>
      <td>Auditee Response</td>
      <td>Audit Refelection</td>
      <td>Rectification Status</td>
      <td>Target Date</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {findings.map(finding => 
    <tr key={finding.finding_id}>
      <td>{finding.finding_id}</td>
      <td>{finding.audit_subject}</td>
      <td>{finding.auditee_dpt}</td>
      <td>{finding.given_by}</td>
      <td>{finding.Auditors}</td>
      <td>{finding.finding_detail}</td>
      <td>{finding.auditee_response}</td>
      <td>{finding.audit_refelection}</td>
      <td>{finding.status}</td>
      <td>{finding.target_date}</td>
      <td> 
         <Link to={`/updatefindings/${finding.finding_id}`} className="btn btn-info btn-sm me-2">update</Link> 
         <Link  onClick={() => handleDelete(finding.finding_id)}  className="btn btn-danger btn-sm">delete</Link> 
      </td>
    </tr>)
}
  </tbody>
</table>
</div>
<Link to={'/addfinding'} className="btn btn-primary">Create new Finding</Link>
</div>
  );
}

export default ViewFinding;
