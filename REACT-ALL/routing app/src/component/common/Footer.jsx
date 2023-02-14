import React from 'react';
import './footer.css'

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container footer">
                    <div className="row ">
                        <div className="col-md-4">
                            <h4>Agency Website:-</h4>
                            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero hic voluptas
                                consequuntur fuga adipisci perspiciatis vel.
                            </article>
                        </div>
                        <div className="col-md-4">
                            <h4>Important Links</h4>
                            <ul>
                                <li><a href="">Lorem, ipsum Lorem, ipsum.</a></li>
                                <li><a href="">Lorem, ipsum.</a></li>
                                <li><a href="">Lorem, ipsum.</a></li>
                                <li><a href="">Lorem, ipsum.</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                            <address>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis porro earum illum perspiciatis saepe libero praesentium molestias cumque inventore accusantium!
                            </address>
                        </div>
                    </div>
                    <div className='copyright-text'>
                        Performance & security by Cloudflare
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
