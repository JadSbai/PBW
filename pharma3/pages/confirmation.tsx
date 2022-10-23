import React from 'react'
import {useRouter} from "next/router";
import {Nav} from "../components/Nav";
import {BackgroundBlur} from "../components/BackgroundBlur";
import Tick from '../public/tick.svg'

const UserPage = () => {
    const router = useRouter()
    const { message } = router.query
    return (
            <div className="h-screen bg-white relative">
                <Nav />
                <div className="flex py-8 flex-col px-4">
                    <BackgroundBlur />
                    <div className="z-20 justify-center items-center flex flex-col">
                        <div className="mb-4 bg-slate-100 px-4 py-4 rounded-lg">
                            <div className="flex flex-row justify-between mb-4">
                                <p className="text-2xl text-black rounded ">Success</p>
                                <Tick stroke="green" width={24}/>
                            </div>
                            <div>
                                <p className="text-md">{message}</p>
                            </div>
                        </div>
                        <img src="borat.gif"/>
                    </div>
                </div>
            </div>
            )
}



export default UserPage