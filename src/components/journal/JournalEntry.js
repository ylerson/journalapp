import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg)'
                }}
                >

            </div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un Nuevo Dia
                </p>
                <p className='journal__entry-content'>
                    Represente unao au qonoeno qiunoansos qohqojeo aoidhoadojhqon qohdohdoand 0qdono
                </p>
            </div>
            
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <span>14 hr</span>
            </div>
            
        </div>
    )
}
