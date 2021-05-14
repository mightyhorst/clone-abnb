import React from 'react';

import './FooterBottomLeft.css';

interface FooterBottomLeftProps {}
export function FooterBottomLeft(props: FooterBottomLeftProps) {
    return (
        <>
            <ul className="FooterBottomLeft footer-bottom-left">
                <li className="footer-bottom-left__copyright">
                    &copy; 2021 AirBnB
                </li>
                <li>
                    <a href="#">
                        Privacy
                    </a>
                </li>
                <li>
                    <a href="#">
                        Terms
                    </a>
                </li>
                <li>
                    <a href="#">
                        Sitemap
                    </a>
                </li>
            </ul>
        </>
    );
}
