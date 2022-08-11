import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import { useNavigate } from 'react-router-dom';
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <TaskForm />

        <header className="d-flex justify-content-between my-3">
          <span className="h5">Task {showTaskDone ? 'done' : 'pending'}</span>
          <button 
            onClick={() => setShowTaskDone(!showTaskDone)}
            className="btn btn-dark btn-sm"
          >
            Show task {!showTaskDone ? 'done' : 'pending'}
          </button>
        </header>

        <TaskList done={showTaskDone} />
      </div>
    </div>
  )
}

export default Home