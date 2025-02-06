"use client"
import Link from 'next/link';
import React,{ useState } from 'react';
import Image from 'next/image';


const Layout=()=>{
    return(
        <nav>
             <Link href="/" className="link">Home</Link>
             <Link href="/StatePage" className="link">State</Link>
             <Link href="/Conditional" className="link">Conditional Rendering</Link>
             <Link href="/Feedback" className="link">Feedback</Link>
        </nav>
       
    )
}

export const Footer=()=>{
    return (
        <footer><p>2025 @ Yujie Chen</p></footer>
    )
}
    
    

export const StateDemonstration=()=>{
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
        <div className='state-div'>
             <p className='state-explanation'>Using array destructuring: color represents the current state value. setColor is a function that allows you to update the state value.</p>
            <Image src='/imgs/1.drawio.png' alt="Explanation" width={500} height={250}/>
        </div>
       
    </div>
   

 )
}

export const Feedback=()=>{

    const [submissionMessage, setSubmissionMessage] = useState("");
    const [feedback,setFeedback]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmissionMessage("Thanks for your feedback!");
        setFeedback("");
      };

    return(
        <div>
            <h2>How was your experience? Let us know!</h2>
            <form>
                <input type='text' className='feedback-input' value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} ></input>
                <button onClick={handleSubmit}>Submit</button>
                <p>{submissionMessage}</p>
            </form>
        </div>
    )
}



export const ConditionalRendering=()=>{
    const [userInput, setUserInput] = useState("");

    return(
        <div className='condition'>
            <h2>Conditional Rendering Example</h2>
            <input type="text" placeholder="Type something..." value={userInput}
            onChange={(e) => setUserInput(e.target.value)} />
            {userInput === "" ? (
             <p>Please type something in the input field.</p>
             ) : (
            <p>You typed: <strong>{userInput}</strong></p>
             )}
        </div>
      
    )
}

export const Greeting = ({ name }) => {
    return (
      <h2>
        {name ? `Hello, ${name}! 👋` : "Please enter your name above."}
      </h2>
    );
  };



export const Code=({code})=>{
    return(
        <pre className='code'>
            <code>{code}</code>
       </pre>
    )
}

export const Header=({head})=>{
    return(
        <h2>{head}</h2>
    )
}


export default Layout;