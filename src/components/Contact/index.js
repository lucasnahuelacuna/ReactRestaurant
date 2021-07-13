import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contacto">
            <div className="contenedor">
                <div className="izquierda">
                    <h2>Hours of Operation</h2>
                    <ul>
                        <li>MON - FRI</li>
                        <li>10:00am - 1:00pm</li>
                        <li>4:00pm - 10:30pm</li>
                    </ul>
                    <ul>
                        <li>SAT</li>
                        <li>3:00pm - 10:30pm</li>
                    </ul>
                    <ul id="tercero">
                        <li>SUN</li>
                        <li>We are close</li>
                    </ul>
                    <a href="">MAKE A RESERVATION</a>
                </div>
                <div className="derecha">
                    <h3>Drop Us a Line</h3>
                    <p>Don't be shy. Let us know if you have any questions!</p>
                    <a href="#">CONTACT US</a>
                    <h3 className="news">Our Newsletter</h3>
                    <p>Dialogue is a essential part of any script</p>
                    <form action="">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Email" />
                        <input type="submit" value="CONTACT US" />
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;