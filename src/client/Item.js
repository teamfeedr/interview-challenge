import React from 'react';

export default ({ name, dietaries, disabled, onClick, onRemove }) => (
  <li
    onClick={disabled ? undefined : onClick}
    className={`item ${disabled ? 'disabled' : ''} ${onClick ? 'clickable' : ''}`}
  >
    <h2>{name}</h2>
    <p>
      {dietaries.map((d) => <span key={d} className="dietary">{d}</span>)}
    </p>
    {onRemove && <button onClick={onRemove} className="remove-item">x</button>}
  </li>
);
