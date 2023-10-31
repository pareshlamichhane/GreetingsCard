import React from 'react';

const ImageGenerator = ({ festival, writtenMsg}) => {
    const festivalImages = {
        "dashain1": require('../assets/dashain1.jpeg'),
        "dashain2": require('../assets/dashain2.jpg'),
        "dashain3": require('../assets/dashain3.jpeg'),
        "tihar1": require('../assets/tihar1.jpg'),
        "tihar2": require('../assets/tihar2.jpeg'),
    };
    const bgURL = 'url(' + festivalImages[festival] + ')';
    return (
        <div className='ImageGenerator'>
                <div style={{height:'300px' ,backgroundImage:bgURL, backgroundRepeat:'no-repeat'}}>
                    <p>{writtenMsg.sender}</p>
                    <p>{writtenMsg.recipient}</p>
                    <p>{writtenMsg.occasion}</p>
                    <p>{writtenMsg.message}</p>
                </div>
        </div>
    );
};

export default ImageGenerator;
