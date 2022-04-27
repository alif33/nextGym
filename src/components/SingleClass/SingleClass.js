import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { getData } from "../../../__lib__/helpers/HttpService";
import Modals from "../Modals/Modals";

const SingleClassModal = ({ trigger, setTrigger, classId }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const [classSchedul, setClassSchedule] = useState();

  useEffect(() => {
    getData(`/admin/class/${classId}`).then((data) => setClassSchedule(data));
  }, [classId]);

  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={"modal-lg"}>
        <h1 className="text-center mb-1" id="addNewCardTitle">
          Class Details
        </h1>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 border">
              <div  className="d-flex justify-content-start ">
                <h5 className="fw-1">Class Name:</h5> <span>this is clas name</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border">
              <div className="d-flex justify-content-start ">
                <h5 className="fw-1">Staff Member:</h5> <span>Mmeber anme</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border">
              <div className="d-flex justify-content-start ">
                <h5 className="fw-1">Start Date:</h5> <span>01/01/2020</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-1">End Date:</h5> <span>01/01/2020</span>
              </div>
            </div>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default SingleClassModal;
