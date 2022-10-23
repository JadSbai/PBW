import React from 'react'

interface InputFieldProps {
    title: string
    placeholder: string
    value: string
    onChange: (text: string) => void
    long?: boolean
    short?: boolean
    password?: boolean
}

export const InputField = (props: InputFieldProps) => {
    const classes = props.short
        ? "text-sm w-36 transition bg-slate-100 focus:bg-slate-200 px-4 py-2 mt-2 outline-none text-md rounded-lg ring-0 border-0 focus:ring-0"
        : "text-sm w-80 transition bg-slate-100 focus:bg-slate-200 px-4 py-2 mt-2 outline-none text-md rounded-lg ring-0 border-0 focus:ring-0"
    return (
            <div className="mt-4">
                <p className="font-sans text-md">{props.title}</p>
                { !props.long
                ? <input type={props.password ? "password" : null} onChange={(e) => props.onChange(e.target.value)} value={props.value} placeholder={props.placeholder} className={classes}/>
                    : <textarea onChange={(e) => props.onChange(e.target.value)} value={props.value} placeholder={props.placeholder} className="w-80 transition rounded-xl bg-slate-100 focus:bg-slate-200 px-4 py-2  outline-none text-md border-0 ring-0"/>
                }
            </div>
    )
}