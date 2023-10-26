import SelectionWithValues from "../../Atom/OptionsLapangan"
import DatepickerComponent from "../../Atom/Tanggal"
import OptionsWaktu from "../../Atom/OptionsWaktu";
import { Label, TextInput} from 'flowbite-react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update, add } from "../../../redux/feature/ListBooking";

const FormBooking = () => {

    const dispatch = useDispatch();
    const [jam, setJam] = useState('')
    const [waktu, setWaktu] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [lapangan, setLapangan] = useState('')

    const UpdateValues = (e) => {
        e.preventDefault()
        dispatch(update({
            jam, waktu, tanggal, lapangan
        }))
        dispatch(add({
            jam, waktu, tanggal, lapangan
        }))
    }

    return (
        <>
        <form onSubmit={UpdateValues}>
            <div className="flex space-y-3 ">
                <div className="flex flex-col gap-2">
                    <Label 
                        htmlFor="jam" 
                        value="Jam Mulai" />
                    <TextInput 
                        id="Hourstart" 
                        type="text" 
                        placeholder="12:00"
                        value={jam}
                        onChange={(e) => setJam(e.target.value)}
                        required={true} />
                </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
                <Label 
                    htmlFor="waktu" 
                    value="Waktu Bermain" />
                <OptionsWaktu 
                    onChange={(e) => setWaktu(e.target.value)}
                    value={waktu} />
            </div>

            <div className="mt-5 flex flex-col gap-2">
                <Label 
                    htmlFor="Date" 
                    value="Tanggal" />
                <DatepickerComponent 
                    onChange={(e) => setTanggal(e.target.value)} 
                    value={tanggal}/>
            </div>

            <div className="mt-5 flex flex-col gap-2">
                <Label 
                    htmlFor="Court" 
                    value="Lapangan" />
                <SelectionWithValues 
                    onChange={(e) => setLapangan(e.target.value)}
                    value={lapangan}/>
            </div>

            <div className="mt-5 relative ">
                <button className="absolute right-0 bg-green text-white font-bold hover:bg-griy hover:text-green py-2 px-4 rounded" type="submit">Tambahkan</button>
            </div>
        </form>
        </>
    )
}
export default FormBooking