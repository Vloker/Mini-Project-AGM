'use client';

import { Button, Card } from 'flowbite-react';

const CardDetail = ({hargaRange, harga1, harga2, harga3}) => {
    return (
      <Card className="max-w-sm w-5/6">
        <h5 className="text-md font-bold font-montserrat text-black">
            {hargaRange}
        </h5>
        <div className='text-xs font-montserrat'>
            <p>{harga1}</p>
            <p>{harga2}</p>
            <p>{harga3}</p>
        </div>
        <Button className='bg-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href='/Booking'>
            Booking
        </Button>
      </Card>
    )
}
export default CardDetail

