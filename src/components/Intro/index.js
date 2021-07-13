import React from 'react';
import './intro.css';

const Intro = () => {
    return ( 
        <section id="intro">
            <div className="contenedor">
                <div className="texto">
                    <h1>Only Quality Food</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architectoeaque ipsa quae 
                        ab illo inventore. 
                    </p>
                </div>
                <div className="botones">
                    <a href="#" className="menu">VIEW MENU</a>
                    <a href="#" className="reservation">RESERVATION</a>
                </div>
            </div>
        </section>
    );
}
 
export default Intro;