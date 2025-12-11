import React from 'react';
import './Filter.css';

function Filter({ categories, onCategoryChange, onLevelChange, levels }) {
  return (
    <div className="filter-panel">
      <h3 className="filter-title">Filters</h3>

      <div className="filter-group">
        <label className="filter-label">Category</label>
        <select
          className="filter-select"
          onChange={(e) => onCategoryChange(e.target.value)}
          defaultValue=""
        >
          <option value="">All Categories</option>
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Level</label>
        <select
          className="filter-select"
          onChange={(e) => onLevelChange(e.target.value)}
          defaultValue=""
        >
          <option value="">All Levels</option>
          {levels?.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
