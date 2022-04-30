import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Made with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/iamAngelSH"
          aria-label="My GitHub"
        >
          Angel Santana Hernandez
        </a>{" "}
        {/* using <i className="fab fa-react" /> */}
        <p>
          <small className="text-muted">
            Code | Eat | Sleep | Dream
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;


// <i className="fas fa-code" />