import React from "react";

const adverts = [
  {
    href: "https://www.onvinyl.co.nz/",
    imgSrc: "/images/onvinylbanner.jpg",
    imgAlt: "OnVinyl.co.nz",
    external: true,
  },
  {
    href: "mailto:simon@silentdesigns.co.nz?subject=Vinyl Directory Advertising enquiry",
    imgSrc: "/images/new-ad.jpg",
    imgAlt: "Send advertising enquiries to simon@silentdesigns.co.nz",
    external: false,
  },
];

const Adverts = () => (
  <div className="advert">
    {adverts.map(({ href, imgSrc, imgAlt, external }, idx) => (
      <div className="advert-item" key={idx}>
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>
    ))}
  </div>
);

export default Adverts;