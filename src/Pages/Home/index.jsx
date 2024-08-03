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


    console.log(task)
    
    const removeTask = (textForTask) => {



        if(task.length < 2) {
          setTask([])
          return
        }

        
        localStorage.removeItem("@todo:task");
        setTask(e => task.filter(entries => entries.text !==  textForTask))


        console.log(task)
        //localStorage.setItem("@todo:task", JSON.stringify(task))


        
    }


    useEffect(() => {
      const allTask = localStorage.getItem("@todo:task");
      const transformTask = JSON.parse(allTask);

      if(allTask && transformTask) {

        setTask(transformTask);
      }


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
            
            const objectTask = {
                text: newTask,
                completed: false
              }

              const searchIfTaskNameExists = task.filter(entries => entries.text === newTask);

              if(searchIfTaskNameExists.length > 0 ) {
                alert("Já existe uma task com esse nome")
                return
              }

              setTask(preventState => [objectTask, ...preventState])
              localStorage.setItem("@todo:task", JSON.stringify(task))
  
            }}>
            <Input 
                onFocus={e => setInput(!input)} 
                onBlur={e => setInput(!input)}
                onChange={e => setNewTask(e.target.value)}
                filled={input}
                
                
                />

            <div>
              <Button type="submit" onClick={() => {
                
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
                    return <Task key={entries.text} remove={e => removeTask(e.target.value)}  text={entries.text} completed={e => setDone(!done)}  done={done}/>
                })
            }



        </Section>
      </Main>
    );
}