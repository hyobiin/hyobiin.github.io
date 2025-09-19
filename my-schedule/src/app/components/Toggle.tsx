"use client";

interface ToggleProps{
    isOn: boolean,
    isOnTrue: string;
    isOnFalse: string;
    onToggle: () => void;
}

export function Toggle({ isOn, isOnTrue, isOnFalse, onToggle }: ToggleProps){
    return(
        <button
            type="button"
            onClick={onToggle}
            className={`btn ${isOn ? "" : "green"}`}
        >
            {isOn ? isOnTrue : isOnFalse}
        </button>
    )
}