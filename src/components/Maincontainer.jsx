import React from 'react';
import Delivery from '../img/delivery.png';

const Maincontainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start md:item-center jsudtify-center '>
        <div className='flex item-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in
          <span className='text-orange-600 text-[3rem]'>Your City</span>
        </p>
        
        <p className='text-base text-textColor text-center md:text-left'>
          lorem ipsun dolor sdhs hsabdhasbda hsbhada hsdasb hbbajsda jaskdjkasda jkaskjdewajsfba jkasjedb jdajkedhakd baskhdjkadajk jaksdkas jakdkaks kksjdhuwaued ;dyetyuwtrw uaieyiuqyedaj wqkaiueqhdajdab wweiqwednqadja.
        </p>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </div>
  )
};

export default Maincontainer;