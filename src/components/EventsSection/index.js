import React from 'react';
import EventCard from '../EventCard';
import activities from '../../data/activities';
import Carousel from 'components/Carousel';
import './events-section.scss';

import { Row, Container } from 'react-bootstrap';

function EventsSection({ translation }) {
  const events = activities.slice(0, 8).map((item) => <EventCard item={item} key={item.id} />);

  return (
    <Container className="mt-5 py-md-5 event-section">
      <Row>
        <h2 className="mb-2">{translation('HomePage-EventsSection-Title')}</h2>
        <p className="mb-5"></p>
      </Row>
      <Row>
        <Carousel items={events} />
      </Row>
    </Container>
  );
}

export default EventsSection;
