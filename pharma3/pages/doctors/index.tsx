import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { InputField } from "../../components/InputField";
import { DOCTORS } from "../../constants";
import {Nav} from "../../components/Nav";
import { BackgroundBlur } from "../../components/BackgroundBlur";
import {Button} from "../../components/Button";

const DoctorLoginPage = () => {
    const [doctorUsername, setDoctorUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        const doctor = DOCTORS.find((doctor) => doctor.username === doctorUsername)
        if (doctor && doctor.password === password) {
            return router.push(`/doctors/${doctor.name}`)
        }
        return setError('Incorrect credentials')
    }

    const handleSwitchToPatient = () => {
        router.push('/user')
    }
    return (
            <div className="h-screen bg-white">
                <Nav />
                <div className="flex py-12 flex-col px-4 items-center">
                    <BackgroundBlur />
                    <div className="z-10 flex flex-col">
                        <div className="pt-8">
                            <InputField
                                title={"Doctor username"}
                                placeholder={"Enter your username"}
                                value={doctorUsername}
                                onChange={(username) => setDoctorUsername(username)}
                            />
                            <InputField
                                title={"Password"}
                                placeholder={"Enter your password"}
                                value={password}
                                onChange={(password) => setPassword(password)}
                                password
                            />
                            <Button onClick={handleLogin} text="Login"/>
                            <p className="text-blue-900 font-light text-center mt-4 cursor-pointer" onClick={handleSwitchToPatient}>Not a doctor? Login here.</p>
                            <p className="text-red-600 font-bold text-center">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DoctorLoginPage