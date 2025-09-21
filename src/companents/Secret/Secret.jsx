import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const DualSecret = () => {
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const toggleInput1 = () => setShowInput1(prev => !prev);
  const toggleInput2 = () => setShowInput2(prev => !prev);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button onClick={toggleInput1} title={showInput1 ? 'Yashirish' : 'Korsatish'} />
        
     
      {showInput1 && (
        <div style={{ marginTop: '10px' }}>
          <Input
            type="text"
            pl="Input 1"
          />
        </div>
      )}

<Button onClick={toggleInput2} title={showInput2 ? 'Yashirish' : 'Korsatish'} />

      {showInput2 && (
        <div style={{ marginTop: '10px' }}>
          <Input
            type="text"
            pl="Input 2"
            value={inputValue}
            onChange={e => setInputValue(e.target.value) }
          />
        </div>
      )}
    </div>
  );
};

export default DualSecret;
