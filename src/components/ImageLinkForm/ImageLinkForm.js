import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onButtonSubmit, handleKeyPress } ) => {
  
    return (
        <div>
            <p className='f3 gray'>
                {'To start, input the name of a character inside the box then click on "Go!".'}
            </p>
            <div>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center input-reset ba bg-transparent hover-bg-black hover-white' type='text' placeholder='Character Name' onChange={onInputChange} onKeyUp={handleKeyPress} />
                        <button className='w-30 grow f4 link ph3 pv2 dib gray bg-gray'
                        onClick={onButtonSubmit}                         
                        >Go!</button>
                    </div>
                </div>
            </div>
        </div>
                   
    );
}



export default ImageLinkForm;