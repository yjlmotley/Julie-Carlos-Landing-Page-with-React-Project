// Footer: Julie

import React from "react";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer bg-black text-white">
            <div className="container-fluid pt-4 pb-3 text-center">
                <p className="fs-6">
                    {`Copyright © Your Website ${year}`}
                </p>
            </div>
        </footer>
    );
};

export default Footer;