import React from "react";
import Footerpho from '../images/footerpho.png'

function Footer(){
    return(
        <>
            <div className="Footer">
            <div className="Footer1">
            <div>
                <img src={Footerpho} alt="" id="Footerimg" /></div>
                <div>
                <h1 id="footh1">TRY THE OLX APP</h1>
                <p id="pera">Buy, sell and find just about anything using <br /> the app on your mobile.</p></div>
                <div id="foot1"></div>
            </div>
            <div>
            <div className="Footer2">
                {/* <table>
                    <div>
                    <th><tr>Populer Categeries</tr></th>
                    <tr>
                    <td>
                    <ul className="footerul">
                    <li className="footli">cars</li>
                    <li className="footli">flat for rent</li>
                    <li className="footli">Mobile phones</li>
                    <li className="footli">Jobs</li>
                    </ul>
                     </td></tr></div>
                   
                     <div>
                    <th><tr>Treading searches</tr></th>
                    <tr>
                    <td>
                    <ul className="footerul">
                    <li className="footli">Bikes</li>
                    <li className="footli">Watchs</li>
                    <li className="footli">Books</li>
                    <li className="footli">Dogs</li>
                    </ul>
                     </td></tr></div>

                     <div>
                    <th><tr>About us</tr></th>
                    <tr>
                    <td>
                    <ul className="footerul">
                    <li className="footli">About dubeez group</li>
                    <li className="footli">OLX Blogs</li>
                    <li className="footli">Contect us</li>
                    <li className="footli">OLX for Businesses</li>
                    </ul>
                     </td></tr></div>

                     <div>
                    <th><tr>OLX</tr></th>
                    <tr>
                    <td>
                    <ul className="footerul">
                    <li className="footli">Help</li>
                    <li className="footli">Sitemap</li>
                    <li className="footli">Terms of use</li>
                    <li className="footli">Privecy policy</li>
                    </ul>
                     </td></tr></div>
                </table> */}
            </div>
            </div>
            </div>

        </>
    )
}

export default Footer;