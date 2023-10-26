'use client';

import { Datepicker } from 'flowbite-react';

const DatepickerComponent = ({ onChange, value }) => {

    return (
      <div className='w-full '>
        <input type="date" onChange={onChange} value={value} className='rounded-md border border-gray-200' />
      </div>
    )
  }
export default DatepickerComponent
