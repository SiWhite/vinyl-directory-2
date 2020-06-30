import React from "react";

class Store extends React.Component {
  render() {
    const {
      name,
      address1,
      address2,
      address3,
      lat,
      lng,
      phone,
      url,
      image,
    } = this.props.details;
    return (
      <li className="store">
        <img src={image} alt={name} />
        <h3 className="store__name">{name}</h3>
        <address>
          {address1}
          <br />
          {address2}
          <br />
          {address3}
        </address>
        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
        <br />
        <a href={url}>Visit website</a>
        <br />
        <button onClick={() => this.props.addToFavourites(this.props.index)}>
          Add to favourites
        </button>
      </li>
    );
  }
}

export default Store;
