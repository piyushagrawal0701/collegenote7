import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const SearchAllCN2ndYear = () => {
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



{ /* <!-- ----------------------------- SEARCH SECTION (1ST YEAR) -------------------------  --> */}
    
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
        <button className={`btn ${activeFilter === 'latest' ? 'active' : ''}`} onClick={() => filterItems('latest')}>
          Latest Updated
        </button>
    
        <button className={`btn ${activeFilter === 'maths' ? 'active' : ''}`} onClick={() => filterItems('maths')}>
          Maths
        </button>
        <button className={`btn ${activeFilter === 'oops' ? 'active' : ''}`} onClick={() => filterItems('oops')}>
          Oops
        </button>
        <button className={`btn ${activeFilter === 'time-table' ? 'active' : ''}`} onClick={() => filterItems('time-table')}>
          Time Table
        </button>
        <button className={`btn ${activeFilter === 'syllabus' ? 'active' : ''}`} onClick={() => filterItems('syllabus')}>
          Syllabus
        </button>
      </div>

      <div className="container">
        <Link to="/analysis_3sem">
          <div className={filteredItems('latest')}>(Analysis and design of algorithm)</div>
        </Link>

        <Link to="/maths_3sem">
          <div className={filteredItems('maths')}>Maths</div>
       </Link>

        <Link to="/computer_system_organization_3sem">
        <div className={filteredItems('latest')}>Computer System Organization</div>
        </Link>

        <Link to="/oops_3sem">
        <div className={filteredItems('oops')}>Object Oriented Programming</div>
        </Link>

        <Link to="/communication_system_3sem">
        <div className={filteredItems('latest')}>Communication System</div>
        </Link>

        <Link to="/">
        <div className={filteredItems('latest')}>Internet Programming</div>
        </Link>

       <Link to="/timetable3sem">
          <div className={filteredItems('time-table')}>View Time-Table</div>
        </Link>

       <Link to="/syllabus3sem">
       <div className={filteredItems('syllabus')}>Syllabus</div>
       </Link>

        
      </div>
    </section>
</>
  );
};

export default SearchAllCN2ndYear;
