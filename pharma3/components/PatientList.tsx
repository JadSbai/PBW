import React from 'react'
import { useRouter } from 'next/router'
import { PATIENTS } from '../constants'

export const PatientList = () => {
    const router = useRouter()

    const handlePatientClick = (patientName) => {
        router.push(`/patients/${patientName}`)
    }
    const patients = PATIENTS.map((patient, index) => {
        return (
                <div onClick={() => handlePatientClick(patient.firstName + ' ' + patient.lastName)}>
                    <div className="flex p-4 justify-between transition bg-slate-100 hover:bg-slate-200 hover:cursor-pointer">
                        <div className="flex">
                            <div className="flex items-center mr-4">
                                <img src='/user.svg' style={{height: 24}}/>
                            </div>
                            <div>
                                {patient.firstName + ' ' + patient.lastName}
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                {patient.dob}
                            </div>
                            <div className="flex items-center ml-2">
                                <img src='/arrow.svg' style={{height: 16}}/>
                            </div>
                        </div>
                    </div>
                   {index != PATIENTS.length-1 && <div className="bg-slate-300 h-px w-full"/>}
                </div>
        )
    })
    return (
            <div className="w-full bg-slate-100 rounded-xl overflow-hidden">
                <div>
                    <div className="py-2 pl-14 pr-10 flex justify-between">
                        <div className="text-sm text-slate-500">Patient name</div>
                        <div className="text-sm text-slate-500">Date of birth</div>
                    </div>
                    <div className="bg-slate-300 h-px w-full"/>
                </div>
                {patients}
            </div>
    )
}