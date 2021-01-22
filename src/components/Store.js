import React from "react";

class Store extends React.Component {
  render() {
    const {
      name,
      address1,
      address2,
      address3,
      phone,
      url,
      image,
    } = this.props.details;
    return (
      <li className="store col-sm-4">
        <img src={image} alt={name} />
        <div className="store-details">
        <h3 className="store__name">{name}</h3>
        <address>
          {address1}
          <br />
          {address2}
          <br />
          {address3}
        </address>
        {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
        <br />
        {url && <a href={url}>Visit website</a>}
        <br />
        <button className="btn-fav" onClick={() => this.props.addToFavourites(this.props.index)}></button>
        </div>
      </li>
    );
  }
}

export default Store;
