import { useState,useEffect } from "react";
import TodoItem from "./TodoItem"

  const TodoList = ({todos,setTodos,toggleComplete,darkMode}) => {
  const[visibleTodo, setVisibleTodo] = useState(todos);

  useEffect(() => {
    setVisibleTodo(todos);
    // todos.forEach((todo, index) => {
    //   console.log(`${index}: ${todo.text} → ${todo.completed}`);
    // });
  }, [todos]);

  function activeTodos(){
    const activeTodo = todos.filter(todo => !todo.completed)
    setVisibleTodo(activeTodo);
    return activeTodo;
  }
  
  return (

   <div className= {`w-full rounded-xl mt-1  ${darkMode ? "bg-[#141a20]" : "bg-white"}`}>
   {
    todos.length === 0 ? 
    (<div className="bg-blue-100 w-full p-4 flex justify-center items-center font-bold text-2xl text-zinc-800 rounded-xl">
      No Todo Found!
    </div>) : 
    
    ( <div className=" w-full flex rounded-xl flex-col gap-2">
        {
        visibleTodo.map( (todo, index) => ( 
         <TodoItem 
         key={index} 
         index={index} 
         todo={todo} 
         todos={todos} 
         setTodos={setTodos} 
         toggleComplete={toggleComplete}
         darkMode={darkMode}/>
        ))}

    

       <footer className="w-full flex mt-5 text-white justify-between rounded-b-xl items-center p-4 bg-[#375570]">
        
         <p>{todos.filter(todo => !todo.completed).length} items left</p>

         <div className="flex gap-4">

          <div onClick={() => {
            setVisibleTodo(todos);
          }}>All</div>

          <div onClick={activeTodos}>Active</div>

          <div onClick={() => {
            const completedTodos = todos.filter(todo => todo.completed);
            setVisibleTodo(completedTodos);

          }}>Completed</div>
         </div>

         <div onClick={() => {
          activeTodos();
          setTodos(todos.filter(todo => !todo.completed));
         }}>Clear Completed</div>
       </footer>
      </div>
    )
   }
   
   </div>
  )
}

export default TodoList
