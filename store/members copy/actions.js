import { getData } from '../../__lib__/helpers/HttpService';
import { memberSlice } from "./slice";
const { actions: slice } = memberSlice;

export const setMembers = () => (dispatch) => {
  console.log("hello member")
  getData('/admin/members')
    .then(response => dispatch(slice.setMembers(response)))
}
