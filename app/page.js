"use client";
import React,{ useState } from 'react';
import Layout,{Footer} from "./Components";
import { Greeting } from "./Components";




export default function Home() {
  const [name, setName] = useState(""); // State to store user input

  return (
    <div className="main-page">
      <Layout />
      <h1>React Tutorial</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input change
        placeholder="Type your name..."></input>
        <Greeting name={name} />
       <Footer />
    </div>
  );
}
