import React from "react";
import { FOOTER } from '../.././utils/index'

function Footer() {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="footer-body">
                    {FOOTER.map((item, index) => {
                        return <div key={index} className="company-box"> <h6>{item.quick}</h6>
                            <ul>
                                {item.lists.map((list, index) => {
                                    return <li key={index}>
                                        <a href={list.url}>{list.list}</a>
                                    </li>
                                })}
                            </ul>
                        </div>
                    })}

                    <div className="company-box">
                        <h6>Mail Us:</h6>
                        <ul>
                            <p>
                                Ecommerce Internet Private Limited,
                                Buildings Alyssa, Begonia &
                                Clove Bathery Village,
                                Outer Ring Road Village,
                                Kochy, 560103, Banglure, India
                            </p>

                        </ul>
                    </div>
                </div>
                <div className="copy-right">
                    <hr></hr>
                    <p>
                        © 2023 ecommerce.com
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
