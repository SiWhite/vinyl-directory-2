import React from "react";

class Intro extends React.Component {

    render() {
        if (this.props.insideMap) {
            return (
                <div style={{display: "flex"}}>
                    <div className="content" style={{width: '70%', marginRight: "5%"}}>
                        <h2>Welcome to VinylDirectory.nz - your guide to independent kiwi vinyl record digging spots!</h2>
                        <p className="intro" style={{fontSize: "1.25em"}}>This handy map shows the locations and contact details of independent vinyl
                            record sellers across New Zealand. Click on a record icon on the map to view details about each
                            location. You can zoom and drag on the map to refine your view, or select a region from the
                            drop-down menu to focus on that area.
                        </p>
                        <p style={{fontSize: "1.25em"}}>If you are a retailer and would like to have your
                        listing added to the directory, become a featured store, or host an advertisement with us (at super
                        low rates!), or if you have any other feedback, please email <a
                            href="mailto:simon@silentdesigns.co.nz">simon@silentdesigns.co.nz</a>.
                        </p>
                    </div>
                    <div class="paypal-wrapper" style={{background: '#eee', padding: "10px 20px", borderRadius: "10px", marginBottom: "40px"}}>
                        <div id="paypal-container-YPGXYXA2C8GYS"></div>
                    </div>
            </div>
            )
        }
        if (this.props.insideList) {
            return (
                 <div style={{display: "flex"}}>
                    <div className="content" style={{width: '70%', marginRight: "5%"}}>
                        <h2>Welcome to VinylDirectory.nz - your guide to independent kiwi vinyl record digging spots!</h2>
                        <p className="intro" style={{fontSize: "1.25em"}}>The list below displays details of independent vinyl record sellers across New Zealand, you can filter by region using the drop-down menu. Click on the links to visit their website or add them as a favourite to come back to later.</p>
                        <p style={{fontSize: "1.25em"}}>If you are a retailer and would like to have your listing added to the directory, become a featured store, or host an advertisement with us (at super low rates!), or if you have any other feedback, please email <a href="mailto:simon@silentdesigns.co.nz">simon@silentdesigns.co.nz</a>.</p>
                        <p style={{fontSize: "1.25em"}}>Happy digging! :)</p>
                    </div>
                    <div class="paypal-wrapper" style={{background: '#eee', padding: "10px 20px", borderRadius: "10px", marginBottom: "40px"}}>
                        <div id="paypal-container-YPGXYXA2C8GYS"></div>
                    </div>
                 </div>
                )
        }

        if (this.props.insideFavs) {
            return (
                 <div style={{display: "flex"}}>
                    <div className="content" style={{width: '70%', marginRight: "5%"}}>
                        <h2>Welcome to VinylDirectory.nz - your guide to independent kiwi vinyl record digging spots!</h2>
                        <p className="intro" style={{fontSize: "1.25em"}}>This page shows details of stores you have added as favourites (via the list view). Favourites are stored in your browser, so will remain here until you manually delete them or until your browser cookies are cleared.</p>
                        <p style={{fontSize: "1.25em"}}>Happy digging! :)</p>
                    </div>
                    <div class="paypal-wrapper" style={{background: '#eee', padding: "10px 20px", borderRadius: "10px", marginBottom: "40px"}}>
                        <div id="paypal-container-YPGXYXA2C8GYS"></div>
                    </div>
                </div>
                )
            }
        }
    }

export default Intro;
