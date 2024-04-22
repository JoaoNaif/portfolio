import { useAppSelector } from "../redux/hooks/useAppSelector";
import olx from "../images/olx.png";
import olxfull from "../images/olxfull.png";
import tastyfull from "../images/tasty-dash.png";
import tasty from "../images/t-mobile.png";
import { RiComputerFill } from "react-icons/ri";
import { IoPhonePortrait } from "react-icons/io5";
import { useState } from "react";

export const Port = () => {
  const theme = useAppSelector((state) => state.theme);
  const [device, setDevice] = useState(false);
  return (
    <div
      className={`h-full bg-gradient-to-t flex flex-col items-center justify-start ${
        theme.status
          ? "to-stone-200 via-[#fff8e7] from-[#fff8e7]"
          : "to-zinc-800 via-slate-800 from-slate-800"
      }`}
    >
      <h1 className={`text-7xl font-bold mt-10 mb-5`}>
        Meus{" "}
        <span
          className={`${theme.status ? "text-amber-400" : "text-cyan-400"}`}
        >
          Projetos.
        </span>
      </h1>
      <ul className="flex text-7xl w-full justify-center gap-5 mb-5">
        <li
          className={`${
            theme.status ? "hover:bg-amber-400" : "hover:bg-cyan-400"
          } rounded-full p-2 cursor-pointer transition-colors duration-300 ease-out bg-transparent`}
          onClick={() => setDevice(false)}
        >
          <RiComputerFill />
        </li>
        <li
          className={`${
            theme.status ? "hover:bg-amber-400" : "hover:bg-cyan-400"
          } rounded-full p-2 cursor-pointer transition-colors duration-300 ease-out bg-transparent`}
          onClick={() => setDevice(true)}
        >
          <IoPhonePortrait />
        </li>
      </ul>
      <ul className="grid grid-cols-2 w-full">
        <li className="flex flex-col items-center">
          {device ? (
            <a
              target="_blank"
              href="https://joaonaif-olx-clone.netlify.app/"
              className="transition-all duration-[5s] ease-linear bg-cover w-[400px] h-[650px] bg-top flex items-center justify-center hover:bg-bottom rounded-[40px]  "
              style={{ backgroundImage: `url(${olx})` }}
            ></a>
          ) : (
            <a
              target="_blank"
              href="https://joaonaif-olx-clone.netlify.app/"
              className="transition-all duration-[5s] ease-linear bg-cover w-[800px] h-[600px] bg-center flex items-center justify-center hover:bg-bottom rounded relative"
              style={{ backgroundImage: `url(${olxfull})` }}
            ></a>
          )}

          <h3 className="font-semibold text-2xl  my-3">
            Projeto{" "}
            <span
              className={`${
                theme.status ? "text-amber-400" : "text-cyan-400"
              } font-bold`}
            >
              OLX
            </span>
          </h3>
          <ul className="flex gap-3 items-center font-medium">
            <li>React</li>
            <li>React-Router</li>
            <li>Redux</li>
          </ul>
        </li>
        <li className="flex flex-col items-center">
          {device ? (
            <a
              target="_blank"
              href="https://tasty-dash.netlify.app/"
              className="transition-all duration-[5s] ease-linear bg-cover w-[400px] h-[650px] bg-top flex items-center justify-center hover:bg-bottom rounded-[40px] "
              style={{ backgroundImage: `url(${tasty})` }}
            ></a>
          ) : (
            <a
              target="_blank"
              href="https://tasty-dash.netlify.app/"
              className="transition-all duration-[5s] ease-linear bg-cover w-[800px] h-[600px] bg-center flex items-center justify-center hover:bg-bottom rounded relative"
              style={{ backgroundImage: `url(${tastyfull})` }}
            ></a>
          )}
          <h3 className="font-semibold text-2xl  my-3">
            Projeto{" "}
            <span
              className={`${
                theme.status ? "text-amber-400" : "text-cyan-400"
              } font-bold`}
            >
              Restaurante
            </span>
          </h3>
          <ul className="flex gap-3 items-center font-medium">
            <li>React</li>
            <li>TypeScript</li>
            <li>HookForm</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
