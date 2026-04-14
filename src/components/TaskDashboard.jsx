import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { toggleTask, filterTasks, sortByPriority, searchTasks } from "../utils/tasks.utils";

const priorityOptions = [
  { value: "low", label: "Basse" },
  { value: "medium", label: "Moyenne" },
  { value: "high", label: "Haute" },
];

const getPriorityLabel = (priority) => {
  return priorityOptions.find((o) => o.value === priority)?.label ?? "Non définie";
};

export default function TaskDashboard() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    done: false,
  });
  const [errors, setErrors]   = useState({ title: "", description: "" });
  const [tasks, setTasks]     = useState([
    { id: 1, title: "Faire les courses",  description: "Acheter du pain et du lait",             priority: "low",  done: false },
    { id: 2, title: "Laver la voiture",   description: "Laver la voiture au retour de vacances",  priority: "high", done: false },
  ]);
  const [filter, setFilter]   = useState("all");
  const [sort, setSort]       = useState(false);
  const [search, setSearch]   = useState("");

  const validate = () => {
    const newErrors = { title: "", description: "" };
    if (!formData.title.trim())       newErrors.title       = "Le titre est obligatoire";
    if (!formData.description.trim()) newErrors.description = "La description est obligatoire";
    setErrors(newErrors);
    return !newErrors.title && !newErrors.description;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const addTask = () => {
    const newTask = { id: Date.now(), ...formData };
    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addTask();
    alert(`Titre : ${formData.title}
Description : ${formData.description}
Priorité : ${getPriorityLabel(formData.priority)}
Statut : ${formData.done ? "Terminée" : "En cours"}`);
    setFormData({ title: "", description: "", priority: "", done: false });
  };

  const handleToggle = (id) => {
    setTasks(toggleTask(tasks, id));
  };

  const total     = tasks.length;
  const terminees = tasks.filter((t) => t.done).length;
  const enCours   = tasks.filter((t) => !t.done).length;

  let displayedTasks = filterTasks(tasks, filter);
  displayedTasks     = searchTasks(displayedTasks, search);
  if (sort) displayedTasks = sortByPriority(displayedTasks);

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1">Dashboard</h1>
        <p className="text-muted mb-0">Tâches</p>
      </div>

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

      <Row className="g-4">
        <Col lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">Nouvelle tâche</Card.Title>
              <TaskForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                priorityOptions={priorityOptions}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">Tâches ({total})</Card.Title>
              <div className="d-flex gap-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <select
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">Toutes</option>
                  <option value="done">Terminées</option>
                  <option value="inProgress">En cours</option>
                </select>
                <button
                  className={`btn ${sort ? "btn-dark" : "btn-outline-dark"}`}
                  onClick={() => setSort(!sort)}
                >
                  Priorité
                </button>
              </div>
              <TaskList
                tasks={displayedTasks}
                getPriorityLabel={getPriorityLabel}
                onToggle={handleToggle}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}