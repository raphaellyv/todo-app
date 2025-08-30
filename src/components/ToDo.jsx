import toDoIcon from "../assets/todo-icon.svg"
function ToDo() {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={toDoIcon} alt=""/>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div>
        <input type="text" placeholder="Add your task" ></input>
        <button>ADD +</button>
      </div>
    </div>
  )
}

export default ToDo