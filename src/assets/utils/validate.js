import validateForm from "validate.js";

const regexPattern = {
  GENERAL_INPUT: /^[^(?=.*[!@#$%^&*“'\\[\\\]\\{\\}<>\\(\\)=\\\\\\-_´+`~\\:;,\\.€\\|\]\)[0-9\]][_ / a-zA-Z\u0400-\u04FF\u00c0-\u00FF\u0100-\u017F\u0218-\u021B- ]{0,50}$/,
};

var constraints = {
  username: {
    presence: {
      allowEmpty: false,
    },
    format: {
      scriptDependent: true,
      pattern: regexPattern.GENERAL_INPUT,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
    },
    format: {
      scriptDependent: true,
      pattern: regexPattern.GENERAL_INPUT,
    },
  },
};

const _validate = (values, constraints) => {
  var errors = validateForm(values, constraints);

  return errors || null;
};

const validateLogin = (values, props) => {
  let v;
  v = _validate(
    {
      ...values,
    },
    {
      username: constraints.username,
      password: constraints.password,
    }
  );
  return v;
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "unesi usename polje";
  }
  if (!formValues.password) {
    errors.password = "unesi password polje";
  }
  return errors;
};

export { validate, validateLogin };
