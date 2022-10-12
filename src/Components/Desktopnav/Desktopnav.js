import React, { useEffect, useInsertionEffect, useState } from 'react';
import  './Desktopnav.css';

export default function Desktopnav () {

    const currentId = useState('home-tab');

    const updateLinks = (link) => {
        console.log(document.querySelectorAll('.tab-group'));
        document.querySelectorAll('.tab-group').forEach((el) => {
            if (el.id === link) {
                el.classList.add('tab-underline');
            }  else {
                el.classList.remove('tab-underline');
            }
        })
    }

    const currentLink = (link) => {
        // scroll into the selecte element
      // updateLinks(tab);
      document.getElementById(link).scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    useEffect(() => {
        updateLinks(currentId);
    }, [currentId])
    useEffect(() => {
        updateLinks('home-tab');
    }, [])
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const appHeight = document.querySelector('.app-container').scrollHeight;
            console.log(window.scrollY);
            if (window.scrollY <= appHeight * .2) {
                updateLinks('home-tab');
            } else if (window.scrollY <= appHeight * .4) {
                updateLinks('about-tab');
            } else if (window.scrollY <= appHeight * .7) {
                updateLinks('project-tab');
            } else {
                updateLinks('contact-tab');
            }
        })
    }, [])
    return (
        <div className='nav-height'>
            <div className='sticky-nav'>
                <div className='nav-container'>
                    <div className='tab-container'>
                        <div>
                            <span id='home-tab' className='tab-group' onClick={()=> currentLink('Home-ID', 'home-tab')}>SK</span>
                        </div>
                        <div className='link-tabs'>
                            <div>
                                <span id='about-tab' className='tab-group' onClick={()=> currentLink('about-ID', 'about-tab')}>About Me</span>
                                <span id='project-tab' className='tab-group' onClick={()=> currentLink('project-ID', 'project-tab')}>Projects</span>
                                <span id='contact-tab' className='tab-group' onClick={()=> currentLink('contact-ID', 'contact-tab')} >Contact Me</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
