import React from 'react'
import images1 from '../assets/images/1.jpg'
import images2 from '../assets/images/2.jpg'
import images3 from '../assets/images/3.jpg'
import images4 from '../assets/images/4.jpg'
import images5 from '../assets/images/5.jpg'
import images6 from '../assets/images/6.jpg'
import images7 from '../assets/images/7.jpg'
import images8 from '../assets/images/8.jpg'
import images9 from '../assets/images/9.jpg'
import images10 from '../assets/images/10.jpg'
import images11 from '../assets/images/11.jpg'
import images12 from '../assets/images/12.jpg'
import images13 from '../assets/images/13.jpg'
import images14 from '../assets/images/14.jpg'
import images15 from '../assets/images/15.jpg'
import images16 from '../assets/images/16.jpg'
import images17 from '../assets/images/17.jpg'
import images18 from '../assets/images/18.jpg'
import images19 from '../assets/images/19.jpg'
const imageStyle={
  "border":"2px solid crimson",
}

const ImageCollections = () => {
  return (
    <div className='     mt-6 grid grid-cols-1 items-center justify-evenly lg:grid-cols-3
     gap-6 md:grid-cols-2  ' >
        <img style={imageStyle} style={imageStyle} className='  rounded-xl   w-[310px]  h-[200px]' src={images1} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images2} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images3} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images4} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images5} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images6} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images7} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images8} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images9} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images10} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images11} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images12} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images13} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images14} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images15} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images16} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images17} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images18} alt="pic" />
        <img style={imageStyle} className=' rounded-xl w-[310px]  h-[200px]' src={images19} alt="pic" />
    </div>
  )
}

export default ImageCollections