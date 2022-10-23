export const PATIENTS = [
    {
        id: 0,
        firstName: 'Sam',
        lastName: 'Brownstone',
        username: 'sam.brownstone',
        password: "1234",
        dob: "16/07/1969",
    },
    {
        id: 1,
        firstName: 'Jad',
        lastName: 'Sbai',
        username: 'jad.sbai',
        password: "1234",
        dob: "28/06/1926",
    },
    {
        id: 2,
        firstName: 'Meyad',
        lastName: 'Golmakani',
        username: 'meyad.golmakani',
        password: "1234",
        dob: "09/01/2019",
    },
    {
        id: 3,
        firstName: 'Alex',
        lastName: 'Clarke',
        username: 'alex.clarke',
        password: '1234',
        dob: "14/07/2019",
    },
    {
        id: 4,
        firstName: 'Jay',
        lastName: 'Milligan',
        username: 'jay.milligan',
        password: "1234",
        dob: "08/12/1980",
    }
]

export const DOCTORS = [
    {
        name: 'Dr Bommayya',
        id: "05583cb6-a0af-4fe4-9235-0796d8f24d3b",
        username: "neha.bommayya",
        password: "1234"
    },
    {
        name: 'Dr Patel',
        id: "73f14523-35f2-4928-aaf9-f401748dde66",
        username: 'misha.patel',
        password: "1234"
    }
]

export const MEDICATIONS = ['Amoxicillin', 'Morphine', 'Codeine', 'Penicillin', 'Sertraline']

export const ACTIVE_PRESCRIPTIONS: Prescription[] = [
    {
        id: 0,
        medication: 'Morphine',
        expiry: '29/10/2022',
        state: 'needsAttention'
    },
    {
        id: 1,
        medication: 'Amoxicillin',
        expiry: '30/11/2022',
        state: 'readyToPickup'
    },

]

export const COMPLETED_PRESCRIPTIONS: Prescription[] = [
    {
        id: 2,
        medication: 'Penicillin',
        expiry: '10/12/2021',
        state: 'fulfilled'
    },
    {
        id: 3,
    medication: 'Sertraline',
    expiry: '11/10/2022',
    state: 'expired'
    }
]

export interface Prescription {
    id: number
    medication: string
    expiry: string
    state: 'fulfilled' | 'expired' | 'needsAttention' | 'readyToPickup'
}

export interface Pharmacy {
    id: number
    address1: string
    address2: string
    address3: string
    distanceAway: string
}

export const PHARMACIES: Pharmacy[] = [
    {
        id: 0,
        address1: 'Caledonian Pharmacy',
        address2: '486a Caledonian Road',
        address3: 'London, N7 9RP',
        distanceAway: '0.2 miles away'
    },
    {
        id: 1,
        address1: 'Boots',
        address2: '34 Cherry Lane',
        address3: 'London, N1 QZT',
        distanceAway: '0.5 miles away'
    },
    {
        id: 2,
        address1: 'Ritz Pharmacy',
        address2: '21 Glasgow Boulevard',
        address3: 'London, W6 3JP',
        distanceAway: '1.1 miles away'
    }
]