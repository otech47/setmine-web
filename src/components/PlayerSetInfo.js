import React from 'react'

export default function PlayerSetInfo(props) {
    const currentSet = props.currentSet
    const timeElapsed = props.timeElapsed

    return (
        <div className='PlayerSetInfo flex-column flex-fixed'>
            <p>{`${currentSet.artist} - ${currentSet.setName}`}</p>
            <p className='caption'>{`${timeElapsed} / ${currentSet.setLength}`}</p>
        </div>
    )
}