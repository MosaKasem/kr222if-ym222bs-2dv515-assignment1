import React, { Fragment, useState } from 'react'
import Message from './Message'


const RenderTable = (message, data, user, updateAccordingToUser, handleEnterKey, fetchData) => {
    let count = 0
    // routing för olika algoritmer
    return (
        <Fragment>
           <form>
           {message ? <Message msg={message} /> : null }
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit' onClick={fetchData} className='btn btn-warning ml-2'>Search</button>
                </div>
            </form> 
            { data ? <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Similarity</th>
                            </tr>
                        </thead>
                        { data.map(item => (
                        <tbody key={++count}>
                            <tr>
                            <th key={++count}>{item.id}</th>
                            <th key={++count}>{item.name}</th>
                            <td key={++count}> {item.rating}</td>
                            </tr>
                            
                        </tbody>
                        ))}
                    </table>
                        : null }
        </Fragment>
    )
}

export default RenderTable