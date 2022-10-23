import React, {ButtonHTMLAttributes} from 'react'
import Polygon from '../public/polygon.svg'

interface ButtonProps extends ButtonHTMLAttributes<any> {
    text: string
    loading?: boolean
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const rootClasses = !props.disabled
        ? "drop-shadow-lg py-2 mx-auto w-80 text-center flex justify-center bg-blue-500 mt-4 rounded-xl transition text-white hover:bg-blue-400 active:bg-blue-300 active:drop-shadow-none"
        : "transition py-2 mx-auto w-80 text-center flex justify-center bg-gray-300 mt-4 rounded-xl text-white cursor-default"

    const handleClick = () => {
        if (!props.disabled) {
            return props.onClick()
        }
        return
    }
    return (
            <button value={props.value}
                className={rootClasses}
                onClick={handleClick}
            >
                {!props.loading
                    ? props.text
                    : <Polygon stroke="white" fill="white" className="animate-spin"/>
                }
            </button>
    )
}