import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getData } from "../../../../__lib__/helpers/HttpService";
import Modals from "../../Modals/Modals";

const LevelModal = ({ trigger, setTrigger, id }) => {
  const [disable, setDisable] = useState(false);
  const [level, setLevel] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    getData(`/admin/level/${id}`).then((data) => setLevel(data));
  }, [id]);


  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={""}>
        <div className="d-flex justify-content-center">
          <div>
            <div className="d-flex justify-content-center">
              <img
                className="w-50 rounded-circle border-2"
                src={level?.image}
                alt=""
              />
            </div>
            <h2 className="text-center">{level?.name}</h2>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default LevelModal;
