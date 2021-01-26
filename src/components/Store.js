import React from "react";
import {withRouter} from 'react-router-dom';

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
      region
    } = this.props.details;
    const index = this.props.index.toString();
    const favs = this.props.favourites;
    const isFav = favs.hasOwnProperty(index);
    const isInList = this.props.location.pathname === '/list';
    return (
      <li className="store col-sm-4" data-region={region}>
        <div className="row">
          <img src={image} alt={name} className="col-sm-6"/>
          <div className="store-details col-sm-5">
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
          </div>
          <br />
          <div className="col-sm-1">
          {isInList ? 
          isFav ? <button className="btn-fav isfav" disabled></button> : <button className="btn-fav addfav" title="Add to favourites" onClick={() => this.props.addToFavourites(this.props.index)}></button> : 
          <button className="btn-fav removefav" title="Remove from favourites" onClick={() => this.props.deleteFavourite(this.props.index)}></button>
          }
         </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Store);
