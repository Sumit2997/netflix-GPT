export const checkValidateData = (email, password) => {
  let validEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
    email
  );
  let validPassword =
    /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@]).*$/.test(password);
  if (!validEmail) return "Please enter a valid email address.";
  if (!validPassword) return "Please enter a valid password";
  return null;
};
