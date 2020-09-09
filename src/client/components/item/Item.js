import React from 'react';
import { Title } from '../text/Text';
import Button from '../button/Button';

export function ListItem({ name, dietaries, displayButton, id, addItem, removeItem }) {
  const item = {
    id,
    name,
    dietaries,
  }
  return (
    <li className="item" data-testid='item-test' onClick={!displayButton ? addItem : null}>
      <Title text={name} />
      <p>
        {dietaries.map((name, i) => (
          <DietItem key={i} diet={name} displayQty={false} />
        ))}
      </p>
      <Button className='remove-item' displayButton={displayButton} removeItem={removeItem} text='x' />
    </li>
  )
}

export function DietItem({ diet, displayQty, qty }) {

  const amount = displayQty ? (<span>{`${qty}x`}</span>) : null;
  return (
    <span>
      {amount}
      <span className="dietary">{diet}</span>
    </span>
  );
}
