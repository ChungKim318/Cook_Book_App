const validateEmail = email => {
  const trueEmail =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

  return trueEmail.test(email);
};

export default validateEmail;
