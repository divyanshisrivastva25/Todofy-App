import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState,useRef } from "react";
import { toast } from "react-toastify";



const TodoItem = ({todo,index,todos,setTodos,toggleComplete,darkMode}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const pRef = useRef(null);
  

  function deleteTodo(index){
    const deleteT = [...todos]
    deleteT.splice(index, 1);
    toast.error("Todo Removed Successfully",{
      icon: () => "❌"
    })
    setTodos(deleteT);
  }

  function handleEdit(){
    setIsEditing(true);
    setEditedText(todo.text); 
    setTimeout(() => {
      pRef.current?.focus();
    }, 0);
  }

    const handleSave = () => {
      const updatedTodos = [...todos];
      updatedTodos[index].text = editedText;
      setTodos(updatedTodos);
      setIsEditing(false);
      toast.success("Todo Updated Successfully", {
        icon:() => "👏"
      })
    };
  

  return (
    <div className={`flex ${darkMode ? "bg-[#141a20] shadow-[0_4px_4px_-2px_rgba(0,0,0,0.3)] text-white hover:bg-[#26323d]" : "bg-white"} justify-between shadow-[0_4px_4px_-2px_rgba(0,0,0,0.2)] items-center p-2 `}>

          <input type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
          className="h-4 w-4 border-4"  />

          {isEditing ? 
          ( <input
            ref={pRef}
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 mr-1 ml-1 pl-3 focus:outline-none border-none border"
          />) : 
          (<p className={`flex-1 pl-4 ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.text}
          </p>        
          )}


          <div className="flex gap-3">
             <button onClick={handleEdit}
             className="w-13 h-11 rounded-xl flex items-center justify-center bg-violet-400 ">
              <FaEdit className="text-2xl text-white"/></button>

             {!isEditing ? 
             
             (<button 
              className="w-13 h-11 rounded-xl bg-red-400 flex items-center justify-center"
              onClick={() => deleteTodo(index)}><MdDelete className="text-2xl text-white"/></button>) :
             
              (<button 
             className="w-13 h-11 rounded-xl flex items-center justify-center bg-sky-300 "
             onClick={handleSave}><IoMdAddCircleOutline className="text-2xl text-white" /></button>)}
            
          </div>  

    </div>
  )
}

export default TodoItem
