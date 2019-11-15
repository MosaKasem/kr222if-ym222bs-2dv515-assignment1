import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'



const Home = () => {
    return(
        <Fragment>
             <Link to="/similarity">
                <button type="button" className=" p-3 m-4 btn btn-info"> Calculate the Similarity Score</button>
            </Link>
            <Link to='/weighted'>
                <button type="button" className="p-3 m-4 btn btn-info">Calculate the Weighted Score</button>
            </Link>
        </Fragment>
    )
}

export default Home