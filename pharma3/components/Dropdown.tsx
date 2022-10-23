import React, {useState} from 'react'

interface DropdownProps {
    items: string[]
    selectedItemIndex: number
    title?: string
    onSelect?: (index: number) => void
    small?: boolean
}

export const Dropdown = (props: DropdownProps) => {
    const [isOptionsShowing, setIsOptionsShowing] = useState(false)

    const itemClasses = props.small
        ? "text-sm transition px-4 py-2 flex items-center w-20 hover:cursor-pointer hover:bg-slate-100 active:bg-slate-300"
        : "text-sm transition px-4 py-2 flex items-center w-80 hover:cursor-pointer hover:bg-slate-100 active:bg-slate-300"

    const selectedClasses = props.small
        ? " text-md my-1 w-20"
        : " text-md my-1 w-80"

    const handleItemClick = (index) => {
        props.onSelect(index)
        setIsOptionsShowing((ps) => !ps)
    }
    const dropdownItems = props.items.map((item, index) => {
        return (
                <div
                    className={itemClasses}
                    key={index}
                    onClick={() => handleItemClick(index)}
                >
                        <p>{item}</p>
                </div>
        )
    })
    return (
            <div>
                <p className={selectedClasses}>{props.title ? props.title : null}</p>
                <div
                    className="text-sm rounded-lg transition px-4 py-2 flex items-center bg-slate-100 hover:cursor-pointer hover:bg-slate-100 active:bg-slate-300 justify-between"
                    onClick={() => setIsOptionsShowing((ps) => !ps)}
                >
                    <p className="">{props.items[props.selectedItemIndex]}</p>
                    <img src="/chevron.svg" style={{ height: 24 }}/>
                </div>
                <div className="absolute bg-slate-50 rounded-lg translate-y-1 drop-shadow-lg overflow-hidden">{isOptionsShowing && dropdownItems}</div>
            </div>
    )
}