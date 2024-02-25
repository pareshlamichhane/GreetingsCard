import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import '../App.css';

const ImageGenerator = ({ festival, writtenMsg}) => {
    const [image, setImage] = useState(null);
    const divRef = useRef(null);

    const handleConvertToImage = () => {
        if (divRef.current) {
          html2canvas(divRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            setImage(imgData);
          });
        }
      };

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
            <div ref={divRef}>
                <div style={{height:'300px' ,backgroundImage:bgURL, backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
                    <p>{writtenMsg.sender}</p>
                    <p>{writtenMsg.recipient}</p>
                    <p>{writtenMsg.occasion}</p>
                    <p>{writtenMsg.message}</p>
                </div>
            </div>
            <button onClick={handleConvertToImage}>Download Card</button>
            <div>
               
              {image &&  <div><h3>Right click and download</h3> <img src={image} alt="" /></div>}
            </div>
        </div>
    );
};

export default ImageGenerator;
