import React, { useState } from 'react';
import "../styles/components/AccordionItem.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);// Déclaration d'un état local isOpen avec useState

   // Fonction pour basculer l'état de isOpen
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion_item'>
      <div className='accordion_title' onClick={toggleAccordion}> {/* Titre de l'item de l'accordéon, cliquable */}
        <h3>{title}</h3>
         <span>{isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</span>
      </div>
       {/* Condition pour afficher le contenu seulement si isOpen est true */}
      {isOpen && (
        <div className='accordion_content'>
          <p>{content}</p> {/* Affichage du contenu passé en prop */}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
