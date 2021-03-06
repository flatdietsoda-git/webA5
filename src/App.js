import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import Signup from "./components/Signup";
import Home from "./components/Home";

class App extends Component {
    state = {
        jwt: "",
    };

    render() {
        return (
            <React.Fragment>
                <Navbar isSignedIn={this.state.jwt === "" ? false : true} />
                <Container>
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/post" component={PostForm} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/" component={Home} exact />
                    </Switch>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
