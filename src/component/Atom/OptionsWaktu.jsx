import React from 'react';

const optionsWaktu = [
    { label: '1 jam', value: '1 jam' },
    { label: '2 jam', value: '2 jam' },
    { label: '3 jam', value: '3 jam'},
  ];

const OptionsWaktu = ({onChange, value}) => {

    return(
        <>
            <select value={value} onChange={onChange} className='rounded-md border border-gray-200' required>
              <option value="" className='font-montserrat text-griy '>------</option>
              {optionsWaktu.map(option => (
                <option key={option.value} value={option.value} className='font-montserrat'>
                    {option.label}
                </option>
                ))}
            </select>
        </>
    )
}
export default OptionsWaktu