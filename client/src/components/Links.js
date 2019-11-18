import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



const Links = () => {
    return(
        <Fragment>
            <div className='d-flex'>
                <div className='order-2'>
                    <h4>Euclidean search</h4>
                    <Link to="/euclideansim">
                        <button type="button" className=" p-3 ml-0 btn btn-warning"> Calculate the Similarity Score</button>
                    </Link>
                    <Link to='/euclideanweight'>
                        <button type="button" className="p-3 m-4 btn btn-warning">Calculate the Weighted Score</button>
                    </Link>
                </div>  
            <div className='order-1'>
                <h4>Pearson search</h4>
                <Link to="/pearsonsim">
                    <button type="button" className=" p-3 ml-0 btn btn-warning"> Calculate the Similarity Score</button>
                </Link>
                <Link to='/pearsonweight'>
                    <button type="button" className="p-3 m-4 btn btn-warning">Calculate the Weighted Score</button>
                </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Links