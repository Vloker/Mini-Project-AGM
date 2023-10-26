'use client';

import { Card, Rating } from 'flowbite-react';

const CardHL = ({title,title2,title3,imgSrc}) => {

    return (
        <Card
        imgSrc={imgSrc}
        className='mb-10 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        href='/Details'
        >

        <p className="text-xs font-bold font-montserrat text-green">
           {title}
        </p>

        <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {title2}
            </p>
        </Rating>

        <p className='font-montserrat font-light text-xs'>
            {title3}
        </p>

      </Card>
    )
}
export default CardHL


