'use client';
const DatepickerComponent = ({ onChange, value }) => {

    return (
        <input type="date" onChange={onChange} value={value} className='rounded-md border border-gray-200' />
    )
  }
export default DatepickerComponent
