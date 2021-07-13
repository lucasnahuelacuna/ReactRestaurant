import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import './dropdown.css';

function Dropdown({ items = [] })  {
    const [open, setOpen] = useState(false);

    Dropdown.handleClickOutside = () => setOpen(false);

    return ( 
        <div>
            <img src={require('../../assets/menu.png')} 
                className="menu-icon" alt=""
                onClick={() => setOpen(!open)}
            ></img>
            {open && (
                <ul className="dd-list">
                    {items.map(item => 
                        <li className="dd-list-item" key={item.id}>
                            <a href="#">{item.value}</a>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);
 
//export default Dropdown;