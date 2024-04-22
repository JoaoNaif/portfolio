import { FaGithub, FaLinkedin, FaSmile } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import pdf from "../assets/devoloper-Curriculo.pdf";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export const Presentation = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div className="h-screen w-screen container mx-auto flex items-start flex-col justify-center leading-none ">
      <h3 className="flex items-center gap-2 font-semibold text-3xl ml-3">
        OI, EU SOU JOÃO NAIF <FaSmile />
      </h3>
      <div className="flex items-center">
        <h1 className="text-[190px] font-bold ">FRONTEND</h1>
        <ul
          className={`flex items-center gap-4
          text-7xl mt-5 ${theme.status ? "text-amber-400" : "text-cyan-400"}`}
        >
          <li className="hover:animate-bounce">
            <a target="_blank" href="https://www.linkedin.com/in/joaonaif/">
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:animate-bounce">
            <a target="_blank" href="https://github.com/JoaoNaif">
              <FaGithub />
            </a>
          </li>
          <li className="hover:animate-bounce ">
            <a href={pdf} type="application/pdf" target="_blank">
              <IoMdDocument />
            </a>
          </li>
        </ul>
      </div>
      <h1 className="font-bold text-[250px]">DEVELOPER</h1>
      <div className="flex">
        <p className="flex-1"></p>
        <p className="flex-1 text-xl mt-4 text-right ">
          TENHO 19 ANOS SOU DESENVOLVEDOR FRONTEND COM 7 MESES DE EXPERIÊNCIA
          TRABALHANDO COMO FREELANCER. SOU UMA PESSOA QUE GOSTA DE APRENDER,
          SEMPRE ABERTO AS NOVAS IDEIAS E JEITOS DE PENSAR, SOU MUITO
          COMPETITIVO E SINCERO.
        </p>
      </div>
    </div>
  );
};
