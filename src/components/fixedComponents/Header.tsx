import { ListTodo } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-green-50  min-h-15 flex items-center text-green-950 px-8 md:gap-10 ">
      <NavLink to={""}>

      <div className=" flex gap-2 items-center ">
            <ListTodo size={28} className="bg-green-600 text-white rounded-2xl  p-1" />
        <p className="text-sm md:text-base text-nowrap ">MOSTAPHA TODO LIST</p>
      </div>
      </NavLink>
      <NavLink to={"/about"} className={({ isActive, isPending }) =>
      `text-xs text-nowrap md:text-sm transition px-3   duration-400 
     ${isPending ? "opacity-50" : ""} 
     ${isActive ? "border-b-2 border-green-600 rounded-md " : ""}`

  }>
        about us
        </NavLink>
    </div>
  );
}

export default Header;
