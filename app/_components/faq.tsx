import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="pergunta1">
        <AccordionTrigger>
          1. Como posso criar um evento na plataforma?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Para criar um evento, faça login, acesse "Meus Eventos" e clique em
          "Criar Evento". Insira os detalhes e publique.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta2">
        <AccordionTrigger>
          2. É possível alterar as informações de um evento depois de criado?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Sim, você pode editar as informações do evento até certos limites
          antes da data do evento.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta3">
        <AccordionTrigger>3. Como posso cancelar um evento?</AccordionTrigger>
        <AccordionContent className="text-base">
          R: Para cancelar um evento, acesse a página do evento e selecione
          "Cancelar Evento".
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta4">
        <AccordionTrigger>
          4. Posso emitir reembolsos para os participantes?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Sim, você pode emitir reembolsos conforme sua política de reembolso
          através do painel de administração.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta5">
        <AccordionTrigger>
          5. Como os participantes se inscrevem para os eventos?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Os participantes podem se inscrever clicando em "Inscrever-se" na
          página do evento e fornecendo as informações necessárias.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
