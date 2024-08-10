import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { data } from "../data";

export default function Accordion(){

    const [clicked,setClicked] = useState(null);

    function singleClick(id){
        if(id === clicked){
            setClicked(null)
        }
        else{
            setClicked(id)
        }
    }

    return <div className="bg-blue-500 flex flex-col justify-evenly items-center h-screen">
    <h1 className="text-5xl">Accordion</h1>
    <div className=" flex flex-col justify-between w-screen h-96  items-center">
    {
        data.map((d)=> <div onClick={()=>{singleClick(d.id)}} className=" text-center text-2xl bg-orange-300 w-1/2 hover:cursor-pointer hover:bg-white transition-all duration-700" key={d.id}>
            <div>
            <span > {d.title} </span>
            <span >
            <IoMdArrowDropdown className={`inline transition-all duration-500 ${clicked===d.id ? `rotate-180`:``}`} /> 
            </span>
             
            </div>
            <div onclick={()=>singleClick(d.id)} className={`bg-slate-500 transition-all duration-500 ${clicked===d.id?`h-20`:`h-0`}` }>
            {
                d.id === clicked ? <div>{d.content}</div> : null
            }
            </div>
            
        </div>)
    }
    </div>
    </div>
}