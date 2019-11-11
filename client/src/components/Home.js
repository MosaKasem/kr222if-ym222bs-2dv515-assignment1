import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [ user, setMovie ] = useState('')
    
    const updateAccordingToUser = (e) => {
        // console.log('event: ', e)
        // console.log('user:  ',user)
        fetchMovies(e)
    }

    const handleEnterKey = (e) => {
        if(e.key === 'Enter') {
            fetchMovies()
        }
    }

    const fetchMovies = async (e) => {
        console.log(e.target.value)
        try {
            const response = await axios.get(`/ratings/${e.target.value}`);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <Fragment>
           <form>
               <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" value={user} onChange={updateAccordingToUser} onKeyPress={handleEnterKey} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="button" className="btn btn-primary">Search</button>
            </form> 
            <ul>
                <li>

                </li>
            </ul>
        </Fragment>
    )
}

export default Home

