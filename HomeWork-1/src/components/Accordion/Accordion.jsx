import { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    title: "Komponenty w React",
    text: "Komponenty to podstawowe bloki budulcowe w bibliotece React. Pozwalają one na tworzenie wielokrotnie używanych fragmentów interfejsu użytkownika w izolowanych częściach, które można łatwo integrować i testować.",
  },
  {
    title: "Hooki w React",
    text: "Hooki to nowa funkcja wprowadzona w React 16.8, która pozwala na korzystanie ze stanu i innych funkcji React bez konieczności pisania klas. Najpopularniejsze hooki to useState i useEffect.",
  },
  {
    title: "Cykl życia komponentu",
    text: "W React każdy komponent ma swój cykl życia. Metody cyklu życia, takie jak `componentDidMount` czy `componentWillUnmount`, pozwalają na wykonywanie określonych działań w odpowiednich momentach życia komponentu.",
  },
  {
    title: "Virtual DOM",
    text: "React korzysta z koncepcji Virtual DOM do optymalizacji aktualizacji w przeglądarce. Dzięki temu, zamiast aktualizować cały DOM, React jest w stanie wykryć zmiany i aktualizować tylko te fragmenty, które uległy zmianie.",
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <ul className="w-1/2">
      {faqs.map((faq, id) => (
        <AccordionItem
          key={Math.random()}
          title={faq.title}
          text={faq.text}
          id={id}
          isOpen={id === isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
};

export default Accordion;
