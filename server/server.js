import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

app.use(express.json());
app.use(cors());

const port = 7000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "audit",
  dateStrings: "date",
});

db.connect((err) => {
  if (err) {
    console.log("Error Connecting");
  }
  console.log("DB connected Successfully");
});

app.get('/viewfindings',(req, res) =>{
    const sql = "SELECT *, CONCAT(auditor_1, ' and ', auditor_2) as Auditors FROM finding";
    db.query(sql, (err, data) =>{
        if(err){
            return res.json({Error: "Unable to fetch"})
        }
        return res.json(data);
    })
})


app.post("/addfinding", (req, res) => {
  const sql =
    "INSERT INTO finding (`finding_id`, `audit_subject`, `auditee_dpt`, `given_by`, `auditor_1`, `auditor_2`, `finding_detail`, `auditee_response`, `audit_refelection`, `status`, `target_date`) VALUES (?) ";
  const values = [
    req.body.fid,
    req.body.asubject,
    req.body.department,
    req.body.responseG,
    req.body.auditor1,
    req.body.auditor2,
    req.body.fdetail,
    req.body.aresponse,
    req.body.arefelection,
    req.body.statuses,
    req.body.tdate,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.put("/updatefindings/:finding_id", (req, res) => {
    const sql = "UPDATE book set finding_id = ? , audit_subject = ?, auditee_dpt = ?, given_by = ?, auditor_1= ?, auditor_2 = ?, finding_detail = ?, auditee_response = ?, audit_refelection = ?, status = ? target_date = ? where finding_id = ?";
    const values = [
        req.body.fid,
        req.body.asubject,
        req.body.department,
        req.body.responseG,
        req.body.auditor1,
        req.body.auditor2,
        req.body.fdetail,
        req.body.aresponse,
        req.body.arefelection,
        req.body.statuses,
        req.body.tdate,
      ];
          const id = req.params.finding_id;
    db.query(sql, [...values, id], (err, data) => {
      if (err) {
        return res.json({Error: "error"});
      }
      return res.json(data);
    });
    
  });

app.get('/getrecord/:finding_id', (req,res) => {
    const id= req.params.finding_id;
    const sql = "select * from finding where finding_id = ?";
    db.query(sql, [id], (err, data) =>{
        if(err){
            return res.json({Error: "Error happns"})
        }
        return res.json(data)
    })
})


app.delete("/delete/:finding_id", (req, res) => {
    const sql = "DELETE FROM finding where finding_id = ?";
    const id = req.params.finding_id;
    db.query(sql, [id], (err, data) => {
      if (err) {
        return res.json({Error: "error"});
      }
      return res.json(data);
    });
  });



app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
