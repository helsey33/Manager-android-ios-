import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: "EMPLOYEE_UPDATE",
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => dispatch => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({
        type: "EMPLOYEE_CREATE"
      });
      Actions.employeeList();
    });
};

export const employeesFetch = () => dispatch => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees`)
    .on("value", snapshot => {
      dispatch({ type: "EMPLOYEES_FETCH_SUCCESS", payload: snapshot.val() });
    });
};

export const employeeSave = ({ name, phone, shift, uid }) => dispatch => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: "EMPLOYEE_SAVE_SUCCESS" });
      Actions.employeeList();
    });
};

export const employeeDelete = ({ uid }) => dispatch => {
  const { currentUser } = firebase.auth();

  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList();
    });
};
