import React from "react"
import "./Footer.css"

function Footer(){

    return(
    <footer id="footer">
        <div>
            <p className="footer-name">Kaeneth Dayao</p>
            <p className="footer-email">Email: kendayao@gmail.com</p>
            <p className="footer-phone">Phone: 650-255-1097</p>
            <a href="https://www.linkedin.com/in/kaeneth-dayao/" target="_blank" title="Linkedin Profile"><i className="fab fa-linkedin fa-2x" id="footer-icon-linkedin"></i></a>
            <a href="https://github.com/kendayao" target="_blank" title="Github"><i className="fab fa-github-square fa-2x" id="footer-icon-github"></i></a>
        </div>
    </footer>
    )

}

export default Footer