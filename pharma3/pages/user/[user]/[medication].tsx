import React from 'react'
import {useRouter} from "next/router";
import {Nav} from "../../../components/Nav";
import {BackgroundBlur} from "../../../components/BackgroundBlur";
import {ACTIVE_PRESCRIPTIONS, PHARMACIES} from "../../../constants";
import {PharmacyOption} from "../../../components/PharmacyOptions";

const ConfirmationPage = () => {
    const router = useRouter()
    const { medication } = router.query

    const handleClick  = () => {
        router.push('/confirmation?message=Your%20token%20has%20been%20transferred%20to%20the%20selected%20pharmacy.%20Your%20prescription%20is%20ready%20to%20pick%20up%20there.')
    }
    return (
            <div className="h-screen bg-white relative">
                <Nav />
                <div className="flex py-8 flex-col px-4">
                    <BackgroundBlur />
                    <div className="z-20">
                        <p className="text-xl mb-4">Confirm token transfer to receive prescription</p>
                        <p className="mb-2">Reservation token</p>
                        <div className="bg-slate-100 rounded-xl p-4 flex flex-row justify-between items-center">
                            <div>
                                <div>
                                    {medication}
                                </div>
                                <div className="text-sm font-light text-slate-500">
                                    {'Expires ' + ACTIVE_PRESCRIPTIONS.find((med) => med.medication === medication).expiry}
                                </div>
                            </div>
                            <button onClick={handleClick} className="rounded-full bg-green-700 px-3 py-1 text-white transition hover:bg-green-800 active:bg-green-900">
                                Transfer
                            </button>
                        </div>
                        <p className="mb-2 mt-4">Pharmacy</p>
                        <div className="bg-slate-100 rounded-xl flex flex-row justify-between items-center">
                            <PharmacyOption pharmacy={PHARMACIES[0]} selected={false} />
                        </div>
                    </div>
                </div>
            </div>
            )
}



export default ConfirmationPage