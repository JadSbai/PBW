import React from 'react'

interface TitleProps {
    title: string
    small?: boolean
}

export const Title = (props: TitleProps) => {
    const classes = props.small ? "text-xl font-sans w-80 font-bold" : "text-4xl font-sans"
    return (
            <div className="mb-4">
                <p className={classes}>{props.title}</p>
            </div>
    )
}