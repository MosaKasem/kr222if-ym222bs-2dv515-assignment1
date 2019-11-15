import React, { Fragment, useState } from 'react'
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
            const response = await axios.get(`/ratings/${user}`);
            setData(response.data)
          } catch (err) {
            console.error(err);
          }
    }
    
    return (
        <Fragment>
           <form>
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit'  onClick={fetchSimilarity} className='btn btn-primary'>Search</button>
                </div>
            </form> 
            { data ? <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Similarity</th>
                            </tr>
                        </thead>
                        {data.map(item => (
                        <tbody>
                            <tr>
                        <th key={item.id} scope='row'>{item.id}</th>
                            <td key={item.id+1}> {item.rating}</td>
                            </tr>
                            
                        </tbody>
                        ))}
                    </table>
                        : null }
        </Fragment>
    )
}

export default Similarity
