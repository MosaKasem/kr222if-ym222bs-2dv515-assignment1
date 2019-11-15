import React, { Fragment, useState } from 'react'
import Message from './Message'
import axios from 'axios'

export const Similarity = (e) => {
    let count = 0
    const [ user, setUser ] = useState('')
    const [ data, setData ] = useState(null)
    const [ message, setMessage] = useState(null)

    console.log('User: ', user)
    
    const updateAccordingToUser = (e) => {
        setUser(e.target.value)
    }

    const handleEnterKey = (e) => {
        if(e.key === 'Enter') {
            fetchSimilarity(e)
        }
    }

    const fetchSimilarity = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`/similarity/${user}`);
            setData(response.data)

          } catch (err) {
              setUser('')
              setData(null)
              setMessage('Something went wrong, try a number in the input field')
          }
    }
    
    return (
        <Fragment>
           <form>
           {message && <Message msg={message} /> }
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit' onClick={fetchSimilarity} className='btn btn-warning ml-2'>Search</button>
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

export default Similarity
