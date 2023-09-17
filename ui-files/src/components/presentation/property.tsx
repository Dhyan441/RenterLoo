import React from 'react';

const cardStyle = {
  width: '300px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  padding: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
};

const imgStyle = {
  width: '100%',
  height: '350px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
};

const Property = ({ url, imageUrl, address, price, email, term, info }) => {
  return (
    <div style={cardStyle}>
      <a href={url} style={linkStyle}>
        <img src={imageUrl} alt="Image" style={imgStyle}/>
        <h2><b>{address}</b></h2>
        <p>{price}</p>
        <p>{term}</p>
        <p>{email}</p>
        <p><br/><i>Additional info:</i><br/>{info}</p>
      </a>
    </div>
  );
};

export default Property;
