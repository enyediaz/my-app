import React, { Component } from "react";
import "./App.css";
import { Grid, Row, Col, Table } from "react-bootstrap";
import ModalWindow from "../modal/modal";
import OpenModalButton from "../button/button";
import User from "../users/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOn: false,
      value: "",
      jsonData: [],
      isLoading: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.status === 200
          ? response.json()
          : console.log("something wrong, response status is NOT 200");
      })

      .then(incomingJson => {
        this.setState({ jsonData: incomingJson });
        console.log("the state.jsonData is: ", this.state.jsonData);
        return incomingJson;
      })
      .catch(error => {
        console.log("this is a ==>", error);
      });
  }

  toggleModal() {
    this.setState(state => ({
      modalIsOn: !state.modalIsOn
    }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log("this was submitted: " + this.state.value);
    event.preventDefault();
  }

  clearModal() {
    this.setState({ value: "" });
  }

  render() {
    const { jsonData } = this.state;
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <OpenModalButton toggleModal={this.toggleModal} />
              <ModalWindow
                toggleModal={this.toggleModal}
                modalIsOn={this.state.modalIsOn}
                value={this.state.value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                clearModal={this.clearModal}
              />
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody className="userClass">
                  {jsonData &&
                    jsonData.map(user => {
                      return <User key={user.id} user={user} />;
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
