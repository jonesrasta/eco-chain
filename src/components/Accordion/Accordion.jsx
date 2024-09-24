import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionClient() {
  return (
    <div className="max-w-6xl mx-auto items-center mt-16 text-gray-300">
      <h2 className="text-2xl font-normal tracking-wider text-center mb-10">Perguntas Frequentes</h2>
      <Accordion variant="bordered">
        <AccordionItem
          key="1"
          aria-label="O que é a EcoChain?"
          title={<span style={{ color: "gray" }}>O que é a EcoChain?</span>}
        >
          A EcoChain é uma DAO (Organização Autônoma Descentralizada) que utiliza a tecnologia blockchain para financiar projetos sustentáveis e ecológicos, promovendo a transparência no uso de recursos e engajando uma comunidade global em ações ambientais.
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Como posso me tornar membro da EcoChain?"
          title={<span style={{ color: "gray" }}>Como posso me tornar membro da EcoChain?</span>}
        >
          Qualquer pessoa interessada em apoiar projetos ecológicos pode se tornar membro. Você pode participar adquirindo tokens da EcoChain ou contribuindo ativamente com a comunidade.
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Como a EcoChain garante a transparência no uso dos recursos?"
          title={<span style={{ color: "gray" }}>Como a EcoChain garante a transparência no uso dos recursos?</span>}
        >
          Todas as transações e alocações de fundos são registradas em uma blockchain pública, o que permite que qualquer membro acompanhe o fluxo de recursos e veja como eles estão sendo utilizados.
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Como funciona o sistema de governança?"
          title={<span style={{ color: "gray" }}>Como funciona o sistema de governança?</span>}
        >
          A EcoChain usa um sistema de tokens para a governança. Cada token representa um voto, e os membros podem votar em propostas de novos projetos ou em mudanças nas diretrizes da DAO.
        </AccordionItem>

        <AccordionItem
          key="5"
          aria-label="Quais tipos de projetos a EcoChain apoia?"
          title={<span style={{ color: "gray" }}>Quais tipos de projetos a EcoChain apoia?</span>}
        >
          A EcoChain apoia diversos projetos sustentáveis, como reflorestamento, limpeza de oceanos e rios, e iniciativas de educação ambiental, sempre com foco na proteção do meio ambiente e combate às mudanças climáticas.
        </AccordionItem>

        <AccordionItem
          key="6"
          aria-label="Como posso propor um novo projeto para a EcoChain?"
          title={<span style={{ color: "gray" }}>Como posso propor um novo projeto para a EcoChain?</span>}
        >
          Os membros podem propor novos projetos diretamente na plataforma de votação da EcoChain. Após a proposição, o projeto será votado pela comunidade.
        </AccordionItem>

        <AccordionItem
          key="7"
          aria-label="Quais são os benefícios de participar da EcoChain?"
          title={<span style={{ color: "gray" }}>Quais são os benefícios de participar da EcoChain?</span>}
        >
          Além de contribuir para projetos ecológicos, os membros ganham tokens participando ativamente da comunidade, o que lhes dá poder de voto em decisões importantes.
        </AccordionItem>

        <AccordionItem
          key="8"
          aria-label="Como a EcoChain mede o impacto dos projetos financiados?"
          title={<span style={{ color: "gray" }}>Como a EcoChain mede o impacto dos projetos financiados?</span>}
        >
          A EcoChain publica relatórios periódicos detalhando o impacto ambiental dos projetos financiados, permitindo que os membros acompanhem os resultados e a eficácia das iniciativas.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
