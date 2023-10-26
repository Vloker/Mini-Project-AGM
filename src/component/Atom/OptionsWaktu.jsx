import React, { useState } from 'react';

const optionsWaktu = [
    { label: '1 jam', value: '1' },
    { label: '2 jam', value: '2' },
    { label: '3 jam', value: '3'},
  ];

const OptionsWaktu = ({onChange, value}) => {

    return(
        <>
        <div>
            <select value={value} onChange={onChange} className='rounded-md border border-gray-200'>
              <option value="" className='font-montserrat text-griy'>Pilih Waktu Lama Bermain</option>
              {optionsWaktu.map(option => (
                <option key={option.value} value={option.value} className='font-montserrat'>
                    {option.label}
                </option>
                ))}
            </select>
        </div>
        </>
    )
}
export default OptionsWaktu