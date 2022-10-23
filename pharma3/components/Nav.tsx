import React from 'react'
import {useRouter} from "next/router";

export const Nav = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/user')
    }
    return (
        <div className="h-16 flex items-center px-4 z-10 cursor-pointer my-4" onClick={handleClick}>
            <img src="/logo.svg" className="z-10 mr-4" width={48}/>
            <p className="align-middle justify-center text-3xl text-black z-10">pharma3</p>
        </div>
    )
}