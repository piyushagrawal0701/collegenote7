import React, { useState } from 'react';

const SearchAllCN1stYear = () => {
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

      
{/* <!-- ----------------------------- SEARCH SECTION (1ST YEAR) -------------------------  --> */}
    
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
        <button className={`btn ${activeFilter === 'colors' ? 'active' : ''}`} onClick={() => filterItems('colors')}>
          Latest Updated
        </button>
        <button className={`btn ${activeFilter === 'cars' ? 'active' : ''}`} onClick={() => filterItems('cars')}>
        Syllabus
        </button>
        <button className={`btn ${activeFilter === 'maths' ? 'active' : ''}`} onClick={() => filterItems('maths')}>
          Maths
        </button>
        <button className={`btn ${activeFilter === 'dge' ? 'active' : ''}`} onClick={() => filterItems('dge')}>
          Digital Electronic
        </button>
        <button className={`btn ${activeFilter === 'time-table' ? 'active' : ''}`} onClick={() => filterItems('time-table')}>
          Time Table
        </button>
        <button className={`btn ${activeFilter === 'papers' ? 'active' : ''}`} onClick={() => filterItems('papers')}>
          PYQs
        </button>
      </div>

      <div className="container">
        <a href="First Year/maths1sem.html">
          <div className={filteredItems('maths')}>Maths(Linear Algebra [sem-1])</div>
        </a>
        <div className={filteredItems('maths')}>Maths(Probability [sem-2])</div>
        <div className={filteredItems('colors fruits')}>Chemistry</div>
        <div className={filteredItems('dge')}>Digital Electronic</div>
        <div className={filteredItems('colors')}>Communication</div>
        <div className={filteredItems('cars')}>Computer Science</div>
        <div className={filteredItems('colors')}>Applied Physics</div>
        <div className={filteredItems('colors')}>Python Programming</div>
        <div className={filteredItems('colors')}>Software System</div>
        <div className={filteredItems('colors')}>Linux</div>
        <a href="Timetable.html">
          <div className={filteredItems('time-table')}>View Time-Table</div>
        </a>
      </div>
    </section>
</>
  );
};

export default SearchAllCN1stYear;
