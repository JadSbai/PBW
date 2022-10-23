import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { InputField } from '../../components/InputField'
import { Title } from '../../components/Title'
import { Dropdown } from '../../components/Dropdown'
import { MEDICATIONS } from "../../constants";
import {Nav} from "../../components/Nav";
import {Button} from "../../components/Button";
import {BackgroundBlur} from "../../components/BackgroundBlur";
import { request } from '../../utils/request'
import { ethers } from 'ethers'
import ContractJson from '../../contracts/Practice.json'
const abi = ContractJson.abi

const DoctorPage = () => {
    const router = useRouter()

    const [selectedDoseFrequencyIndex, setSelectedDoseFrequencyIndex] = useState(0)
    const selectedDoseFrequencies = ['doses per day', 'doses per week', 'doses per month']

    const [selectedMedicationIndex, setSelectedMedicationIndex] = useState(0)
    const medications = MEDICATIONS

    const [selectedDurationIndex, setSelectedDurationIndex] = useState(0)
    const durations = ['days', 'weeks', 'months']

    const [doseAmount, setDoseAmount] = useState('')
    const [doseFrequency, setDoseFrequency] = useState('')
    const [courseDuration, setCourseDuration] = useState('')
    const [notes, setNotes] = useState('')

    const readyToSubmit = doseAmount !== '' && doseFrequency !== '' && courseDuration !== ''

    const handleSubmit = async () => {
        router.push('/confirmation?message=The%20prescription%20has%20been%20created%20and%20the%20patient%20will%20receive%20their%20reservation%20token%20shortly.')
    }

    return (
        <div className="h-screen bg-white">
            <Nav />
            <div className="flex py-12 flex-col items-center">
                <BackgroundBlur />
                <div className="flex flex-col z-10">
                    <Title title={`Prescription for ${router.query.patient}`} small/>
                    <Dropdown
                        title="Medication name"
                        items={medications}
                        selectedItemIndex={selectedMedicationIndex}
                        onSelect={(index) => setSelectedMedicationIndex((index))}
                    />
                    <InputField
                        value={doseAmount}
                        onChange={(amount) => setDoseAmount(amount)}
                        placeholder="Enter amount"
                        title="Dose amount (mg)"
                    />
                    <InputField
                        value={doseFrequency}
                        onChange={(frequency) => setDoseFrequency(frequency)}
                        title="Dose frequency"
                        placeholder="Enter frequency"
                    />
                    <Dropdown
                        items={selectedDoseFrequencies}
                        selectedItemIndex={selectedDoseFrequencyIndex}
                        onSelect={(index) => setSelectedDoseFrequencyIndex(index)}
                    />
                    <InputField
                        value={courseDuration}
                        onChange={(duration) => setCourseDuration(duration)}
                        title="Course duration"
                        placeholder="Enter duration"
                    />
                    <Dropdown
                        items={durations}
                        selectedItemIndex={selectedDurationIndex}
                        onSelect={(index) => setSelectedDurationIndex(index)}
                    />
                    <InputField
                        value={notes}
                        onChange={(note) => setNotes(note)}
                        placeholder="Enter notes"
                        title="Notes"
                        long
                    />
                    <Button disabled={!readyToSubmit} text="Issue prescription" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage