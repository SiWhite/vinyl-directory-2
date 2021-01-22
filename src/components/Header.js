import React from "react";
import { withRouter } from 'react-router';

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
                    <button onClick={this.goToMap}>Map view</button>
                    <button onClick={this.goToList}>List view</button>
                    <button onClick={this.goToFavourites}>My Favourites</button>
                </nav>
            </header>
        );
    }
    }


export default withRouter(Header);
