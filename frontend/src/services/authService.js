import { userLogin } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const loginHandler = (e, email, password, role) => {
  e.preventDefault();
  try {
    console.log("login", e, email, password, role);
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({email, password, role}))
  } catch (error) {
    console.log(error);
  }
};

export const registerHandle = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    console.log(
      "register",
      e,
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website
    );
  } catch (error) {
    console.log(error);
  }
};
