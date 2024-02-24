import { list } from "postcss";
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useState } from 'react'
interface Data {
    id: number;
    name: string;
    image: string;
    link: string;
}

export default function Project(props: { project: Data }) {
    const variants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };
    return (
        <motion.li
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            className="transition duration-200 ease-in-out hover:scale-110 cursor-pointer">
            <a href={props.project.link} target="_blank">
                <img className='w-60 h-32 rounded-t-lg' src={props.project.image} alt="site image">
                </img>
                <div className='bg-neutral-800 flex h-12 p-3 justify-between rounded-b-lg'>
                    <div className='flex flex-col text-white justify-center'>
                        <span className='text-xs'>CLIQUE AQUI PARA VISITAR</span>
                        <span>{props.project.name}</span>
                    </div>
                    <div className='flex items-center '>
                        <img src='../img/arrow.png' alt="Arrow Icon"></img>
                    </div>
                </div>
            </a>
        </motion.li>
    )
}