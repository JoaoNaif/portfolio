import { useRef, useState } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { FaFaceGrinWink } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";

export const Contact = () => {
  const theme = useAppSelector((state) => state.theme);

  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  const handleEmailCopy = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      if (email) {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        emailRef.current.classList.add("text-green-500");
        setTimeout(() => {
          setEmailCopied(false);
          emailRef.current?.classList.remove("text-green-500");
        }, 2000);
      }
    }
  };
  return (
    <div
      className={`h-auto py-10 bg-gradient-to-t flex flex-col items-center justify-center ${
        theme.status
          ? "to-stone-200 via-[#fff8e7] from-[#fff8e7]"
          : "to-zinc-800 via-slate-800 from-slate-800"
      }`}
    >
      {" "}
      <h3 className="text-3xl font-semibold">Gostou do meu Currículo?</h3>
      <h1 className="flex gap-2 text-7xl font-bold">
        Me mande um{" "}
        <span
          className={`flex items-center gap-3 ${
            theme.status ? "text-amber-400" : "text-cyan-400"
          }`}
        >
          E-mail <FaFaceGrinWink />
        </span>
      </h1>
      <SlEnvolopeLetter className="text-9xl my-10" />
      <div
        ref={emailRef}
        className={`border border-zinc-800 border-b-0 w-full container text-center text-3xl font-medium p-2`}
      >
        JOAONAIF@GMAIL.COM
      </div>
      <button
        onClick={handleEmailCopy}
        className={`border border-zinc-800 p-2 text-3xl font-medium w-full container ${
          theme.status ? "bg-amber-400" : "bg-cyan-400"
        }`}
      >
        {emailCopied ? (
          <p className="text-green-500">Email Copiado</p>
        ) : (
          <p>Copiar Email</p>
        )}
      </button>
    </div>
  );
};
