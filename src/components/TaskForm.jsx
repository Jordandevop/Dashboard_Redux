import { Form, Button } from "react-bootstrap";
import TaskInput from "./TaskInput";
import TaskTextarea from "./TaskTextarea";
import TaskSelect from "./TaskSelect";
import TaskCheckbox from "./TaskCheckbox";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask} from "../features/tasksSlice";

const priorityOptions = [
  { value: "low", label: "Basse" },
  { value: "medium", label: "Moyenne" },
  { value: "high", label: "Haute" },
];

export default function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
    done: false,
  });
   const [errors, setErrors] = useState({ title: "", description: "" });

   const dispatch = useDispatch();
   const validate = () => {
    const newErrors = { title: "", description: "" }
    if (!formData.title.trim()) newErrors.title = "Le titre est obligatoire"
    if (!formData.description.trim()) newErrors.description = "La description est obligatoire"
    setErrors(newErrors)
    return !newErrors.title && !newErrors.description
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
        return
    }
    dispatch(addTask({ id: Date.now(), ...formData }))
    setFormData({ title: "", description: "", priority: "low", done: false })
}
  

const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
}

  return (
    <Form onSubmit={handleSubmit}>
      <TaskInput
        label="Titre"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
        placeholder="Saisir un titre"
      />
      <TaskTextarea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
        placeholder="Saisir une description"
      />
      <TaskSelect
        label="Priorité"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={priorityOptions}
      />
      <TaskCheckbox
        label="Terminée"
        name="done"
        checked={formData.done}
        onChange={handleChange}
      />
      <Button type="submit" variant="dark" className="w-100">
        Ajouter une tâche
      </Button>
    </Form>
  );
}
