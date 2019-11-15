import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
    return(
        <Fragment>
             <Link to="/similarity">
                <button type="button" className=" p-3 ml-0 btn btn-warning"> Calculate the Similarity Score</button>
            </Link>
            <Link to='/weighted'>
                <button type="button" className="p-3 m-4 btn btn-warning">Calculate the Weighted Score</button>
            </Link>
        </Fragment>
    )
}

export default Home