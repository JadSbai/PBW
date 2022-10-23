import React from 'react'

export const BackgroundBlur = () => {
    return (
        <div className="-translate-x-80 translate-y-80">
            <div className="animate-blob mix-blend-multiple blur-2xl absolute top-12 left-0 w-96 h-96 bg-blue-300 rounded-full"/>
            <div className="animation-delay-1000 animate-blob mix-blend-multiple blur-2xl absolute top-16 left-20 w-96 h-96 bg-blue-300 rounded-full"/>
            <div className="animation-delay-2000 animate-blob mix-blend-multiple blur-2xl absolute top-16 left-48 w-96 h-96 bg-purple-300 rounded-full"/>

            <div className="animation-delay-1000 animate-blob mix-blend-multiple blur-2xl absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full"/>
            <div className="animation-delay-3500 animate-blob mix-blend-multiple blur-2xl absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full"/>
            <div className="animation-delay-6500 animate-blob mix-blend-multiple blur-2xl absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full"/>

            <div className="animation-delay-3500 animate-blob mix-blend-multiple blur-2xl absolute bottom-16 left-48 w-96 h-96 bg-pink-300 rounded-full"/>
            <div className="animation-delay-4500 animate-blob mix-blend-multiple blur-2xl absolute bottom-16 left-20 w-96 h-96 bg-blue-300 rounded-full"/>
            <div className="animation-delay-6000 animate-blob mix-blend-multiple blur-2xl absolute bottom-12 left-0 w-96 h-96 bg-purple-300 rounded-full"/>
        </div>
    )
}