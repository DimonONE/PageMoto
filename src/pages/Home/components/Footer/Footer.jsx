import React from "react"
import { NavLink } from "react-router-dom"


export const Footer = (props) => {
    return(
        <footer className="page-footer text-center text-md-left relative">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="contact-info ">
                        <span className="car-repire-icon-warehouse"></span>
                        <address>
                            <NavLink to="#" className="text-uppercase text-medium">г. Ростов-на-Дону, <div className="hidden visible-lg-block"></div>
                                ул. ….</NavLink>
                        </address>
                       <div className="mail">
                           <span className="car-repire-icon-42"></span>
                           <NavLink to="tel:+79185455993">7-918-545-59-93</NavLink>
                       </div>
                    </div>
                    <p className="text-medium text-uppercase copyright">
                        &#169; <span id="copyright-year">2016</span>All rights reserved
                        {/* <!-- {%FOOTER_LINK} --> */}
                    </p>
                </div>
                {/* <!-- <div className="col-md-6 ">
                </div> --> */}
            </div>
        </div>
        {/* <!-- RD Google Map --> */}
        {/* <!-- <div className="rd-google-map">
            <div id="google-map" className="rd-google-map__model" data-zoom="14" data-x="-73.9874068"
                 data-y="40.643180"></div>
            <ul className="rd-google-map__locations">
                <li data-x="-73.9874068" data-y="40.643180">
                    <p>28 Jackson Blvd Ste 1020, Chicago</p>
                </li>
            </ul>
        </div> --> */}
        {/* <!-- END RD Google Map --> */}
    </footer>
    )
}