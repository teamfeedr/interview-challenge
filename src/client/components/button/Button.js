import React from 'react';

export default function Button({ className, displayButton, text, removeItem }) {
  if (displayButton) {
    return (
      <button data-testid='button-test' className={className} onClick={removeItem}>{text}</button>
    )
  } else {
    return null;
  }
}
