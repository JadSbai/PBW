import React from 'react'
import {useRouter} from "next/router";
import {Title} from "../../components/Title";
import {PharmacyOptions} from "../../components/PharmacyOptions";
import { PHARMACIES } from "../../constants";
import {Nav} from "../../components/Nav";
import {BackgroundBlur} from "../../components/BackgroundBlur";
import { Button } from '../../components/Button'

const PharmacySelection = () => {
    const router = useRouter()
    const { medication, name } = router.query

    const handleConfirm = () => {
        router.push(`/user/${name}?ready=true`)
    }

    const subtitle = `Please select where to pick up your ${medication} prescription. The pharmacies below currently have stock available.`
    return (
        <div className="h-screen bg-white relative">
            <Nav />
            <div className="flex pt-8 flex-col p-4">
                <BackgroundBlur />
                <div className="z-10 flex flex-col">
                    <Title title="Choose a pharmacy" />
                    <p className="mb-4">{subtitle}</p>
                    <PharmacyOptions pharmacies={PHARMACIES}/>
                    <Button onClick={handleConfirm} text="Confirm Choice"/>
                </div>
            </div>
        </div>
    )
}

export default PharmacySelection