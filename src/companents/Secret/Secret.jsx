import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import "./style.css"

const DualSecret = () => {
     const [showInput1, setShowInput1] = useState(true);
     const [showInput2, setShowInput2] = useState(true);

     const toggleInput1 = () => setShowInput1(prev => !prev);
     const toggleInput2 = () => setShowInput2(prev => !prev);

     return (
          <div className='div'>
               <Button onClick={toggleInput1} title='Secret' />
               {showInput1 && (
                    <div>
                         <Input type="text" placeholder="Input 1" />
                    </div>
               )}

               <Button onClick={toggleInput2} title='Secret'/>
                    {showInput2 && (
                         <div>
                              <Input type="text" placeholder="Input 2" />
                         </div>
                    )}
          </div>
     );
};

export default DualSecret;
