import { useAppSelector } from "../redux/hooks/useAppSelector";
import img3 from "../images/eu.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import pdf from "../assets/devoloper-Curriculo.pdf";

export const AboutUs = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div
      className={`h-screen flex justify-center items-center bg-gradient-to-t ${
        theme.status
          ? "to-[#fff8e7] via-stone-200 from-stone-200"
          : "to-slate-800 via-zinc-800 from-zinc-800"
      }`}
    >
      <div className="flex-1 flex flex-col text-center">
        <h3 className=" text-2xl font-dancing-script">Escrito por</h3>
        <h1
          className={`text-6xl font-bold mb-7 ${
            theme.status ? "text-amber-400" : "text-cyan-400"
          }`}
        >
          João Naif
        </h1>
        <p className="text-right px-8 text-xl">
          Eu sou João Naif atualmente moro em São Paulo capital. Trabalho de
          carteira assinada como agente de vendas no Grupo Ice e faço freelancer
          de desenvolvimento web nas horas vagas, o direcionamento da minha
          carreira é para desenvolvimento web atualmente mais focado em frontend
          porém com interesse em Back-End e até mesmo Full-Stack.{" "}
        </p>
        <p className="text-right px-8 text-xl">
          Começei e me apaixonei pelo os estudos de programação em janeiro de
          2023, atualmente acumulo 2 projetos freelances, mais 20 projetos no
          GitHub e 3 Hackathons pelo OneBitCode. Atualmente tenho conhecimento e
          expiriência em diversas tecnologias frontend, incluindo:{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            React
          </strong>
          ,{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            HTML/CSS
          </strong>
          ,{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            JavaScript(ES6)
          </strong>
          ,{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            TypeScript
          </strong>
          ,{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            Tailwind
          </strong>{" "}
          e{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            Git
          </strong>
          , além de ter conhecimento em outras linguagens como{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            Python
          </strong>
          , sempre buscando me aperfeiçoar a cada dia e aprender além código de
          programção como, Clean Code, Otimização de aplicações, Teste de
          aplicações, Arquitetura de código e até mesmo Acessibilidade. <br />{" "}
          Você pode encontrar pelo Instagram onde consegue saber mais sobre
          minha rotina, pelo GitHub onde pode aconpanhar meu processo de
          evolução alguns projetos atualmente focado em frontend react, ou até
          mesmo no Linkedin, uma rede social que começei a pouco tempo mas estou
          me esforçando demais para interagir e manter atualizada e começando
          novas conexões. <br />
          Atualmente estudando{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            NodeJS
          </strong>{" "}
          e{" "}
          <strong
            className={` ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
          >
            Python
          </strong>
        </p>
        <ul
          className={`flex justify-center text-5xl mt-5 gap-7 ${
            theme.status ? "text-amber-400" : "text-cyan-400"
          }`}
        >
          <li>
            <a href="https://github.com/JoaoNaif" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joaonaif/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/joaonaif/?hl=pt-br"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href={pdf} type="application/pdf" target="_blank">
              <IoMdDocument />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <img
          src={img3}
          alt=""
          className={`h-[700px] rounded-md shadow-xl ${
            theme.status ? "shadow-zinc-800" : "shadow-stone-500"
          }`}
        />
      </div>
    </div>
  );
};
