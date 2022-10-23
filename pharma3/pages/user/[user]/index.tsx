import React, {useState} from 'react'
import {ACTIVE_PRESCRIPTIONS, COMPLETED_PRESCRIPTIONS, Prescription} from "../../../constants";
import {SelectedPharmacy} from "../../../components/SelectedPharmacy";
import {PrescriptionTable} from "../../../components/PrescriptionTable";
import {useRouter} from "next/router";
import {Nav} from "../../../components/Nav";
import {BackgroundBlur} from "../../../components/BackgroundBlur";

const UserPage = () => {
    const router = useRouter()
    const { ready } = router.query
    const prescriptions = ACTIVE_PRESCRIPTIONS.map((prescription) => {
        if(prescription.state === 'needsAttention' && ready==='true') {
            return { ...prescription, state: 'readyToPickup'  }
        }
        return prescription
    })
    const welcomeString = `Welcome to pharma3, ${router.query.user}`

    return (
        <div className="h-screen bg-white relative">
            <Nav />
            <div className="flex py-8 flex-col px-4">
                <BackgroundBlur />
                <div className="z-20">
                    <p className="text-3xl mb-4">{welcomeString}</p>
                    <p className="text-lg">Your closest pharmacy is</p>
                    <SelectedPharmacy />
                    <p className="text-lg mt-4">Active prescriptions</p>
                    <PrescriptionTable prescriptions={ prescriptions as Prescription[] } />
                    <p className="text-lg mt-4">Past prescriptions</p>
                    <PrescriptionTable prescriptions={ COMPLETED_PRESCRIPTIONS }/>
                </div>
            </div>
        </div>
    )
}



export default UserPage