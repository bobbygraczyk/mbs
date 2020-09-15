import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-hero-wrapper">
                    <div className="frame">
                        <h1>Northeast Ohio's only 100% mobile chiropractor</h1>
                    </div>
                </div>
                <div className="frame">
                    <h2 className="subtitle">Meet Dr. Stacey</h2>
                    <div className="col-60" id="bio">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                    <div className="col-30 drop-shadow" id="bio-photo">
                        {/* bio photo */}
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Home;