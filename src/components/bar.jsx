import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft, faAngleRight, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "./bar.css";

// Sample data array with items containing tags and color properties
const data = [
  { id: 1, title: 'Item 1', tags: 'tag1, tag2', color: '#ff0000' }, // Red
  { id: 2, title: 'Item 2', tags: 'tag2, tag3', color: '#0000ff' }, // Blue
  { id: 3, title: 'Item 3', tags: 'tag1, tag3', color: '#008000' }, // Green
];

const Dropdown = () => {
  const [selected, setSelected] = useState('Following');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Following', 'Popular', 'New & Noteworthy'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selected} <span className="arrow">{isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-item ${option === selected ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Bar = () => {
  const [tags, setTags] = useState(''); // State for the tags input
  const [color, setColor] = useState(''); // State for the color input
  const [showFilters, setShowFilters] = useState(false); // State to show/hide filters
  const [filteredContent, setFilteredContent] = useState([]); // State for filtered content
  const [filterOption, setFilterOption] = useState('Following'); // State for the filter dropdown

  const handleFilterChange = (option) => {
    setFilterOption(option);
    // Implement filtering logic based on the selected filter option if needed
  };

  // Filter content based on tags and color using the data array
  const filterContent = (tags, color) => {
    const filteredData = data.filter(item => {
      return (
        item.tags.toLowerCase().includes(tags.toLowerCase()) &&
        item.color.toLowerCase().includes(color.toLowerCase())
      );
    });
    setFilteredContent(filteredData);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
    filterContent(event.target.value, color); // Filter content when tags input changes
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    filterContent(tags, event.target.value); // Filter content when color input changes
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bar-container">
      <div className="bar-left">
        <Dropdown filterOption={filterOption} handleFilterChange={handleFilterChange} />
        <div className="bar-buttons">
          <button className="bar-button">
            <FontAwesomeIcon icon={faAngleLeft} className="bar-button-icon" />
          </button>
          <button className="bar-button">Discover</button>
          <button className="bar-button">Animation</button>
          <button className="bar-button">Branding</button>
          <button className="bar-button">Illustration</button>
          <button className="bar-button">Mobile</button>
          <button className="bar-button">Print</button>
          <button className="bar-button">Product Design</button>
          <button className="bar-button">Typography</button>
          <button className="bar-button">
            <FontAwesomeIcon icon={faAngleRight} className="bar-button-icon" />
          </button>
        </div>
      </div>
      <div className="bar-right">
        <button className="bar-button" onClick={handleFilterClick}>
          <FontAwesomeIcon icon={faBars} className="bar-button-icon" /> Filters
        </button>
        {showFilters && (
          <div className="filter-section">
            <div className="filter-input">
              <label htmlFor="tags">Tags:</label>
              <input type="text" id="tags" value={tags} onChange={handleTagsChange} placeholder="Enter tags" />
            </div>
            <div className="filter-input">
              <label htmlFor="color">Color:</label>
              <div className="color-picker">
                <input
                  type="color"
                  id="color"
                  value={color}
                  onChange={handleColorChange}
                />
                <span style={{ backgroundColor: color, display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content">
        {/* Render filtered content here */}
        {filteredContent.map(item => (
          <div key={item.id} className="item">
            <h3>{item.title}</h3>
            <p>Tags: {item.tags}</p>
            <p>Color: {item.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
