import React from "react";

class Adverts extends React.Component {
    render() {
        return (
            <>
                <div className="advert clearfix">
                    <div style={{width: '48.75%', float: 'left', cursor: 'pointer', marginTop: '30px'}}>
                        <a href="https://www.onvinyl.co.nz/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/onvinylbanner.jpg" alt="OnVinyl.co.nz" />
                        </a>
                    </div>
                    <div style={{width: '48.75%', float: 'right', cursor: 'pointer', marginTop: '30px'}}>
                        <a href="https://offthetracks.co.nz/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/off-the-tracks-ad-vinyldir.jpg" alt="Off the tracks" />
                        </a>
                    </div>
                </div>
                <div className="advert clearfix">
                <div style={{width: '48.75%', cursor: 'pointer', marginTop: '30px', marginLeft: '25.62%'}}>
                    <a href="mailto:info@vinyldirectory.co.nz?subject=Advertising enquiry">
                        <img src="/images/new-ad.jpg" alt="mailto:info@vinyldir.co.nz" />
                    </a>
                </div>
            </div>
        </>
        )
    }
}

export default Adverts;
