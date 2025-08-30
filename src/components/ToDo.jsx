import { useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.svg";
import ToDoItem from "./ToDoItem";

function ToDo() {
  const [toDoList, setToDoList] = useState([])
  const inputRef = useRef();

  function add() {
    const inputText = inputRef.current.value.trim();

    if(inputText === "") {
      return null;
    }

    const newToDo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setToDoList([...toDoList, newToDo]);
    inputRef.current.value = "";
  }

  function deleteToDo(id) {
    setToDoList(toDoList.filter((item) => item.id !== id));
  }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt=""/>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        >
        </input>
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          onClick={add}
        >
          ADD +
        </button>
      </div>

      <div>
        {toDoList.map((item, index)=>{
          return (
            <ToDoItem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ToDo