import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {

    const {deleteTask, updateTask, deleting} = useTasks()

    const handleDelete = () => {
        deleteTask(task.id)        
    }

    const handleToggleDone = () => {
        updateTask(task.id, {done: !task.done})
    }

    return (
        <div className="card card-body mb-2">
            <p className="h4">{task.name}</p>
            <p>{task.done ? "✔️" : "❌"}</p>
            <div className="ms-auto">
                <button 
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => handleDelete()} 
                    disabled={deleting}
                >
                    { deleting === task.id ? "Deleting..." : "Delete" }
                </button>
                <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleToggleDone()}
                >
                    {!task.done ? 'Done' : 'Undone'}
                </button>
            </div>
        </div>
    )
}

export default TaskCard