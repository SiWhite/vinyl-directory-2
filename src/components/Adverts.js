import React from "react";

function Adverts() {
  return (
    <div className="advert flex">
      <div className="advert-item">
        <a href="https://www.onvinyl.co.nz/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/onvinylbanner.jpg"
            alt="OnVinyl.co.nz"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>
      <div className="advert-item">
        <a href="mailto:simon@silentdesigns.co.nz?subject=Vinyl Directory Advertising enquiry">
          <img
            src="/images/new-ad.jpg"
            alt="Send advertising enquiries to simon@silentdesigns.co.nz"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Adverts;