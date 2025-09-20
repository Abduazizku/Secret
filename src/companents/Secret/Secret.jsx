import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const DualSecret = () => {
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const toggleInput1 = () => setShowInput1(prev => !prev);
  const toggleInput2 = () => setShowInput2(prev => !prev);

  return (
    <div className='div'>
      <Button onClick={toggleInput1} title='Secret'/>
      {showInput1 && (
        <div>
          <Input type="text" pl="Input 1" />
        </div>
      )}

      <Button onClick={toggleInput2} style={{ marginTop: '20px' }} title='Secret'/>
      {showInput2 && (
        <div>
          <Input type="text" pl="Input 2"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default DualSecret;
