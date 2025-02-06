"use clients"
import React from 'react';
import Layout, { Footer } from '../Components';
import { Feedback } from '../Components';

export default function FeedbackPage(){
    return(
        <div className="main-page">
            <Layout />
            <Feedback />
            <Footer />
        </div>
    )
}

