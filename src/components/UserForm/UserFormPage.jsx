import React, { Component } from "react";
import NavComponent from "../NavComponent";
import UserFormComponent from "./UserFormComponent";

export default class UserFormPage extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    };
  }

  render() {
    return (
      <div className="UserPage">
        <NavComponent />
        <h1 className="center">Tell us about yourself</h1>
        <div className="form-component">
          <UserFormComponent onSubmitUserInfo={this.props.onSubmitUserInfo} />
        </div>
      </div>
    );
  }
}