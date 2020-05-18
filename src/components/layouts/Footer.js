import React from 'react';
import styled from 'styled-components';
import '../../App.css';
 function Footer() {
    return (
        <div className="main-footer">
        <FooterContainer >
           <div className="container">
               <div className="row">
                {/* Column 1 */}
                <div className="col-md-3 col-sm-6">
                    <h4>Lorem Ispsum</h4>
                    <ul className="list-unstyled">
                        <li>loren ipsum</li>
                        <li>loren ipsum</li>
                        <li>loren ipsum</li>
                        <li>loren ipsum</li>
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="col-md-3 col-sm-6">
                    <h4>Lorem Ispsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col-md-3 col-sm-6">
                    <h4>Lorem Ispsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                    </ul>
                </div>
                {/* Column 4 */}
                <div className="col-md-3 col-sm-6">
                    <h4>Lorem Ispsum</h4>
                    <ul className="list-unstyled">
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                        <li><a href="/">loren ipsum</a></li>
                    </ul>
                </div>
               </div>
               {/* Footer Bottom */}
                <div className="footer-bottom">
    <p className="text-xs-center">&copy;{new Date().getFullYear()}City Guide App-All Rights are Resereved</p>
                </div>

           </div>
           </FooterContainer>
        </div>
    )
}
export default Footer;


const FooterContainer=styled.footer`

    background: var(--mainDark);
    color: var(--mainWhite);

    ul li a{
        color:var(--mainGray);
    }
    ul li a:hover{
        color:var(--mainLightGray);
    }
`
