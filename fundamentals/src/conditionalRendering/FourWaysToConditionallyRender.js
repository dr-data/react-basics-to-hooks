import React, { Component } from "react";

import LogInButton from "../formComponents/LogInButton";
import LogOutButton from "../formComponents/LogOutButton";
import ReturnSomethingOrNothing from "./ReturnSomethingOrNothing";
import Modal from "./Modal";

export default class FourWaysToConditionallyRender extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  handleLogIn = () => {
    this.setState({ loggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const loggedIn = this.state.loggedIn;
    let button;
    if (loggedIn) {
      button = <LogOutButton onClick={this.handleLogOut} />;
    } else {
      button = <LogInButton onClick={this.handleLogIn} />;
    }
    // const loading = true;
    const loading = false;
    const loadingMessage = "Please wait this page is still loading...";
    return (
      <div className="card">
        <h4>There are four ways to conditionally render JSX elements</h4>
        <h4>1. Using Element Variables & the if-else conditional logic</h4>
        {button}
        <h4>2. Using Element Variables & the ternery operator</h4>
        {loading ? (
          <p>Loading page...</p>
        ) : (
          <p>The page has completed loading</p>
        )}
        {loggedIn ? (
          <LogOutButton onClick={this.handleLogOut} />
        ) : (
          <LogInButton onClick={this.handleLogIn} />
        )}
        <h4>
          3. Using the ternery operator directly in JSX tags without Element
          Variables
        </h4>
        <p>
          The user is logged in? <b>{loggedIn ? "Yes :-)" : "No :-("} </b>
        </p>
        <p>
          The advantage of this over the element variable is that you can write
          the condition in the JSX element. However the benefit of the element
          variable is that you can render part of a component that you want.
        </p>
        <p className="text-danger">
          Note this toggle functions for all three components and is part of the
          challenge with props - refer to the props drilling & render props
          section to see why you can not re-use a prop without using the render
          props method/ Higher Order Components/ the Context API
        </p>
        <h4>
          4. Return something or nothing with the double amperestand or
          short-circuit operator. A classic use-case is when you want to render
          a modal.
        </h4>
        <ReturnSomethingOrNothing />
        <p>{!loading && loadingMessage}</p>
        <Modal />
        <p className="text-danger">
          We do not have the same challenges with the rendering of the Modal
          here or the loading message. We have used Hooks and the modal library
          with the Modal, so props come directly from the react-modal library.
          The loading message is unique to the component that it is adding
          functionality to, the React Hooks section goes into detail of how
          Hooks improves on classic React components and the challenge of
          prop-drilling.
        </p>
      </div>
    );
  }
}
