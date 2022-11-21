import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
import PageLayout from 'components/PageLayout';
import notFoundImg from 'assets/erro404-image.svg'
import { SiteContent } from 'Constants';
import './index.scss'

const NotFound404 = () => {
  return (
    <PageLayout>
      <Container className="info padding-top-bottom-large align-center">
        <Row xs={1} md={1} lg={2} className="notfound404__row">
          <Col className="notfound404__image-wrapper ">
            <img src={notFoundImg} alt="404 warning" />
          </Col>
          <Col className="notfound404__text">
            <Row>
              <p className="text-secondary-color text-700-weight">Erro 404</p>
            </Row>
            <Row>
              <h4>{SiteContent.Title.NotFound404}</h4>
            </Row>
            <Row>
              <p>{SiteContent.Subtitle.NotFound404}</p>
            </Row>
            <Row>
              <p>
                <LinkButton
                  href="/">
                  {SiteContent.Buttons.NotFound404}
                </LinkButton>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default NotFound404;
