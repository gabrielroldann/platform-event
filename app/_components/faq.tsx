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
        <AccordionTrigger className="text-base">
          1. Como posso criar um evento na plataforma?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Para criar um evento, faça login, acesse "Meus Eventos" e clique em
          "Criar Evento". Insira os detalhes e publique.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta2">
        <AccordionTrigger className="text-base">
          2. É possível alterar as informações de um evento depois de criado?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Sim, você pode editar as informações do evento até certos limites
          antes da data do evento.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta3">
        <AccordionTrigger className="text-base">
          3. Como posso cancelar um evento?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Para cancelar um evento, acesse a página do evento e selecione
          "Cancelar Evento".
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta4">
        <AccordionTrigger className="text-base">
          4. Posso emitir reembolsos para os participantes?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Sim, você pode emitir reembolsos conforme sua política de reembolso
          através do painel de administração.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta5">
        <AccordionTrigger className="text-base">
          5. Como os participantes se inscrevem para os eventos?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Os participantes podem se inscrever clicando em "Inscrever-se" na
          página do evento e fornecendo as informações necessárias.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta6">
        <AccordionTrigger className="text-base">
          6. Existe algum custo para usar a plataforma para organizar eventos?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: O uso básico é geralmente gratuito, mas recursos adicionais podem
          exigir uma assinatura paga.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta7">
        <AccordionTrigger className="text-base">
          7. Como posso promover meu evento na plataforma?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Você pode utilizar ferramentas integradas, como envio de e-mails e
          opções de publicidade.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pergunta8">
        <AccordionTrigger className="text-base">
          8. A plataforma suporta eventos virtuais e presenciais?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          R: Sim, a plataforma é capaz de suportar ambos os tipos de eventos.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
