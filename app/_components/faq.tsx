import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <div className="flex gap-6 w-full">
      {/* accordion 01 */}
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="pergunta1">
          <AccordionTrigger>
            1. Como posso criar um evento na plataforma?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: Para criar um evento, faça login, acesse "Meus Eventos" e clique
            em "Criar Evento". Insira os detalhes e publique.
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
            R: Sim, você pode emitir reembolsos conforme sua política de
            reembolso através do painel de administração.
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
      {/* accordion 02 */}
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="pergunta6">
          <AccordionTrigger>
            6. Existe algum custo para usar a plataforma para organizar eventos?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: O uso básico é geralmente gratuito, mas recursos adicionais podem
            exigir uma assinatura paga.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pergunta7">
          <AccordionTrigger>
            7. Como posso promover meu evento na plataforma?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: Você pode utilizar ferramentas integradas, como envio de e-mails
            e opções de publicidade.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pergunta8">
          <AccordionTrigger>
            8. A plataforma suporta eventos virtuais e presenciais?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: Sim, a plataforma é capaz de suportar ambos os tipos de eventos.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pergunta9">
          <AccordionTrigger>
            9. Como posso entrar em contato com o suporte se tiver problemas?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: Você pode entrar em contato com nosso suporte através do e-mail
            fornecido ou do chat ao vivo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pergunta10">
          <AccordionTrigger>
            10. A plataforma é segura para processar pagamentos?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            R: Sim, utilizamos tecnologia de criptografia padrão da indústria
            para garantir a segurança de todas as transações.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
