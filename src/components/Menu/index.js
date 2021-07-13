import React from 'react';
import './menu.css';

const Menu = () => {
    return ( 
        <section id="menu">
            <div className="contenedor">
                <div className="linea1">
                    <div className="texto">
                        <ul>
                            <li className="precio">$26.95</li>
                            <li className="titulo">Grilled Fillet</li>
                            <li className="parrafo">Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</li>
                        </ul>
                    </div>
                    <div className="foto cangrejo"></div>
                    <div className="texto">
                        <ul>
                            <li className="precio">$26.95</li>
                            <li className="titulo">Grilled Fillet</li>
                            <li className="parrafo">Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</li>
                        </ul>
                    </div>
                </div>
                <div className="linea2">
                    <div className="foto hongos"></div>
                    <div className="texto">
                        <ul>
                            <li className="precio">$26.95</li>
                            <li className="titulo">Grilled Fillet</li>
                            <li className="parrafo">Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</li>
                        </ul>
                    </div>
                    <div className="foto pez"></div>
                </div>
            </div>
        </section>
    );
}
 
export default Menu;