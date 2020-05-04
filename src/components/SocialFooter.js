import React from 'react'


export default function SocialFooter(){
    return(
        <div className="SocialFooter">

            <footer id="socialfooter">     {/* footer of the homepage */}
                <div>
                    <ul id="lista2">
                        <p>You can find me in</p> 
                        <li>
                            <a id="tech" href={'https://www.linkedin.com/in/armandonery34/'}>
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                            </a>
                        </li>
                        <li>
                            <a id="tech" href={'https://github.com/armandonery'}>
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}