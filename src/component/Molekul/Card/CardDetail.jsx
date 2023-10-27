'use client';

import { Button, Card } from 'flowbite-react';

const CardDetail = ({hargaRange, harga1, harga2, harga3}) => {
    return (
      <Card className="max-w-sm w-5/6">
        <h5 className="text-lg font-bold font-montserrat text-black">
            {hargaRange}
        </h5>
        <div>
            <p className="font-normal text-sm font-montserrat text-black">
                {harga1}
            </p>
            <p className="font-normal text-sm font-montserrat text-black">
                {harga2}
            </p>
            <p className="font-normal text-sm font-montserrat text-black">
                {harga3}
            </p>
        </div>
        <Button className='bg-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href='/Booking'>
            Booking
        </Button>
      </Card>
    )
}
export default CardDetail

