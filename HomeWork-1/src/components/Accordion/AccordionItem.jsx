const AccordionItem = ({ id, title, text, isOpen, setIsOpen }) => {
  return (
    <li className="border" onClick={() => setIsOpen((activeId) => (activeId === id ? null : id))}>
      <div className="flex  items-center w-full">
        <p className="p-3 text-2xl font-semibold flex-none text-slate-400">{id + 1}</p>
        <p className="grow text-2xl ml-5 uppercase text-slate-700">{title}</p>
        <p className="flex-none p-3 text-3xl font-bold text-slate-800">{isOpen ? "-" : "+"} </p>
      </div>
      {isOpen && <div className="p-4 text-m text-justify">{text}</div>}
    </li>
  );
};

export default AccordionItem;
