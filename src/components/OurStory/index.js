import React from 'react';
import './ourstory.css';

const OurStory = () => {
    return (
        <section id="our-story">
            <div className="contenedor">
                <div className="izquierda">
                    <p className="our-story">OUR STORY</p>
                    <hr></hr>
                    <h2>Welcome To Royal</h2>
                    <p className="texto">
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. 
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto.
                    </p>
                </div>
                <div className="derecha">
                    <img src={require("../../assets/story.jpg")} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default OurStory;