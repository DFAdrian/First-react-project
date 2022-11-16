import React from 'react'


export default function Header(){
    return(
        <header className='card__header'>
            <img className='card__img' src='../Assets/Profile.jpg'/>
            <h1 className='card__title'>Adrian Donate</h1>
            <h3 className='card__job'>Frontend Developer</h3>
            <a className='card__link' href='#'>adriandf.website</a>
            <div className='card__btns'>
                <a href='#' className='btn'>
                <img className='btn__img' src='../Assets/Mail.png'/>
                Email
                </a> 
                <a href='#' className='btn btn--blue'>
                <img className='btn__img' src='../Assets/linkedin.png'/>
                LinkedIn
                </a> 
            </div>
        </header>
    )
}