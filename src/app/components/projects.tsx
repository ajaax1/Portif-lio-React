'use client'
import React from 'react';
import Project from './project';
import { useState } from 'react';
export default function Projects() {
    interface Data {
        id: number;
        name: string;
        image: string;
        link: string;
    }

    const [search, setSearch] = useState('');

    const projects: Data[] = [
        {
            id: 1,
            name: 'Landing page loja',
            image: '../img/fauxica.png',
            link: 'https://fauxica-site.vercel.app',
        },
        {
            id: 2,
            name: 'Landing page agência',
            image: '../img/agencia.png',
            link: 'https://agencia-site-eta.vercel.app',
        },
        {
            id: 3,
            name: 'Projeto x-men',
            image: '../img/xmen.png',
            link: 'https://x-men-beta.vercel.app',
        },
        {
            id: 4,
            name: 'Landing page itau',
            image: '../img/itau.png',
            link: 'https://site-itau.vercel.app',
        },
        {
            id: 5,
            name: 'Lista de tarefas',
            image: '../img/list.png',
            link: 'https://lista-de-tarefas-nu-mocha.vercel.app',
        },
        {
            id: 6,
            name: 'Lista para viagens',
            image: '../img/travel.png',
            link: 'https://malas-app.vercel.app',
        }
    ];
    return (
        <section id='projects' className='max-w-3xl w-full flex items-center flex-col mb-16 mt-12 justify-center p-0 mn:p-2'>
            <h2 className='text-gradient-orange text-xl	font-bold mb-10'>PROJETOS</h2>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full mb-5 rounded h-8 bg-zinc-700 text-white' placeholder='  Buscar'></input>
            <ul className='flex w-full gap-5 flex-wrap items-center justify-center'>
                {projects
                    .filter(project => project.name.toLowerCase().includes(search.toLowerCase()))
                    .map((project: Data) => {
                        return <Project key={project.id} project={project} />
                    })}
            </ul>
        </section >
    )
}