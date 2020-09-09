import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { usePost } from '../../utils/hooks';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import List from '../../components/list/List';
import { ErrorText, Title } from '../../components/text/Text';

export default function Main() {
  const [input, setInput] = useState('');
  const [previewData, setPreviewData] = useState([]);

  const { data, errorMsg } = usePost('/api/filter', input);

  function handleChange(value) {
    setInput(value);
  }

  function addItem(item) {
    setPreviewData(previewData.concat(item));
  }

  function removeItem(index) {
    setPreviewData(previewData.filter((item, i) => i !== index));
  }

  return (
    <div className="wrapper">
      <Header previewData={previewData} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <div className="filters">
              <Input data-testid='parent-input' handleChange={(value) => handleChange(value)} />
            </div>
            <ErrorText
              condition={input.length && !data.length}
              text='No results found' />
            <ErrorText
              condition={errorMsg}
              text={errorMsg}
            />
            <List className='item-picker'
              data={data}
              displayButton={false}
              addItem={(item) => addItem(item)} />
          </div>
          <div className="col-8">
            <Title text='Menu preview' />
            <List
              className='menu-preview'
              data={previewData}
              displayButton={true}
              removeItem={(index) => removeItem(index)} />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  addItem: PropTypes.func,
  displayButton: PropTypes.bool,
  condition: PropTypes.bool,
  data: PropTypes.array,
  handleClick: PropTypes.func,
  previewData: PropTypes.array,
  removeItem: PropTypes.func,
  text: PropTypes.string,
}
