import React from "react";
import { withRouter } from 'react-router';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
      goToMap = (event) => {
        this.props.history.push(`/`);
      };
      goToList = (event) => {
        this.props.history.push(`/list`);
      };
      goToFavourites = (event) => {
        this.props.history.push(`/favourites`);
      };
    render() {
        return (
            <header>
                <a className="logo" href="/"><img src="/images/logo.png" alt="vinyldirectory.nz" /></a>
                <nav className="float-right">
                <NavLink to="/" activeClassName="active" exact={true} className="nav__item">Map view</NavLink>
                <NavLink to="/list" activeClassName="active" className="nav__item">List view</NavLink>
                <NavLink to="/favourites" activeClassName="active" className="nav__item">Favourites</NavLink>
                </nav>
            </header>
        );
    }
    }


export default withRouter(Header);
