import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

export default function App(){
    return(
        <article className='card'>
            <Header />
            <Body />
            <Footer />
        </article>
    )    
}