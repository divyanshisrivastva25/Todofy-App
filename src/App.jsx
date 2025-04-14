import { useState ,useEffect} from "react"
import Header from "./Components/Header"
import Todoform from "./Components/Todoform"
import TodoList from "./Components/TodoList"
import lightBackground from "./assets/images/bg-desktop-light.jpg"
import darkBackground from "./assets/images/bg-desktop-dark.jpg"




function App() {
  const[darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const newTodos = (text) => {  
    setTodos(
      [...todos, { text: text, completed: false }]
    )
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }


  return (

    <div className={`${darkMode ? "bg-[#13202c]" : "bg-white"} min-h-screen py-3 px-5`}>
    
    {
      darkMode ? (<img src={darkBackground} className="h-[280px] w-full rounded-3xl flex justify-center" />) :
      (<img src={lightBackground} className="h-[280px] w-full rounded-3xl flex justify-center" /> )
    }
     {/* <img src={background} className="h-[280px] w-full rounded-3xl flex justify-center" /> */}
     
     <div className="w-full flex justify-center -mt-45">
     <div className=" w-[630px] flex flex-col mb-6 gap-8 ">
         <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
         <Todoform newTodos={newTodos}/>
         <TodoList todos={todos} setTodos={setTodos} toggleComplete={toggleComplete} darkMode={darkMode}/>
     </div>
     </div>

     </div>
 


  
  
  
  )
}

export default App
