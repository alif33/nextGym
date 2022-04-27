import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getData } from "../../../../__lib__/helpers/HttpService";
import Modals from "../../Modals/Modals";

const EquipmentModal = ({ trigger, setTrigger, id }) => {
  const [disable, setDisable] = useState(false);
  const [equipment, setEquipment] = useState();
  const cookies = new Cookies();

  useEffect(() => {
    getData(`/admin/equipment/${id}`).then((data) => setEquipment(data));
  }, [id]);


  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={""}>
        <div className="d-flex justify-content-center">
          <div>
            <div className="d-flex justify-content-center">
              <img
                className="w-50 rounded-circle border border-primary p-3"
                src={equipment?.image}
                alt=""
              />
            </div>
            <h2 className="text-center">{equipment?.name}</h2>
          </div>
        </div>
      </Modals>
    </>
  );
};

export default EquipmentModal;
