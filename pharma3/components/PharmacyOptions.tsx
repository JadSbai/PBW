import React, {useState} from 'react'
import {Pharmacy} from "../constants";

interface PharmacyOptionsProps {
    pharmacies: Pharmacy[]
}

interface PharmacyOptionProps {
    pharmacy: Pharmacy
    selected?: boolean
    onSelect?: () => void
    showSelect?: boolean
}

export const PharmacyOption = (props: PharmacyOptionProps) => {
    const rootClasses = props.showSelect
        ? "p-4 flex-row flex justify-between transition hover:bg-slate-200 active:bg-slate-300 hover:cursor-pointer"
        : "p-4 flex-row flex justify-between transition"
    return (
        <div className={rootClasses}
                onClick={props.onSelect}
            >
            <div>
                <p>{props.pharmacy.address1}</p>
                <p>{props.pharmacy.address2}</p>
                <p>{props.pharmacy.address3}</p>
                <p className="font-light">{props.pharmacy.distanceAway}</p>
            </div>
            {props.showSelect && <div className="flex flex-row items-center mr-4">
                <div className="items-center align-center h-4 w-4 bg-black rounded-xl ml-4">
                    <div className="h-3 w-3 bg-slate-100 absolute translate-y-0.5 translate-x-0.5 rounded-xl" />
                    {props.selected && <div className="h-2 w-2 bg-black absolute translate-y-1 translate-x-1 rounded-xl" />}
                </div>
            </div>}
        </div>
    )
}

export const PharmacyOptions = (props: PharmacyOptionsProps) => {
    const [selectedPharmacyIndex, setSelectedPharmacyIndex] = useState(0)
    const options = props.pharmacies.map((pharmacy, index) => {
        return (
            <div>
                <PharmacyOption pharmacy={pharmacy} selected={selectedPharmacyIndex === index}
                    onSelect={() => setSelectedPharmacyIndex(index)}
                    showSelect
                />
                {index != props.pharmacies.length-1 && <div className="bg-slate-300 h-px w-full"/>}
            </div>
        )
    })
    return (
        <div className="my-2 w-full rounded-xl bg-slate-100 overflow-hidden">
            {options}
        </div>
    )
}