import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <div className="container">
      <p>
        © {currentYear} - <a href="mailto:simon@silentdesigns.co.nz">Vinyl Directory</a>
      </p>
    </div>
  </footer>
);

export default Footer;
