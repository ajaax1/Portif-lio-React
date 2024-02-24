export default function Education() {
    return (
        <section id="experience" className="max-w-5xl w-full flex flex-col items-center mb-16 p-0 mn:p-2">
            <h2 className="text-gradient-blue text-xl font-bold mb-10">FORMAÇÃO ACADÊMICA</h2>
            <ul className="w-full">
                <li className="flex flex-col gap-5">
                    <div className="flex justify-between text-white">
                        <div className="flex gap-4">
                            <img className="w-6 h-6 rounded-full" src="../img/unipar.png"></img>
                            <h3>Universidade Paranaense</h3>
                        </div>
                        <span className="text-zinc-700">Jan 2022-Presente</span>
                    </div>
                    <div>
                        <p className="text-sm text-zinc-400">
                            Na Unipar, minha jornada acadêmica foi marcada pela imersão em um ambiente de aprendizado dinâmico e desafiador. Durante esse período, pude explorar uma ampla gama de tópicos essenciais da tecnologia da informação, incluindo bancos de dados relacionais, tecnologias web como PHP, JavaScript, CSS e HTML, bem como conceitos fundamentais de redes de computadores e engenharia de projetos de software. Essa experiência abrangente me proporcionou uma base sólida de conhecimento e habilidades práticas, preparando-me para enfrentar os desafios e oportunidades no campo da tecnologia da informação com confiança e determinação.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}