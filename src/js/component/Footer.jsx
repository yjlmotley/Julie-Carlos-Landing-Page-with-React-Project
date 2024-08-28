import React from "react";


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-dark bg-dark text-white p-4 d-flex align-items-center justify-content-center" style={{position: 'absolute', bottom: '0', width: '100%', height: '2.5rem'}}>
            <div id="footer">
                    {`Copyright © Your Website ${currentYear}`}
            </div>
        </footer>
    )
};