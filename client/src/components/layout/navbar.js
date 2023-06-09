import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Image from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";

export const Header = () => {
  const auth = useSelector((state) => state.auth);
  const { token, user } = auth;
  return (
    <Navbar
      variant="dark"
      style={{ backgroundColor: "#1f1f1f", position: "top" }}
      fixed="top"
    >
      <Nav className="ml-3">
        <Nav.Link href="#resources">RESOURCES</Nav.Link>
        <Nav.Link
          href="https://seekpoll.netlify.app/"
          style={{ marginLeft: "6em" }}
        >
          POLLS
        </Nav.Link>
      </Nav>
      <Navbar.Brand className="ml-auto mr-3" style={{ fontWeight: "bolder" }}>
        {/* <a href="/">
          <Image src="seekLogoSmall.png" style={{ width: "5em" }} />
        </a> */}
        <h1>UniMate</h1>
      </Navbar.Brand>
      <Nav className="ml-auto mr-3">
        <Nav.Link
          href="https://unimateteacher.netlify.app/"
          style={{ marginRight: "6em" }}
        >
          TEACHERS
        </Nav.Link>
        {user && token && (
          <Nav.Link href={`#profile/${user._id}`}>
            {user.name.split(" ")[0]}
          </Nav.Link>
        )}
        {!user && !token && <Nav.Link href="#login">LOGIN</Nav.Link>}
      </Nav>
    </Navbar>
  );
};
