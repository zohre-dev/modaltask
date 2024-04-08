"use client"

import { useState , useEffect} from "react";
import Modal from "./Modal";
import './globals.css'


export default function Home() {

  const [direction, setDirection] = useState("Select");


      useEffect(()=>{
      document.addEventListener("mousedown" , ()=>{setDirection("Select")});
                    });

  

  return (
    <main >
      <div class="p-4 mx-auto">

       <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose an option</label>
       <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5"
                 value={direction}
                  onChange={e => setDirection(e.target.value)}
                  >
                  <option value="Select">Select</option>
                  <option value="Top">Top</option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                  <option value="Bottom">Bottom</option>
       </select>
       
      </div>

     
      {direction !="Select" && <Modal selectedDirection={direction}/>}
    </main>
  );
}
