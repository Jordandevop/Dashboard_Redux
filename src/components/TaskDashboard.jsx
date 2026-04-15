import { Row, Col, Card } from "react-bootstrap";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";
import TaskFilter from "./TaskFilter";

export default function TaskDashboard() {

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1">Dashboard</h1>
        <p className="text-muted mb-0">Tâches</p>
      </div>

      <TaskStats />

      <Row className="g-4">
        <Col lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">Nouvelle tâche</Card.Title>
              <TaskForm/>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <TaskFilter />
              <TaskList/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
