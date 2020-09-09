import React from 'react';

export default function Input({ handleChange }) {
  return (
    <input
      data-testid='input-test'
      className="form-control"
      placeholder="Name"
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}
