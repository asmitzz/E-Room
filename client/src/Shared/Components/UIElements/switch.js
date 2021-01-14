import React, {useState} from 'react';

import './switch.css';

const Switch = () => {

    const [toggler,setToggler] = useState(false);

    const switchHandler = () => {
        if(!toggler){
            document.documentElement.style.setProperty('--primary-color', '#6dd47e');
            document.documentElement.style.setProperty('--secondary-color', '#293250 ');
            document.documentElement.style.setProperty('--tertiary-color', '#ffd55a');
        }
        else
        {
            document.documentElement.style.setProperty('--primary-color', 'aliceblue');
            document.documentElement.style.setProperty('--secondary-color', '#7C3AED');
            document.documentElement.style.setProperty('--tertiary-color', '#8445f1');
        }
        setToggler(!toggler);
    }
    return (
         <label className="switch">
              <input type="checkbox" checked={toggler} onChange={switchHandler}/>
              <span className="slider round"></span>
         </label>
    );
};

export default Switch;
