import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const RenderTable = ({dat, usr, update, handleE, fetch}) => {
    return (
        <Fragment>
           <form>
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={usr} onChange={update} onKeyPress={handleE} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit' onClick={fetch} className='btn btn-warning ml-2'>Search</button>
                </div>
            </form> 
            { dat ? <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Similarity</th>
                            </tr>
                        </thead>
                        { dat.map((item, i) => (
                        <tbody key={`${item.name} ${i}`}>
                            <tr>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <td>{item.rating}</td>
                            </tr>
                            
                        </tbody>
                        ))}
                    </table>
                        : null }
        </Fragment>
    )
}


RenderTable.propTypes = {
    update: PropTypes.func.isRequired,
    handleE: PropTypes.func,
    fetch: PropTypes.func,
    dat: PropTypes.array,
    urs: PropTypes.string
}


export default RenderTable