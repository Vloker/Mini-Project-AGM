import React from 'react';

const options = [
  { label: 'Rekreasi & Keluarga', value: 'Rekreasi & Keluarga' },
  { label: 'Bulutangkis Berkualitas', value: 'Bulutangkis Berkualitas' },
  { label: 'Kompetitif & Turnamen', value: 'Kompetitif & Turnamen'},
  { label: 'Pelatihan & Kursus', value: 'Pelatihan & Kursus' },
];

const  SelectionWithValues = ({onChange,value}) => {

  return (
      <select value={value} onChange={onChange} className='rounded-md border border-gray-200' required>
        <option value="" className='font-montserrat text-griy'>Pilih lapangan</option>
        {options.map(option => (
          <option key={option.value} value={option.value} className='font-montserrat'>
            {option.label}
          </option>
        ))}
      </select>
  );

}
  
export default SelectionWithValues;