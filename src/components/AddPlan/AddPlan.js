import React from 'react';
import PlanForm from './PlanForm';
const AddPlan = () => {

    return (
        <>
             <section id="multiple-column-form">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Plan</h4>
                </div>
                <div className="card-body">
                    <PlanForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default AddPlan;