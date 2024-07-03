
// import { Like } from '../types/likes';
import s from './pages.module.css'
import { useEffect, useState } from 'react';
// import {icon} from './serdt.png'
// import {icon} from "../pages/"

// type CardProps = {
//   Data: Like;
// }

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
  
  // const{Data} = props;
  // const [like, setLike]=useState(Data.like)
  // const onLikeClick = () => {
  //     setLike(like + 1)
  return (
    <div  className={s.dogs}>
      {imageUrls.map((url, index) => (
        <img className={s.dog} key={index} src={url} alt={`Dog ${index}`} />
      ))}
        {/* <div ><img src='' alt="" className={s.icon} onClick={onLikeClick} />{like}</div> */}

    </div>
  );
};


export default DogImages;


