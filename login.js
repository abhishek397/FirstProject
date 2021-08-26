import React, { useState } from "react";

import { Grid, Paper, TextField, Button } from "@material-ui/core";
import DenseAppBar from "./navBar";

const LogIn = () => {
  const paperStyle = {
    padding: 10,
    height: "85vh",
    width: 300,
    margin: "70px auto",
    backgroundColor: `lightgrey   `,
  };
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [msg, setMsg] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const buttonClickHandler = () => {
    let sname = false;
    let semail = false;
    let smobile = false;
    let sage = false;
    let saddress = false;

    if (name === "") {
      setNameError("* Please Enter your name");
    } else if (name.length > 100) {
      setNameError("* Limit of character is not greater than 100");
    } else {
      setNameError("");
      sname = true;
    }

    var regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (email === "") {
      setEmailError("* Please Enter your email");
    } else if (!email.match(regex)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
      semail = true;
    }

    if (mobile === "") {
      setMobileError("* Please Enter your mobile");
    } else if (mobile.length > 10 || mobile.length < 10) {
      setMobileError("* Mobile Number must be 10 digits only");
    } else {
      setMobileError("");
      smobile = true;
    }

    if (age === "") {
      setAgeError("* Please Enter your age");
    } else if (age > 85) {
      setAgeError("* Age limit 85");
    } else {
      setAgeError("");
      sage = true;
    }

    if (address === "") {
      setAddressError("* Please Enter your address");
    } else if (address.length > 200) {
      setAddressError("* Address limit 200 character");
    } else {
      setAddressError("");
      saddress = true;
    }

    setMsg("");

    if (
      sname === true &&
      semail === true &&
      smobile === true &&
      sage === true &&
      saddress === true
    ) {
      console.log("Success");
      setMsg("Form Submitted/Thank You");
      resetHandler();
    }
  };

  const resetHandler = () => {
    setName("");
    setNameError("");
    setEmail("");
    setEmailError("");
    setAge("");
    setAgeError("");
    setMobile("");
    setMobileError("");
    setAddress("");
    setAddressError("");
    setMsg("Form Value is Reset/Please Enter the values again/Thankyou");
  };

  return (
    <Grid>
      <Grid className="nav">
        <DenseAppBar />
      </Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h3>Sign Up Form</h3>
        </Grid>

        <Grid align="center">
          <TextField
            label="Name"
            placeholder="Enter Your name"
            value={name}
            onChange={nameHandler}
          />
        </Grid>
        <Grid align="center">
          <span>
            <strong style={{ color: "red" }}>{nameError}</strong>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Email"
            placeholder="Enter Your email"
            value={email}
            onChange={emailHandler}
          />
        </Grid>

        <Grid align="center">
          {" "}
          <span>
            <strong style={{ color: "red" }}>{emailError}</strong>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Mobile"
            placeholder="Enter Your mobile"
            type="number"
            value={mobile}
            onChange={mobileHandler}
          />
        </Grid>

        <Grid align="center">
          <span>
            <strong style={{ color: "red" }}>{mobileError}</strong>
          </span>
        </Grid>
        <Grid align="center">
          <TextField
            label="Age"
            placeholder="Enter Your age"
            value={age}
            onChange={ageHandler}
          />
        </Grid>

        <Grid align="center">
          <span>
            <strong style={{ color: "red" }}>{ageError}</strong>
          </span>
        </Grid>
        <Grid>
          <br />
        </Grid>
        <Grid align="center">
          <textarea
            placeholder="Address"
            rows={5}
            cols={22}
            value={address}
            onChange={addressHandler}
          />
        </Grid>

        <Grid align="center">
          {" "}
          <span>
            <strong style={{ color: "red" }}>{addressError}</strong>
          </span>
        </Grid>
        <Grid align="center">
          <Button variant="primary" onClick={buttonClickHandler}>
            Submit
          </Button>
          <Button variant="secondary" onClick={resetHandler}>
            Reset
          </Button>
        </Grid>
        <Grid align="center">
          <span>
            <strong style={{ color: "blue" }}>{msg}</strong>
          </span>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LogIn;
