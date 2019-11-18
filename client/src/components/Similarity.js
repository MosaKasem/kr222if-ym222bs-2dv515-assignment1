import React, { Fragment, useState } from 'react'
import RenderForm from './RenderForm'
import Message from './Message'
import axios from 'axios'

export const Similarity = (e) => {
    const [ user, setUser ] = useState('')
    const [ data, setData ] = useState(null)
    const [ message, setMessage] = useState('')

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
            const response = await axios.get(`/euclidean/similarity/${user}`);
            setData(response.data)
        } catch (err) {
            setUser('')
            setData(null)
            setMessage('Something went wrong, try a number in the input field')
        }
    }

    // Skicka metod setMessage
    return (
        <Fragment>
        { message ? <Message msg={message} />  : null }
            <RenderForm usr={user} update={updateAccordingToUser} handleKey={handleEnterKey} fetch={fetchSimilarity}/>
           {/* <form>
           {message && <Message msg={message} setMessage={setMessage} /> }
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit' onClick={fetchSimilarity} className='btn btn-warning ml-2'>Search</button>
                </div>
            </form>  */}
            { data && <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Similarity</th>
                            </tr>
                        </thead>
                        { data.map((item, i) => (
                        <tbody key={`${item.name} ${i}`}>
                            <tr>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <td>{item.rating}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                    } 
        </Fragment>
    )
}



export default Similarity
