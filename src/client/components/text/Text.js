import React from 'react';

export function ErrorText({ condition, text }) {
  if (condition) {
    return (
      <p className='error'> {text} </p>
    )
  } else {
    return null;
  }
}

export function Title({ text, className }) {
  return (
    <h2 className={className}> {text} </h2>
  )
}
