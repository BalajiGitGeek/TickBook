import Rice from "./rice";
import {ricedatas} from "../constants";
import { useState } from "react";

let Body = () => {
const[searchtxt,setsearchtxt]=useState("");
const[ricedata,setricedata]=useState(ricedatas);
function filterdata(){
    console.log(searchtxt); 
    console.log(ricedata[1].name);
    const ricedatum=ricedata.filter((datum)=>datum.name.includes(searchtxt));
    setricedata(ricedatum);
}
    return (
        <>
        <div>
            <input value={searchtxt} onChange={(e)=>{setsearchtxt(e.target.value)}}></input>
            <button onClick={filterdata}>Search </button>
        </div>
        <div className="bodycard">
            {
                ricedata.map((data,index)=>{
                    return <Rice {...data} key={index}/>
                })
            }
            
        </div>
        </>
    );
}

export default Body;