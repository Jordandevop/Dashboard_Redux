import TaskCard from './TaskCard'

export default function TaskList({ tasks, getPriorityLabel, onToggle, onDelete }) {
    return (
        <div>
            {tasks.length === 0 && (
                <p className='text-muted'>Aucune tâche pour l'instant.</p>
            )}

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    getPriorityLabel={getPriorityLabel}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}