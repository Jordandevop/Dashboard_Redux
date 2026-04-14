// Toggler le statut
export const toggleTask = (tasks, id) =>
    tasks.map(t => t.id === id ? {...t, done: !t.done} : t)

// Filtrer par statut
export const filterTasks = (tasks, filter) => {
    if (filter === 'done')       return tasks.filter(t => t.done)
    if (filter === 'inProgress') return tasks.filter(t => !t.done)
    return tasks  
}

// Trier par priorité
export const sortByPriority = (tasks) => {
    const order = { high: 1, medium: 2, low: 3 }
    return [...tasks].sort((a, b) => order[a.priority] - order[b.priority])
}

// Rechercher une tâche
export const searchTasks = (tasks, query) =>
    tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))