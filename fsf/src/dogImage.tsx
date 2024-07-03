// import { useEffect, useState } from 'react';

// const DogImages = () => {
//   const [imageUrls, setImageUrls] = useState<string[]>([]);

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random/30')
//       .then((response) => response.json())
//       .then((data) => {
//         const urls = data.message;
//         setImageUrls(urls);
//       });
//   }, []);

//   return (
//     <div>
//       {imageUrls.map((url, index) => (
//         <img key={index} src={url} alt={`Dog ${index}`} />
//       ))}
//     </div>
//   );
// };

// export default DogImages;
import './index.css'
import { useEffect, useState } from 'react';

const DogImages = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://random.dog/doggos')
      .then((response) => response.json())
      .then((data) => {
        const fileNames = data;
        const urls = fileNames.map((fileName: string) => `https://random.dog/${fileName}`);
        setImageUrls(urls);
      });
  }, []);

  return (
    <div >
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Dog ${index}`} />
      ))}
    </div>
  );
};

export default DogImages;


