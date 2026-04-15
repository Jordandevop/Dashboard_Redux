import React from 'react'
import {Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function TaskStats() {
  const tasks = useSelector((state) => state.task.tasks);

      const total = tasks.length;
      const terminees = tasks.filter((t) => t.done).length;
      const enCours = tasks.filter((t) => !t.done).length;
  return (
    <Row className="g-4 mb-4">
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <p className="text-muted small mb-1">Total</p>
              <h2 className="h3">{total}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <p className="text-muted small mb-1">Terminées</p>
              <h2 className="h3 text-success">{terminees}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <p className="text-muted small mb-1">En cours</p>
              <h2 className="h3 text-primary">{enCours}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  )
}
