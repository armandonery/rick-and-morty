import React from 'react'
import '../App.css'     //importing styles
import wall2 from '../img/wall2.jpg'
import react from '../img/react.svg'
import material from '../img/material-ui.svg'
import css from '../img/css.svg'

export default function HomePage(){     {/* function that returns homepage component */}
    return(
        <div>

            <section>
                <div>
                    <p id="text">       {/* Main text of the homepage */}
                        Rick and Morty's fan site <br />                        
                        Where you can find main charachter and episodes.
                    </p>
                    <img id="hp2" src={wall2} alt="rick" />
                </div>
            </section>

            <footer class="footer">     {/* footer of the homepage */}
                <div>
                    <p>
                        <strong>Created by</strong> Armando Nery. <br />
                        <p>using</p>
                        <ul id="lista2">        {/* list that returns logos contained in the img folder of the project */}
                            <li><img id="tech" src={react} alt="react"/></li>
                            <li><img id="tech" src={material} alt="material-ui"/></li>
                            <li><img id="tech" src={css} alt="css3"/></li>
                        </ul>
                    </p>
                </div>
            </footer>
            
        </div>
    )
}