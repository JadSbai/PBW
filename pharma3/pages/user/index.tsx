import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { InputField } from "../../components/InputField";
import { PATIENTS } from "../../constants";
import {Nav} from "../../components/Nav";
import {BackgroundBlur} from "../../components/BackgroundBlur";
import {Button} from "../../components/Button";

const UserLoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        const patient = PATIENTS.find((patient) => patient.username === username)
        if (patient && patient.password === password) {
            return router.push(`/user/${patient.firstName}`)
        }
        return setError('Incorrect credentials')
    }

    const handleSwitchToDoctor = () => {
        router.push('/doctors')
    }
    return (
        <div className="h-screen bg-white">
            <Nav />
            <div className="flex py-12 flex-col px-4 items-center">
                <BackgroundBlur />
                <div className="z-10 flex flex-col">
                    <div className="pt-8">
                        <InputField
                            title={"Username"}
                            placeholder={"Enter your username"}
                            value={username}
                            onChange={(username) => setUsername(username)}
                        />
                        <InputField
                            title={"Password"}
                            placeholder={"Enter your password"}
                            value={password}
                            onChange={(password) => setPassword(password)}
                            password
                        />
                        <Button text="Login" onClick={handleLogin} />
                        <p className="text-blue-900 font-light text-center mt-4 cursor-pointer" onClick={handleSwitchToDoctor}>Not a patient? Login here.</p>
                        <p className="text-red-600 font-bold text-center mt-4">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLoginPage