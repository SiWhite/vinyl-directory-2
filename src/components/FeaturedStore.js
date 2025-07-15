import React from "react";
import { useHistory } from "react-router-dom";

const FeaturedStore = ({ details = {} }) => {
  const {
    name,
    address1,
    address2,
    address3,
    facebook,
    instagram,
    phone,
    url,
    isFeatured,
    featuredText,
    featuredImageUrl,
    region
  } = details;

  if (!isFeatured) return null;

  return (
    <div className="store store--featured col-sm-12" data-region={region}>
      <div className="row">
        <h3>Featured store</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={featuredImageUrl} alt={name} className="image--featured" />
        </a>
        <div className="store-details">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h2 className="store__name">{name}</h2>
          </a>
          {address1 && (
            <address>
              {address1}
              <br />
              {address2}
              <br />
              {address3}
            </address>
          )}
          {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
        </div>
        {featuredText && (
          <div className="store-text">
            <p>{featuredText}</p>
          </div>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit website
          </a>
        )}
        <br />
        <ul className="socials">
          {facebook && (
            <li>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://vinyl-dir.s3.ap-southeast-2.amazonaws.com/fb.png"
                  alt={name}
                />
              </a>
            </li>
          )}
          {instagram && (
            <li>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://vinyl-dir.s3.ap-southeast-2.amazonaws.com/insta.png"
                  alt={name}
                />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedStore;