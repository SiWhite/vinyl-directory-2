import React from "react";
import { withRouter } from 'react-router';

class Header extends React.Component {
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
                    <button onClick={this.goToList}>Go to store list</button>
                    <button onClick={this.goToFavourites}>Go to favourites</button>
                </nav>
            </header>
        );
    }
    }


export default withRouter(Header);
