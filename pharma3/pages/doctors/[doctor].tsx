import React from 'react'
import { useRouter } from "next/router";
import { Title } from "../../components/Title";
import { PatientList } from '../../components/PatientList'
import {Nav} from "../../components/Nav";
import { BackgroundBlur } from "../../components/BackgroundBlur";

const PatientsPage = () => {
    const router = useRouter()
    const { doctor } = router.query
    const titleString = `Your appointments, ${doctor}`
    return (
        <div className="h-screen">
            <Nav />
            <div className="flex flex-col py-12 px-4 ">
                <BackgroundBlur />
                <div className="z-10 flex flex-col">
                    <p className="text-2xl mb-4">{titleString}</p>
                    <PatientList />
                </div>
            </div>
        </div>
    )
}

export default PatientsPage