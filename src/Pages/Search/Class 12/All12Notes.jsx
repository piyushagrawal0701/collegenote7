import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const All12Notes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterItems = (c) => {
    setActiveFilter(c);
  };

  const filteredItems = (c) => {
    if (activeFilter === 'all' || activeFilter === c) {
      return 'filterDiv show';
    }
    return 'filterDiv hide';
  };

  return (

<>

      
{/* <!-- ----------------------------- SEARCH SECTION (12 DETAILED NOTES) -------------------------  --> */}
    
    <section>
      <div
        className="movie-heading"
        id="webseriessection"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1
          className="movie-h1 webSeries-h1 movie-h1-transition"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          Choose Subject
        </h1>
      </div>

      <div id="myBtnContainer" style={{ marginTop: '50px' }}>
        <button className={`btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterItems('all')}>
          Show all
        </button>
        <button className={`btn ${activeFilter === 'weightage' ? 'active' : ''}`} onClick={() => filterItems('weightage')}>
          Weightage
        </button>
        <button className={`btn ${activeFilter === 'jeeallupdates' ? 'active' : ''}`} onClick={() => filterItems('jeeallupdates')}>
        JEE All Updates
        </button>
        <button className={`btn ${activeFilter === 'main' ? 'active' : ''}`} onClick={() => filterItems('main')}>
          Main Subject
        </button>
        <button className={`btn ${activeFilter === 'jeemains' ? 'active' : ''}`} onClick={() => filterItems('jeemains')}>
          JEE Mains
        </button>
        <button className={`btn ${activeFilter === 'jeeadvance' ? 'active' : ''}`} onClick={() => filterItems('jeeadvance')}>
          JEE Advance
        </button>
 
      </div>

      <div className="container">
        <Link to="/search_12_full_notes"><div className={filteredItems('main')}>Physics ( Class 12th )</div></Link>
        
        <Link to="/search_12_full_notes"> <div className={filteredItems('main')}>Chemistry ( Class 12th )</div></Link>

        <Link to="/search_12_full_notes"><div className={filteredItems('main')}>Maths ( Class 12th )</div></Link>

        

        {/* -------- Weightage ---------   */}
        <a href="https://byjus.com/jee/jee-main-syllabus/#physics-weightage"><div className={filteredItems('weightage')}>Physics ( Chapter Weightage )</div></a>
                
        <a href="https://byjus.com/jee/jee-main-syllabus/#chemistry-weightage"><div className={filteredItems('weightage')}>Chemistry ( Chapter Weightage )</div></a>
                
        <a href="https://byjus.com/jee/jee-main-syllabus/#maths-weightage"><div className={filteredItems('weightage')}>Maths ( Chapter Weightage )</div></a>
        
        {/* -------- Mains & Advance ---------   */}

        <a href="https://www.mathongo.com/iit-jee/jee-main-chapter-wise-questions-with-solutions"><div className={filteredItems('jeemains')}>JEE Mains ( Chapter wise PYQs )</div></a>

        <a href="https://www.selfstudys.com/books/jee-previous-year-paper/english/iit-jee-advanced-previous-year-paper"><div className={filteredItems('jeeadvance')}>JEE Advance ( Previous Year Question )</div></a>

        <a href="https://jeemain.nta.nic.in/">
          <div className={filteredItems('jeeallupdates')}>JEE Mains All Updates</div>
        </a>

      </div>
    </section>
</>
  );
};

export default All12Notes;
