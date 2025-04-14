import { useState } from "react"
import { toast } from "react-toastify";

const Todoform = ({newTodos}) => {
const[input, setInput] = useState('');  


function changeInputHandler(e){
  e.preventDefault();
  if(input.trim() === '')
    return;
  newTodos(input)
  toast.success("Todo Added Successfully")
  setInput('');
};

  return (
    <form onSubmit={changeInputHandler} className="w-full hover:ring-2 ring-black flex justify-between items-center bg-white p-2 rounded-xl">

      <input type="text" placeholder="Create a new todo..."
       value={input}
       onChange={(e) => setInput(e.target.value)}
       className="flex-1 mr-2 text-lg tracking-wider focus:outline-none p-2"/>

      <button type="submit"
        className="bg-green-400 text-white font-bold px-4 py-2 rounded-[5px]">
           Create
      </button>

      </form>
  )
}

export default Todoform
