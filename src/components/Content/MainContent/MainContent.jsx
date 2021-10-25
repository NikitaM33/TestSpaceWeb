import React from 'react';
import { Link } from 'react-router-dom';

function MainContent({ items }) {

  return (
    <div className="mainContent">
      <div className="mainContent__name">
        <span>Бортовой журнал</span>
        <h3>Бортовой журнал</h3>
      </div>

      <div className="mainContent__articles">

        <div className="accordion accordion-flush" id="accordionFlushArticle">
          {
            items ? items.map((article, index) => {
              return <div key={article.link} className="accordion-item">
                <h2 className="accordion-header" id="one">
                  <Link className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush${index}`} aria-expanded="false" aria-controls={`flush${index}`}>
                    {article.title}
                  </Link>
                </h2>
                <div id={`flush${index}`} className="accordion-collapse collapse" aria-labelledby="one" data-bs-parent="#accordionFlushArticle">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
            })
              : 'No content'
          }
        </div>

      </div>
    </div>
  )
}

export default MainContent;

