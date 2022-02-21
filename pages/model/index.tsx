import React, { useState } from 'react'
import ModelDemo from '../../components/ModalDemo';

function Model() {
  const [openModel,setOpenModel] = useState(false);
  return (
    <div className="container">
        <ModelDemo 
          isVisible={openModel}
          onCancel={() => {
            setOpenModel(false);
          }}
          onOk={() => {
            console.log('submit');
          }}
        >
            <h2>Demo Modal</h2>
            <form>
                <input type="text" />
            </form>
        </ModelDemo>
        <button onClick={() => {
          setOpenModel(true);
        }}>Open Modal</button>
    </div>
      
  )
}

export default Model