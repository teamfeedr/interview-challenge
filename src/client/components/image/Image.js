import React from 'react';

export default function LoadingImage({ src, className, condition }) {
  if (condition) {
    return (
      <img data-testid='image-test' alt='' src={src} className={className} />
    )
  } else {
    return null;
  }
}
