import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NoteAppBar />

            <div className='notes__content'>
                <input 
                    type="text"
                    placeholder='Some awesome title'
                    className='notes__title-input' 
                />
                <textarea 
                    placeholder='What happened Today'
                    className='notes__textarea'
                ></textarea>

                <div className='notes__images'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpa0F7yNf4sbSdzFt0A7zNk6aQv4nKugyC2sJizUSq1GxbJZ35vtR80J3-Gizb3rOjJpw&usqp=CAU" alt="LandScape" />
                </div>

            </div>
        </div>
    )
}
