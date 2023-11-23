import Image from "next/image";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"

const faq = [
    {
        question: 'O que são NFTs?',
        response: 'NFTs, ou Tokens Não Fungíveis (Non-Fungible Tokens, em inglês) são ativos digitais únicos representados por tokens em uma blockchain.'
    },
    {
        question: 'Quais as principais características das NFTs?',
        response: 'Unicidade, Indivisibilidade, Interoperabilidade, Blockchain e Smart Contracts'
    },
    {
        question: 'Como funciona a compra de NFTs em seu site?',
        response: 'Unicidade, Indivisibilidade, Interoperabilidade, Blockchain e Smart Contracts'
    },
    {
        question: 'Como posso vender os meus próprios NFTs?',
        response: 'Unicidade, Indivisibilidade, Interoperabilidade, Blockchain e Smart Contracts'
    },
    {
        question: 'Os NFTs são seguros e autênticos?',
        response: 'Unicidade, Indivisibilidade, Interoperabilidade, Blockchain e Smart Contracts'
    }
]

export function SectionFaq(){
    return (

        <section className='pt-10 @desktop:pt-28'>
            <ContainerGrid>
                <TitleSection
                subtitle='Desvendando os mistérios dos NFTs'
                title='Perguntas Frequentes'
                
                />
                <div>
                <Accordion type="single" collapsible className="w-full">
                    {
                        faq.map(({question, response},  index) => (
                            <AccordionItem key={index} value={`question-${index}`}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent>
                              {response}
                            </AccordionContent>
                          </AccordionItem>

                        ))
                    }
     
      
    </Accordion>
                </div>
            </ContainerGrid>
        </section>

    )
}