import React from 'react'
import { AiFillGithub, AiOutlineLaptop, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    const link = [
        {
            name: 'github',
            url: 'https://github.com/Ekpo-Emmanuel',
            icon : AiFillGithub   
        },
        {
            name: 'Portfolio',
            url: 'https://emmanuelea.netlify.app/',
            icon : AiOutlineLaptop   
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/emmanuel-ekpo-a2973420b/',
            icon : AiOutlineLinkedin   
        },
    ]
  return (
    <div className='footer'>
        <div className="links">
            <div className="name">
                <span>Emmanuel Ekpo</span>
            </div>
            <div className="socials">
                {link.map((item) => {
                    return (
                        <a href={item.url} target="_blank">
                            <item.icon className='icon'/>
                            <span>{item.name}</span>
                        </a>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer