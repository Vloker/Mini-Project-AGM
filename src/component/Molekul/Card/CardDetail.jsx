'use client';

import { Button, Card } from 'flowbite-react';

const CardDetail = () => {
    return (
      <Card className="max-w-sm w-5/6">
        <h5 className="text-lg font-bold font-montserrat text-black">
            Rp 40.000 - Rp 120.000
        </h5>
        <div>
            <p className="font-normal text-sm font-montserrat text-black">
                1 jam = Rp 40.000
            </p>
            <p className="font-normal text-sm font-montserrat text-black">
                2 jam = Rp 80.000
            </p>
            <p className="font-normal text-sm font-montserrat text-black">
                3 jam = Rp 120.000
            </p>
        </div>
        <Button className='bg-green' href='1'>
            Booking
        </Button>
      </Card>
    )
}
export default CardDetail

