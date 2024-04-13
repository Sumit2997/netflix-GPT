export const validate = (email, password) => {
  let validEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
    email
  );
  let validPassword =
    /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@]).*$/.test(password);
  if (!validEmail) return "Email is not valid.";
  if (!validPassword) return "Password is not valid.";
  return null;
};
