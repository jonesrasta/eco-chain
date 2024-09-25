
import { Button } from "@nextui-org/react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("ENVIAR MENSAGEM");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("ENVIANDO MENSAGEM...");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    if (!accessKey) {
      setStatus("ENVIAR MENSAGEM");
      return;
    }

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      form.reset();
    }
    setStatus("ENVIAR MENSAGEM");
  };

  return (
    <>
      <div
        ref={ref}
        className="relative h-[680px] max-sm:h-[340px] w-full text-center mx-auto"
      >
        <h2
          style={{
            transform: isInView ? "none" : "translateX(-10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="inset-0 items-center text-2xl font-normal tracking-wider text-transparent bg-clip-text bg-gradient-to-r to-[#3F39E8] from-[#3F39E8]"
        >
          <span className="text-white text-2xl font-normal tracking-wider">Entre em</span> Contato
        </h2>
      </div>
      <div ref={ref} className="mx-">
        <div className="nav-bar relative max-w-2xl mx-auto px-6 rounded-md flex justify-center p-14 max-sm:p-8 -mt-[580px] max-sm:-mt-64">
          <form
            onSubmit={onSubmit}
            ref={ref}
            className="flex flex-col gap-2 max-w-lg w-full -mt-16"
          >
            <div
              style={{
                transform: isInView ? "none" : "translateX(-10px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
              className="mb-4 text-left text-white"
            >
              <label className="text-white" htmlFor="name" value="Nome" />
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Nome completo"
                required
                className="place bg-[#cccccc15] w-full py-1.5 p-2 my-2 rounded-md border border-[#3F39E8] placeholder-gray-400"
              />
            </div>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-10px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
              className="mb-4 text-left text-white"
            >
              <label className="text-white" htmlFor="email" value="Email" />
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Endereço de email"
                required
                className="place bg-[#cccccc15] place w-full py-1.5 p-2 my-2 rounded-md border border-[#3F39E8] placeholder-gray-400"
              />
            </div>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-10px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
              }}
              className="mb-4 text-left text-white"
            >
              <label className="text-white" htmlFor="comment" value="Mensagem" />
              <textarea
                name="message"
                id="comment"
                placeholder="Sua mensagem..."
                required
                rows={6}
                className="place bg-[#cccccc15] w-full py-4 my-2 p-2 text-white border border-[#3F39E8] placeholder-gray-400"
              />
            </div>
            <p
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
              className="font-light my-4 text-white text-sm text-left"
            >
              Ao enviar este formulário, você concorda com nossos{" "}
              <a href="/terms" className="text-[#3F39E8] font-medium hover:underline">
                termos e condições
              </a>{" "}
              e nossa{" "}
              <a href="/politica-privacidade" className="text-[#3F39E8] font-medium hover:underline">
                política de privacidade
              </a>
              , que explica como podemos coletar, usar e divulgar suas
              informações pessoais.
            </p>
            <Button
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.10s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
              className="text-gray-200 hover:text-white rounded-full bg-[#3F39E8] h-12 font-medium text-base my-2"
              type="submit"
            >
              {status}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
