import { Badge } from 'react-bootstrap'

const getPriorityBadge = (priority) => {
    if (priority === "high")   return "danger"
    if (priority === "medium") return "warning"
    return "success"
}

export default function TaskCard({ task, getPriorityLabel, onToggle, onDelete }) {
    return (
        <div className='border rounded p-3 mb-2'>
            <div className='d-flex align-items-center gap-2 mb-2'>
                <input
                    type='checkbox'
                    checked={task.done}
                    onChange={() => onToggle(task.id)} 
                />
                <strong>{task.title}</strong>
            </div>
            <p>{task.description}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-2'>
                    <Badge bg={getPriorityBadge(task.priority)}>
                        {getPriorityLabel(task.priority)}
                    </Badge>
                    <Badge bg={task.done ? "success" : "primary"}>
                        {task.done ? "Terminée" : "En cours"}
                    </Badge>
                </div>
                <button
                    className='btn btn-sm btn-outline-danger'
                    onClick={() => onDelete(task.id)}
                >
                    Supprimer
                </button>
            </div>
        </div>
    )
}