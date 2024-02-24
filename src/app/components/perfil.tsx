'use client'
import React from 'react';
import { motion } from "framer-motion"

export default function Perfil() {
    return (
        <section className="max-w-5xl w-full flex flex-col items-center mb-16 gap-7 p-0 mn:p-2">
            <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ rotate: 0, scale: 1 }}

                className="w-full flex justify-center bg-gradient">
                <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full'>
                    <img src='../img/Avatar.png'></img>
                </div>
            </motion.div>
            <div className="max-w-3xl w-full flex items-center flex-col gap-7">
                <div className="flex items-center flex-col text-white gap-7 " >
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}

                        className="mn:text-5xl text-lg  text-center">Eu sou um desenvolvedor front-end que ama
                        <strong className='text-gradient-green font-black'> codar!</strong></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}

                        className="mn:text-lg text-base text-center text-neutral-500 ">Eu sou o Ruan, um desenvolvedor web focado em front-end, com conhecimento e experiência em projetos utilizando Next.js e React.js. Atualmente, estou no quinto período do curso de Sistemas de Informação.</motion.p>
                </div>
                <div className="flex gap-4 mb-12 flex-wrap justify-center">
                    <motion.button
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}

                        className="bg-white border-solid rounded-3xl h-12 w-32 transition duration-200 ease-in-out hover:scale-110">
                        <a href='https://www.linkedin.com/in/ruan-higor-silva-100382222/' target='blank'>Contato</a>
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}

                        className="bg-black text-white border-white border-solid rounded-3xl h-12 w-32 border-2	transition duration-200 ease-in-out hover:scale-110">
                        <a href=''>Currículo</a>
                    </motion.button>
                </div>
                <div>
                    <h2 className='text-lg	text-neutral-400 tracking-widest'>EXPERIÊNCIA COM</h2>
                </div>
                <div className='flex max-w-72 w-full justify-between flex-wrap'>
                    <img className='w-8 h-8' src="../img/css.png" alt="" />
                    <img className='w-8 h-8' src="../img/html.png" alt="" />
                    <img className='w-8 h-8' src="../img/javascript.png" alt="" />
                    <img className='w-8 h-8' src="../img/reactjs.png" alt="" />
                </div>
            </div>
        </section>
    )
} 