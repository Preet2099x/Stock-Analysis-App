import React, { useState } from 'react';
import './Page.scss';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([
    'Apple', 'Microsoft', 'Amazon', 'IBM', 'Tesla', 
    'Google', 'Facebook', 'NVIDIA', 'Netflix', 'Intel'
  ]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = [
      'Apple', 'Microsoft', 'Amazon', 'IBM', 'Tesla', 
      'Google', 'Facebook', 'NVIDIA', 'Netflix', 'Intel'
    ].filter(company => company.toLowerCase().includes(searchTerm));
    
    setFilteredCompanies(filtered);
  };

  return (
    <div className='main'>
      <div className='left'>
        <div className="graph">Graph</div>
        <div className="companyInfo">Company Info</div>
      </div>

      <div className="right">
        <input
          className='searchBox'
          type="text"
          placeholder='Enter Company Name'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="listContainer">
          {filteredCompanies.map(company => (
            <button key={company}>{company}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
