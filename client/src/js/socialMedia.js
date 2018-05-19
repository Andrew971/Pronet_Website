import React from 'react';
import Data from './Data/fr'


export const SocialMedia = (className) => {

  return (
  <div className="col order-md-last col-md-3" style={{margin:'1rem 0'}} align="center">
  <div className="row">
    {Data.socialLink.map(link =>
      <div className="col" key={link.key}>

        <a href={link.url} target="_blank" rel="noopener noreferrer"><i className={link.icon}  style={{
            fontSize: '1.5rem',
            color:'white',
            margin:'auto',

          }}></i></a>
        </div>
    )
  }
    </div>
    </div>
);

}
