import react, {useState} from "react";

export default function Todo(){
    const [todos, setTodos]=useState([]);

    function handleTodo(){
        const taskinput = document.getElementById('task');
        const todocopy = [...todos];
        todocopy.push(taskinput.value);
        setTodos(todocopy);
       
       
    }

return(
    <div>
        <div >
            <input id="task" placeholder="enter your task"></input>
            <button onClick={handleTodo}>Add</button>

        </div>
        <div>
        <ul>
            {todos.map((d,i)=>(
        <li key = {`todoitem${i}`}> {d}</li>
            ))
        
            

            }
        </ul>
        </div>
    </div>
)

}