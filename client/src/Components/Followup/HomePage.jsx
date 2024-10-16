import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Audit Follow-Up System</h1>
        <p className="lead text-muted">Your gateway to efficient audit management</p>
      </header>

      <section className="text-center mb-5">
        <h2 className="text-secondary">What is Follow-Up?</h2>
        <p className="lead">
          Follow-up is a crucial process in auditing that ensures recommendations from audits are implemented effectively. It involves tracking the progress of actions taken in response to audit findings and ensuring that issues are resolved in a timely manner.
        </p>
      </section>

      <section>
        <h2 className="text-secondary text-center mb-4">Our Departments</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Financial Branch Audit" />
              <div className="card-body">
                <h5 className="card-title">Financial Branch Audit</h5>
                <p className="card-text">
                  Focuses on assessing financial statements and ensuring compliance with financial regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Inspection Audit" />
              <div className="card-body">
                <h5 className="card-title">Inspection Audit</h5>
                <p className="card-text">
                  Evaluates operational efficiency and compliance with established policies and procedures.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="IT Audit Division" />
              <div className="card-body">
                <h5 className="card-title">IT Audit Division</h5>
                <p className="card-text">
                  Assesses information systems and controls to ensure data integrity and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;