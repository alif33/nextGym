import dateFormat from "dateformat";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { getData } from "../../../__lib__/helpers/HttpService";
import Modals from "../Modals/Modals";


const SingleClassModal = ({ trigger, setTrigger, classId }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();
  const [classSchedule, setClassSchedule] = useState();
  // const _valid = dateFormat(member?._valid, "yyyy-mm-dd");

  useEffect(() => {
    getData(`/admin/class-shedule/${classId}`).then((data) => setClassSchedule(data));
  }, [classId]);

  console.log(classSchedule)
  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={"modal-lg"}>
        <h1 className="text-center mb-1" id="addNewCardTitle">
          Class Details
        </h1>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 border p-1">
              <div  className="d-flex justify-content-start ">
                <h5 className="fw-bolder">Class Name: </h5> <span>this is clas name</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
                <h5 className="fw-bolder">Staff Member: </h5> <span>Mmeber anme</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
                <h5 className="fw-1">Start Date: </h5> <span>{dateFormat(classSchedule?.startDate, "dd-mm-yyyy")}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-bolder">End Date: </h5> <span>{dateFormat(classSchedule?.endDate, "dd-mm-yyyy")}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-bolder">Start Time: </h5> <span>{classSchedule?.startTime}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-bolder">End Time: </h5> <span>{classSchedule?.endTime}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-bolder">Member Limit: </h5> <span>{classSchedule?.memberLimit}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 border p-1">
              <div className="d-flex justify-content-start ">
              <h5 className="fw-bolder">Selected Date: </h5> <span>{dateFormat(classSchedule?.selectedDate, "dd-mm-yyyy")}</span>
              </div>
            </div>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default SingleClassModal;
