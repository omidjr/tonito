import React from "react";
import { useStyles, ContactUS } from "../Styles/Styles";
import { Typography } from "@material-ui/core";

export const ContactUs = () => {
  const classes = useStyles();

  return (
    <ContactUS>
      <div id="cc" className={classes.contactContainer}>
        <div id="fb" className={classes.formBox}>
          <form>
            <Typography variant="h3">Contact us</Typography>
            <div className={classes.inputBox}>
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div className={classes.inputBox}>
              <input type="email" required="required" />
              <span>Email Address</span>
            </div>
            <div className={classes.inputBox}>
              <textarea required="required" />
              <span style={{ top: "0" }}>Type your message here...</span>
            </div>
            <div className={classes.inputBox}>
              <input
                type="submit"
                value="Send"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </form>
        </div>
        <div id="ib" className={classes.imgBox}>
          <img src="/img/other/contact.png" alt="contact" />
        </div>
      </div>
    </ContactUS>
  );
};
