export const loginHandler = (e, email, password, role) => {
  e.preventDefault();
  try {
    console.log("login", e, email, password, role);
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
