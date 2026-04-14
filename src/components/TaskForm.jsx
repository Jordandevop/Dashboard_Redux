import { Form, Button } from 'react-bootstrap'
import TaskInput from './TaskInput'
import TaskTextarea from './TaskTextarea'
import TaskSelect from './TaskSelect'
import TaskCheckbox from './TaskCheckbox'

export default function TaskForm({ formData, errors, onChange, onSubmit, priorityOptions }) {
    return (
        <Form onSubmit={onSubmit}>
            <TaskInput
                label="Titre"
                name="title"
                value={formData.title}
                onChange={onChange}
                error={errors.title}
                placeholder="Saisir un titre"
            />
            <TaskTextarea
                label="Description"
                name="description"
                value={formData.description}
                onChange={onChange}
                error={errors.description}
                placeholder="Saisir une description"
            />
            <TaskSelect
                label="Priorité"
                name="priority"
                value={formData.priority}
                onChange={onChange}
                options={priorityOptions}
            />
            <TaskCheckbox
                label="Terminée"
                name="done"
                checked={formData.done}
                onChange={onChange}
            />
            <Button type="submit" variant="dark" className="w-100">
                Ajouter une tâche
            </Button>
        </Form>
    )
}