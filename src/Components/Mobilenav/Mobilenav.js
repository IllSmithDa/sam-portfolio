import React, {useEffect, useState} from 'react';
import './Mobilenav.css';

export default function Mobilenav() {

  const [currentId, setCurrentId] = useState('home-mobile');

  useEffect(() => {
    document.getElementById(currentId).style.textDecoration = 'underline';
  }, [])

  const currentLink = (link, tab) => {
    // scroll into the selecte element
    document.getElementById(link).scrollIntoView({behavior: 'smooth', block: 'start'});
    // update current element 
    const { currentId } = this.state;
      // remove underline of the previously clicked tab
    document.getElementById(currentId).style.textDecoration = 'none';
    // underline the new element
    document.getElementById(tab).style.textDecoration = 'underline';
    setCurrentId(tab);
  }

  return(
    <div className='mobile-position'>
      <nav className='navbar navbar-expand-md navbar-display'>
        <span id='home-mobile' className='navbar-home-icon' onClick={()=>this.currentLink('Home-ID', 'home-mobile')}>SK</span>
        <button className='mobile-nav-button' data-target='#collapsibleNavbar' data-toggle='collapse' type='button'>
          &#9776;
        </button>
      </nav>
        <div className='collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav nav'>
            <li className='nav-item'>
              <span id='mob-home-tab' data-target='#collapsibleNavbar' data-toggle='collapse'  onClick={()=>currentLink('Home-ID', 'home-mobile')}>Home</span>
            </li>
            <li className='nav-item'>
              <span id='mob-about-tab'data-target='#collapsibleNavbar' data-toggle='collapse' onClick={()=> currentLink('about-ID', 'mob-about-tab')}>About Me</span>
            </li>
            <li className='nav-item'>
              <span id='mob-project-tab' data-target='#collapsibleNavbar' data-toggle='collapse' onClick={()=> currentLink('project-ID', 'mob-project-tab')}>Projects</span>
            </li>
            <li className='nav-item'>
              <span id='mob-contact-tab'  data-target='#collapsibleNavbar' data-toggle='collapse' onClick={()=> currentLink('contact-ID', 'mob-contact-tab')} >Contact Me</span>
            </li>
          </ul>
        </div>
    </div>
  );
}