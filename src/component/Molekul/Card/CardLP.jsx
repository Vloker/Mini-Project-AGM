'use client';

import { Card } from 'flowbite-react';

const CardLP = ({title,title2}) => {
    
    return (
      <Card
        imgSrc="src/assets/Badminton Doubles Strategy - From Basic Rules to Winning the Match.jpeg"
        className='w-64 h-full '
        >
        <p className="text-lg font-bold font-montserrat text-green">
           {title}
        </p>
        <p className="font-montserrat font-light text-xs text-grey">
            {title2}
        </p>
      </Card>
    )

}
export default CardLP


