const Validation = (values) => {
  let errors = {};
  if (!values.FullName) {
    errors.FullName = "Name is required";
  }
  if (!values.Email) {
    errors.Email = "Enter valid Email";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.Email
    )
  ) {
    errors.Email = "Enter a valid Email";
  }
  if (!values.Mobile) {
    errors.Mobile = "Enter a Valid Number";
  } else if (values.Mobile > 10 && values.Mobile < 10) {
    errors.Mobile = "Number length should be 10";
  }
  if (!values.Age) {
    errors.Age = "Enter a Valid Age";
  } else if (values.Age > 85) {
    errors.Age = "Not applicable";
  }
  if (!values.Address) {
    errors.Address = "Enter a Valid Address";
  }
  return errors;
};

export default Validation;
