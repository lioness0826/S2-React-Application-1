"use clients"
import React from 'react';
import Layout, { Footer } from '../Components';
import { StateDemonstration } from '../Components';


export default function StatePage(){
    const codeString=` export const StateDemonstration=()=>{
    const [color,setColor]=useState("rgb(188, 194, 194)");
    
     const toggleColor=()=>{
        if (color=="rgb(188, 194, 194)"){
            setColor("rgb(202, 101, 192)")
        }else{
            setColor("rgb(188, 194, 194)")
        }
     }
    
     return (
        <div className='state-button'>
            <button onClick={()=>toggleColor()} style={{backgroundColor:color}}>Change Color</button>
        </div>
    )}`


    return(
        <div className="main-page">
            <Layout />
            <h2>State Example</h2>
            <pre className='code'>
                <code>{codeString}</code>
            </pre>
            <StateDemonstration />
            <Footer />
        </div>
    
    )
}