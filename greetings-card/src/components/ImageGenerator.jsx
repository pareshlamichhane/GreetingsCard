import React from 'react';

const ImageGenerator = ({ festival}) => {
    const festivalImages = {
        "dashain1": require('../assets/dashain1.jpeg'),
        "dashain2": require('../assets/dashain2.jpg'),
        "dashain3": require('../assets/dashain3.jpeg'),
        "tihar1": require('../assets/tihar1.jpg'),
        "tihar2": require('../assets/tihar2.jpeg'),
    };
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={festivalImages[festival]} alt={festival} height='300px'/>
        </div>
    );
};

export default ImageGenerator;
