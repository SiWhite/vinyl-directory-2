import React from "react";
import {withRouter} from 'react-router-dom';

class FeaturedStore extends React.Component {
  render() {
    const {
      name,
      address1,
      address2,
      address3,
      phone,
      url,
      image,
      isFeatured,
      featuredText,
      region
    } = this.props.details;
    return (
        <>
        {isFeatured &&
        <li className="store store--featured col-sm-12" data-region={region}>
          <div className="row">
            <h2>Featured store</h2>
            <img src={image} alt={name} className=""/>
            <div className="store-details">
              <h3 className="store__name">{name}</h3>
              <address>
                {address1}
                <br/>
                {address2}
                <br/>
                {address3}
              </address>
              {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
              <br/>
              {url && <a href={url} target="_blank" rel="noopener noreferrer">Visit website</a>}
            </div>
            <br/>
            {featuredText &&
              <div className="store-text"><p>{featuredText}</p></div>
            }
          </div>
        </li>
    }
    </>
    );
  }
}

export default withRouter(FeaturedStore);
