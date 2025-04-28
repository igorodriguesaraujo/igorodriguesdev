import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo
} from "@phosphor-icons/react";

import Logo from './assets/logo.svg';

const links = {
  whatsapp: "https://api.whatsapp.com/send/?phone=5521989118604&text=%23Vamos+bater+um+papo%21&type=phone_number&app_absent=0",
  linkedin: "https://www.linkedin.com/in/igorodriguesaraujo/",
  github: "https://github.com/igorodriguesaraujo?tab=repositories"
}

export function App() {
  return (
    <main className="{w-full min-h-screen bg-[#181B20] bg-[url('/images/bg-body-mb.jpg')] md:bg-[url('/images/bg-body-dsk.jpg')] bg-[100%_100%] bg-cover bg-no-repeat bg-top bg-center}">
      <div className="w-full max-w-[1138px] mx-auto px-4">
        <section className="flex flex-col justify-between h-screen">
          <header className="flex items-center justify-center w-full h-[96px] md:justify-start md:mt-12">
            <img src={Logo} alt="Logo" />
          </header>

          <article className="p-8 flex flex-col items-center justify-center flex-grow md:items-start md:p-0">
            <div className="flex flex-col gap-4 max-w-[660px] mb-8">
              <h1 className="text-white text-4xl md:text-6xl text-center font-bold md:text-start">Construindo soluções e produtos usando tecnologia!</h1>
              <p className="text-base text-[#91A2BD] text-center md:text-start md:max-w-[360px]">Desenvolvimento front-end e design de interface para projetos web.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-8 md:items-start">
              <a className="h-[60px] px-8 flex items-center justify-center gap-2 rounded-full bg-[#253243] hover:bg-[#253243]/50 text-white font-bold duration-300" href={links.whatsapp} target="_blank" rel="noreferrer">
                <WhatsappLogo size={24} />
                <span>Vamos bater um papo!</span>
              </a>

              <div className="flex gap-2">
                <a className="opacity-50 hover:opacity-100 duration-300" href={links.github} target="_blank" rel="noreferrer">
                  <GithubLogo size={28} color="#CED5DA" />
                </a>
                <a className="opacity-50 hover:opacity-100 duration-300" href={links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={28} color="#CED5DA" />
                </a>
              </div>
            </div>
          </article>

          <footer className="flex items-center justify-center w-full h-[96px] md:justify-start">
            <p className="text-[#91A2BD] text-xs text-center md:text-start">Todos os direitos reservados 2025 © <br /> Feito por <span className="text-white underline">Igor Rodrigues</span> com ❤️</p>
          </footer>
        </section>
      </div>
    </main>
  )
}