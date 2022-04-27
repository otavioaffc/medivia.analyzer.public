import React from 'react';
import analyzerLogo from './logo_transparent.png';
import './logo.css'
// import Tilt from 'react-tilt'
// import Uliax from './Uliax.png'

const Logo = () => {
    return (
        <div className=''>
            <div style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner">
                {/* <img alt='Uliax' src={Uliax} width="75" height="75" />  */}
                    <img alt='AnalyzerLogo' src={analyzerLogo} />
                </div>
            </div> 
        </div>             
    );
}

export default Logo;