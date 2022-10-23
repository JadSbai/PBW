import React from 'react'

export const SelectedPharmacy = () => {
    return (
        <div className="px-4 py-4 my-2 w-full rounded-xl bg-slate-100">
            <div className="flex-row flex align-baseline rounded-xl justify-between">
                <div>
                    <p>Caledonian Pharmacy</p>
                    <p>486a Caledonian Road</p>
                    <p>London, N7 9RP</p>
                </div>
                <div className="flex flex-col justify-between items-end inline-block align-baseline">
                    <img src="/location.svg" width={32}/>
                    <p className="font-light">0.2 miles away</p>
                </div>
            </div>
        </div>
    )
}