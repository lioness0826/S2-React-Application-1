"use clients"
import React from 'react';
import Layout, { Footer } from '../Components';
import { ConditionalRendering } from '../Components';
import { Code } from '../Components';
import Image from 'next/image';

export default function Conditional(){
    const code=`export const ConditionalRendering=()=>{
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
    }`;

    return(
        <div className="main-page">
            <Layout />
            <ConditionalRendering />
            <Code code={code} />
            <Image src='/imgs/2.drawio.png' alt="Explanation" width={500} height={250}/>
            <p></p>
            <Footer />
        </div>
    )
}