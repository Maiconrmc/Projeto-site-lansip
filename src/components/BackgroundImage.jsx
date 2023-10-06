import React from 'react';


const BackgroundImage = () => {
  const backgroundImageStyle = {

    position: 'absolute',
    backgroundImage: `url(${process.env.PUBLIC_URL}/imagemDeFundo.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Define a altura como a altura da janela
  };

  return (
    <div style={backgroundImageStyle}>
      {}
    </div>
  );
};

export default BackgroundImage;