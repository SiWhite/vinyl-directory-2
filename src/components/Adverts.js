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
                         <a href="mailto:simon@silentdesigns.co.nz?subject=Vinyl Directory Advertising enquiry">
                            <img src="/images/new-ad.jpg" alt="send advertising enquiries to simon@silentdesigns.co.nz" />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Adverts;
