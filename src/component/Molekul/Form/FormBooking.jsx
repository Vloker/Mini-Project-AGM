import SelectionWithValues from "../../Atom/OptionsLapangan"
import DatepickerComponent from "../../Atom/Tanggal"
import OptionsWaktu from "../../Atom/OptionsWaktu";
import { Label, TextInput} from 'flowbite-react';
import { useDispatch } from 'react-redux'
import { addBooking } from "../../../redux/feature/Listbooking";
import { useState } from 'react';

const FormBooking = () => {

    const dispatch = useDispatch()
    const [jam, setJam] = useState('')
    const [waktu, setWaktu] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [lapangan, setLapangan] = useState('')

    const handleAdd = async (e) => {
        e.preventDefault()
        await dispatch(addBooking({
            jam,
            waktu,
            tanggal,
            lapangan
        }))
    }

    return (
        <>
        <form className="flex flex-col gap-4" onSubmit={handleAdd}>
                <div className="flex flex-col gap-2">
                    <Label 
                        htmlFor="jam" 
                        value="Jam Mulai" 
                        />
                    <TextInput 
                        name="jam"
                        value={jam}
                        onChange={(e) => setJam(e.target.value)}
                        type="time" 
                        placeholder="12:00"
                        required={true} />
                </div>

            <div className="flex flex-col gap-2">
                <Label 
                    htmlFor="waktu" 
                    value="Waktu Bermain" 
                    />
                <OptionsWaktu 
                    onChange={(e) => setWaktu(e.target.value)}
                    value={waktu}
                    />
            </div>

            <div className="flex flex-col gap-2">
                <Label 
                    htmlFor="Date" 
                    value="Tanggal" 
                    />
                <DatepickerComponent 
                    onChange={(e) => setTanggal(e.target.value)}
                    value={tanggal}
                    />
            </div>

            <div className="flex flex-col gap-2">
                <Label 
                    htmlFor="Court" 
                    value="Lapangan" 
                    />
                <SelectionWithValues 
                    onChange={(e) => setLapangan(e.target.value)}
                    value={lapangan}
                    />
            </div>

                <button className="bg-green text-white font-bold hover:bg-griy hover:text-green py-2 px-4 rounded" type="submit">Tambahkan</button>
        </form>
        </>
    )
}
export default FormBooking