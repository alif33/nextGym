import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getData } from "../../../../__lib__/helpers/HttpService";
import Modals from "../../Modals/Modals";

const BodypartsModal = ({ trigger, setTrigger, id }) => {
  const [disable, setDisable] = useState(false);
  const [bodypart, setBodypart] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    getData(`/admin/bodypart/${id}`).then((data) => setBodypart(data));
  }, [id]);


  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={""}>
        <div className="d-flex justify-content-center">
          <div>
            <div className="d-flex justify-content-center">
              <img
                className="w-50 rounded-circle border border-primary p-3"
                src={bodypart?.image}
                alt=""
              />
            </div>
            <h2 className="text-center">{bodypart?.name}</h2>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default BodypartsModal;
