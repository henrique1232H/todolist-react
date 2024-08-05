import { Main, Form, Nav, Section } from "./style"
import rocket from "../../assets/rocket.svg"
import Input from "../../components/Input"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Task from "../../components/Task"
import NoTask from "../../components/NoTask"


export default function Home() {
  
  const [input, setInput] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([])
  const [completed, setCompleted] = useState([])
  const [done, setDone] = useState(false);
  const [id, setId] = useState(0)
  
  const removeTask = (taskToRemove) => {
    const taskRemove = task.filter(entries => entries.id !== taskToRemove.id);
    setTask(e => task.filter(entries => entries.id !== taskToRemove.id)); 

    saveTask(taskRemove)
  }

  const saveTask = (data) =>  {
    const oldTask = localStorage.getItem("@todo:task");
    const convert = JSON.parse(oldTask);

    if(convert.length < 1) {
      localStorage.removeItem("@todo:task")
    } else {
      localStorage.setItem("@todo:task", JSON.stringify(task))

    }

  }
  
  const doneTask = (doneTask) => {
    doneTask.completed = !doneTask.completed;
    doneTask.completed === false ? 
    setCompleted(e => completed.filter(entries => entries.id !== doneTask.id))
    :
    setCompleted(preventState => [...preventState, doneTask])

    setDone(!done)
  }

  
  useEffect(() => {
    try {
      const allTask = localStorage.getItem("@todo:task");
      const transformTask = JSON.parse(allTask);

      if(allTask && transformTask) {
        setTask(transformTask);
      }

    } catch (err) {
      console.log(err)
    }
    
    console.log(task)
    
  }, [])
  
  
  return (
    <Main>
        <header>
          <div>
            <img src={rocket} alt="" />
            <h1>
              to
              <span>do</span>
            </h1>
          </div>
        </header>

        <Nav>
          <Form action="#" onSubmit={(e) => {
            e.preventDefault();
            
            if(e.target.value === "") {
              return alert("Preencha com a tarefa")
            }
            
            setId(id + 1)

            const objectTask = {
              id: id,
              text: newTask,
              completed: done
            }
            
            const searchIfTaskNameExists = task.filter(entries => entries.text === newTask);
            
            if(searchIfTaskNameExists.length > 0 ) {
              alert("Já existe uma task com esse nome")
              return
            }
            
            setTask(preventState => [objectTask, ...preventState]);
            saveTask()

            
          }}>
            <Input 
                onFocus={e => setInput(!input)} 
                onBlur={e => setInput(!input)}
                onChange={e => setNewTask(e.target.value)}
                filled={input}
                
                
                />

            <div>
              <Button type="submit" onClick={() => {
                
                localStorage.setItem("@todo:task", JSON.stringify(task))
              }}/>
            </div>
          </Form>
        </Nav>

        <Section>

            <div>
                <h2>Tarefas criadas  <span>{task.length === 0 ? "0" : task.length}</span></h2>
                                
                <h2>Concluídas 
                    <span>
                        {task.length < 1 ? "0" : `${completed.length} de ${task.length}`}
                    </span>
                </h2>
            </div>


            {
                task.length === 0 
                ? <NoTask />
                
                : task.map(entries => {

                    
                    return <Task 
                    key={entries.id}
                    id={entries.id}
                    remove={e => removeTask(entries)}  
                    text={entries.text} 
                    completed={e => doneTask(entries)}  
                    done={entries.completed}/>
                })
            }



        </Section>
      </Main>
    );
}