export default function Footer() {
    return (
        <footer id="contact" className="w-full flex flex-col items-center bg-neutral-800  text-white bottom-0 p-0 mn:p-2">
            <div className="max-w-5xl w-full flex flex-col items-start gap-4 ">
                <h2 className="text-xl font-bold">Contato</h2>
                <p className="text-base text-zinc-400">ruanhigor123@gmail.com</p>
                <p className="text-base text-zinc-400">(44) 98445-9228 </p>
                <div className="flex gap-3 ">
                    <a className="w-6 h-6" href="https://www.linkedin.com/in/ruan-higor-silva-100382222/" target="_blank">
                        <img src="../img/linkedin.svg"></img>
                    </a>
                    <a className="w-6 h-6" href="https://github.com/ajaax1" target="_blank">
                        <img src="../img/github.svg"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}