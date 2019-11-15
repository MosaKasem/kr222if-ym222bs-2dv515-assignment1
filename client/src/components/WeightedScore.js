import React, { Fragment, useState } from 'react'
import Message from './Message'
import axios from 'axios'

export const Weighted = (e) => {
    const [ user, setUser ] = useState('')
    const [ data, setData ] = useState(null)
    const [ message, setMessage] = useState('')

    console.log('User: ', user)


    const updateAccordingToUser = (e) => {
            setUser(e.target.value)
    }

    const handleEnterKey = (e) => {
        if(e.key === 'Enter') {
            fetch(e)
        }
    }

    const fetch = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`/weighted/${user}`);
            console.log(response)
            // setCurrentState({message: 'No data found'})
            setData(response.data)
            // setMessage({message: ''})
          } catch (err) {
            console.error(err);
          }
    }
    
    return (
        <Fragment>
            {message ? <Message msg={message} /> : null }
           <form>
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit'  onClick={fetch} className='btn btn-primary'>Search</button>
                </div>
            </form>

            { data ? <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th scope='col'>Movie</th>
                                <th scope='col'>Weighted Score</th>
                            </tr>
                        </thead>
                        {data.map(item => (
                        <tbody>
                            <tr>
                                <th key={item.weightedScore}>{item.weightedScore}</th>
                                <td key={item.weightedScore + 1}> {item.movie}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                         : null }
        </Fragment>
    )
}

export default Weighted