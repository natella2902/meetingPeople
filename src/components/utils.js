import React from 'react'

export const getBasicClasses = (classList) => {
    let classes = 'badge rounded m-1 bg-'
    classes += classList
    return classes
}

export const renderPhrase = (number) => {
    const lastChar = String(number)[String(number).length - 1]
    const exceptionNumbers = [11, 12, 13, 14]
    if (number === 0) {
        return 'Никто не тусанет с тобой сегодня'
    }
    if (exceptionNumbers.includes(number)) {
        return `${number} человек тусанет с тобой сегодня`
    }
    if (['2', '3', '4'].includes(lastChar)) {
        return `${number} человека тусанет с тобой сегодня`
    } else {
        return `${number} человек тусанет с тобой сегодня`
    }
}

export const selectedFillIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bookmark-fill"
            viewBox="0 0 16 16"
        >
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        </svg>
    )
}

export const selectedEmptyIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bookmark"
            viewBox="0 0 16 16"
        >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
    )
}

export const styleForSelectedIcon = () => {
    return {
        width: '35px',
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black'
    }
}
