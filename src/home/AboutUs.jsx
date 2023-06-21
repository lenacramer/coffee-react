import React from 'react'
import employee1 from '../assets/employeeProfiles/employee1.jpg'
import employee2 from '../assets/employeeProfiles/employee2.jpg'
import employee3 from '../assets/employeeProfiles/employee3.jpg'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <div id='about-us-card'>
        <div className='spacer'> </div>
        <h1 id='about-us-header'>About Us</h1>
        <p id='about-us-text'>Our Cafe was created by the owners of Mobirise eCommerce Website Builder to bring endeavor ready clients, locals, and travelers a truly unique coffee experience. Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work.</p>
        <div className='spacer'> </div>
    </div>
    <EmployeeProfiles/>
    <p id='shop-now-button'>More About Us →</p>
    </>
  )
}

const previewImages = [
    {src: employee1, name: 'Amanda Adams', role: 'Barista', desc: 'The coolest coffee maker you\'ve ever found. She knows how to wow her clients with a cup of fresh coffee.', key: '1'},
    {src: employee2, name: '', role: '', desc: '', key: '2'},
    {src: employee3, name: '', role: '', desc: '', key: '3'},
    {src: employee1, name: '', role: '', desc: '', key: '4'}
]

const EmployeeProfiles = () => {
    return (
        <div>
        <div id='employee-preview'>
        {previewImages.map(image => {
            return(
            <div key={image.key} className='underlay'>
                <img src={image.src} className='employee-img'/>
                <div className='overlay'>
                    <h3 className='heavy'>{image.name}</h3>
                    <h4 className='heavy'>{image.role}</h4>
                    <p>{image.desc}</p>
                </div>
            </div>)
        })
        } 
    </div>
        </div>
    )
}
export default AboutUs