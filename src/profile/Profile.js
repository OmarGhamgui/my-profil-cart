import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

const Profile = (props) => {
  return (
    <Card className="text-center card1 ">
      <Container fluid >
        <div className="mb-5">
          

          <h3 className="mt-5" onClick={() => props.onName(props.fullName)}>{props.fullName}</h3>
          <p className="mt-5" style={{ color: "red" }}> Email : ghamguiomar0@gmail.com<br/> {props.bio}</p>
          <h4 className="mt-5 mb-5">{props.profession}</h4>
          {props.children}
        </div>
      </Container>
    </Card>
  );
};  
Profile.defaultProps = {
  fullName: "enter your name ",
  bio: "write your bio",
  profession: "what's your profession",
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
};
export default Profile;
