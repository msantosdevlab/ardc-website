import React from "react";
import { ReactComponent as GreenArrow } from "assets/icons/green-arrow.svg";
import { Col, Container, Row } from "react-bootstrap";

const LinkArrow = ({ href, disabled = false, children }) => (
  <a className="button-tertiary" href={href} disabled={disabled}>
    <Container>
      <Row>
        <Col className="col-auto p-0">
          <GreenArrow />
        </Col>
        <Col className="col-auto">
          {children}
        </Col>
      </Row>
    </Container>
  </a>
);

export default LinkArrow;
