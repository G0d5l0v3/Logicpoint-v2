import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const CloudinaryImg = () => {
   // Create a Cloudinary instance and set your cloud name.
   const cld = new Cloudinary({
    cloud: {
      cloudName: 'db5az7ydi'
    }
  });
  const myImage = cld.image('logicpoint-assets/bxewsd0ixjcbjaoamdyg'); 

  // Resize to 200 x 200 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(300).height(300));

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};

export default CloudinaryImg;
