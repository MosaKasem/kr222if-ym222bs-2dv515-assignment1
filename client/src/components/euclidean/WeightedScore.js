import React, { Fragment, useState } from 'react'
import RenderForm from '../RenderForm'
import Message from '../Message'
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
            fetchWightedScore(e)
        }
    }

    const fetchWightedScore = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`/euclidean/weighted/${user}`);
            setData(response.data)
          } catch (err) {
            setUser('')
            setData(null)
            setMessage('Something went wrong, try a number in the input field')
          }
    }
    
    return (
        <Fragment>
        { message ? <Message msg={message} />  : null}
            <RenderForm usr={user} update={updateAccordingToUser} handleKey={handleEnterKey} fetch={fetchWightedScore} />
            { data ? <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th scope='col'>Movie</th>
                                <th scope='col'>Weighted Score</th>
                            </tr>
                        </thead>
                        { data.map((item, i) => (
                        <tbody key={`${item.name} ${i}`}>
                            <tr>
                                <th>{item.movie}</th>
                                <td>{item.weightedScore}</td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                        : null }
        </Fragment>
    )
}

export default Weighted