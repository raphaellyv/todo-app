import tick from "../assets/tick.svg";
import not_tick from "../assets/not_tick.svg";
import delete_icon from "../assets/delete_icon.svg";

function ToDoItems() {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-7" src={tick} alt=""/>
        <p className="text-slate-700 ml-4 text-[17px]">sdfs</p>
      </div>

      <img className="w-4.5 cursor-pointer" src={delete_icon} alt=""/>
    </div>
  )
}

export default ToDoItems