import React from 'react';
import image2 from '../images/akar-icons_link-chain.png';
import image3 from '../images/akar-icons_github-fill.png';

const Card = (props) => {
  return (
    <div className="h-[61vh] w-[24vw] rounded-t-xl rounded-b-xl hover:border border-violet-600">
      <div className='flex flex-col'>
        <div>
          <img src={props.imgsrc} alt="" className=' h-[14vh] w-[24vw] md:h-[28vh] md:w-[24vw] rounded-t-xl'/>    
        </div>
        <div className='h-[32.5vh] bg-white rounded-b-xl shadow-2xl'>
          <div className='flex flex-col gap-3'>
            <div className='w-[22vw]'>
              <p className='text-center font-bold text-xs text-black-600 mt-2'>{props.title}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='w-[22vw] text-sm text-gray-500 text-justify pl-6'>
                <p>{props.description}</p>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div>
                <p className= 'w-[22vw] text-xs text-gray-500 text-justify font-semibold pl-6'>{props.languages}</p>
              </div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <img src={image2} alt="Live Preview" />
                  <p className='text-xs text-gray-500 text-justify underline underline-offset-1'>Live Preview</p>
                </div>
                <div className='flex object-contain h-4 w-20 gap-1'>
                  <img src={image3} alt="View Code" />
                  <a href='https://github.com/prak32/SCEV'><p className=' text-xs text-gray-500 text-justify underline underline-offset-1'>View Code</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
