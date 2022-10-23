import React from 'react'
import { Prescription } from "../constants";
import Tick from '../public/tick.svg'
import Ready from '../public/ready.svg'
import Attention from '../public/attention.svg'
import Expired from '../public/expired.svg'
import {useRouter} from "next/router";

interface PrescriptionItemProps {
    state: string
    expiry: string
    medicationName: string
    onClick: () => void
}

const icons = {
    fulfilled: <Tick width={24} className="mr-4" stroke="green"/>,
    readyToPickup: <Ready width={24} className="mr-4" stroke="rgb(59 130 246)"/>,
    needsAttention: <Attention width={24} className="mr-4" stroke="rgb(202 138 4)"/>,
    expired: <Expired width={24} className="mr-4" stroke="red"/>
}

const descriptions = {
    fulfilled: "Fulfilled",
    readyToPickup: "Checkout at pharmacy",
    needsAttention: "Select a pharmacy",
    expired: "Expired"
}

const prefixes = {
    fulfilled: 'Picked up ',
    readyToPickup: 'Pick up by ',
    needsAttention: 'Pick up by ',
    expired: 'Expired '
}

const PrescriptionItem = (props: PrescriptionItemProps) => {
    const rootClasses = props.state === "readyToPickup" || props.state === "needsAttention"
        ? "p-4 transition hover:bg-slate-200 active:bg-slate-300 hover:cursor-pointer"
        : "p-4"

    const actionClasses = props.state === "readyToPickup" || props.state === "needsAttention"
    ? "text-blue-600 font-bold"
    : ""
    return (
        <div className={rootClasses} onClick=
            {
                props.state === 'readyToPickup' || props.state === 'needsAttention'
                    ? props.onClick
                    : null
            }
        >
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    {icons[props.state]}
                    <div className="font-light">
                        {props.medicationName}
                    </div>
                </div>
                <div className="text-sm flex flex-col items-end">
                    <div className={actionClasses}>
                        {descriptions[props.state]}
                    </div>
                    <div className="font-light text-xs">
                        {prefixes[props.state] + props.expiry}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface PrescriptionTableProps {
    prescriptions: Prescription[]
}

export const PrescriptionTable = (props: PrescriptionTableProps) => {
    const router = useRouter()
    const { user } = router.query
    const handleClick = (drugName: string, state: string) => {
        if (state === 'needsAttention') {
            router.push(`/medication/${drugName}?name=${user}`)
        }
        router.push(`/user/${user}/${drugName}`)

    }
    const medications = props.prescriptions.map((prescription, index) => {
        return (
            <div>
                <PrescriptionItem
                    medicationName={prescription.medication}
                    expiry={prescription.expiry}
                    state={prescription.state}
                    onClick={() => handleClick(prescription.medication, prescription.state)}
                />
                {index != props.prescriptions.length-1 && <div className="bg-slate-300 h-px w-full"/>}
            </div>
        )
    })
    return (
        <div className="my-2 w-full rounded-xl bg-slate-100 overflow-hidden">
            <div>
                {medications}
            </div>
        </div>
    )
}