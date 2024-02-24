"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [icon, setIcon] = useState(faBars)
    return (
        <header className="w-full bg-neutral-800 flex justify-center items-center min-h-20 p-0 mn:p-2">
            <nav className="max-w-5xl w-full flex flex-col justify-center text-white gap-4">
                <div className='flex justify-between items-center'>
                    <span><a className='text-lg font-bold'>Ruan</a></span>
                    <ul className="flex gap-16 items-center">
                        <li className="hidden md:block relative before:content-[''] before:w-0 before:h-2 before:bg-white before:absolute before:bottom-0 before:transition-width before:duration-300 before:ease-in-out before:hover:w-full"><a href="/">Home</a></li>
                        <li className="hidden md:block relative before:content-[''] before:w-0 before:h-2 before:bg-white before:absolute before:bottom-0 before:transition-width before:duration-300 before:ease-in-out before:hover:w-full"><a href="#projects">Projetos</a></li>
                        <li className="hidden md:block relative before:content-[''] before:w-0 before:h-2 before:bg-white before:absolute before:bottom-0 before:transition-width before:duration-300 before:ease-in-out before:hover:w-full"><a href="#experience">Experiência</a></li>
                        <li className="hidden md:block relative before:content-[''] before:w-0 before:h-2 before:bg-white before:absolute before:bottom-0 before:transition-width before:duration-300 before:ease-in-out before:hover:w-full"><a href="#contact">Contato</a></li>
                        <li>
                            <FontAwesomeIcon className='h-5 w-5 cursor-pointer md:hidden' icon={icon} onClick={() => setIcon(icon === faBars ? faX : faBars)}
                            />
                        </li>
                    </ul>
                </div>
                <ul className={`flex flex-col md:hidden gap-2 overflow-hidden transition-height duration-300 ease-in-out ${icon === faBars ? 'h-0' : 'h-32'}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Experiência</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header >
    )
}