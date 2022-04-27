import React from 'react'
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';
import returnimg from './returncolor.png'


function ReturnButton ( { searchAgain } ) {
    return (
        <div>
            <div className="ba bw1 b--dark-gray grow">
                <Button color="primary" onClick={searchAgain}>
                <Tooltip title={<span style={{ fontSize: "0.7rem" }}>{"Search Again"}</span>}>
                    <img src={returnimg} alt="returnimg" width="60px" height="60px"/>
                </Tooltip>  
                </Button>
            </div>    
        </div>
        
    )
};

export default ReturnButton;