import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="contenedor">
                <p className="titular">TESTIMONIALS</p>
                <hr></hr>
                <h2>What People are Saying</h2>
                <div className="contenedor-testimonials">
                    <div className="testimonial">
                        <img src={require('../../assets/estrellas.png')} alt="" />
                        <h3>"A Great Find"</h3>
                        <p className="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta."</p>
                        <p className="nombre">Divi</p>
                    </div>
                    <div className="testimonial">
                        <img src={require('../../assets/estrellas.png')} alt="" />
                        <h3>"A Great Find"</h3>
                        <p className="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta."</p>
                        <p className="nombre">Divi</p>
                    </div>
                    <div className="testimonial">
                        <img src={require('../../assets/estrellas.png')} alt="" />
                        <h3>"A Great Find"</h3>
                        <p className="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta."</p>
                        <p className="nombre">Divi</p>
                    </div>
                    <div className="testimonial">
                        <img src={require('../../assets/estrellas.png')} alt="" />
                        <h3>"A Great Find"</h3>
                        <p className="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta."</p>
                        <p className="nombre">Divi</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Testimonials;