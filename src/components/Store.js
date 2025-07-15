import React from "react";
import { useLocation } from "react-router-dom";

const Store = ({
  details = {},
  index,
  favourites = {},
  addToFavourites,
  deleteFavourite,
}) => {
  const {
    name,
    address1,
    address2,
    address3,
    phone,
    url,
    image,
    region,
  } = details;
  const location = useLocation();
  const idx = index.toString();
  const isFav = favourites.hasOwnProperty(idx);
  const isInList = location.pathname === "/list";

  return (
    <li className="store col-sm-4" data-region={region}>
      <div className="row">
        <img src={image} alt={name} className="col-sm-6" />
        <div className="store-details col-sm-5 col-xs-4">
          <h3 className="store__name">{name}</h3>
          <address>
            {address1}
            <br />
            {address2}
            <br />
            {address3}
          </address>
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          )}
          <br />
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          )}
        </div>
        <br />
        <div className="col-sm-1">
          {isInList ? (
            isFav ? (
              <button className="btn-fav isfav" disabled></button>
            ) : (
              <button
                className="btn-fav addfav"
                title="Add to favourites"
                onClick={() => addToFavourites(index)}
              ></button>
            )
          ) : (
            <button
              className="btn-fav removefav"
              title="Remove from favourites"
              onClick={() => deleteFavourite(index)}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Store;