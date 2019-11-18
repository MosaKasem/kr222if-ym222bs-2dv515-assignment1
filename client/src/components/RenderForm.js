import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const RenderForm = ({usr, update, handleKey, fetch}) => {
    return (
        <Fragment>
           <form>
               <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                    </div>
                    <input type='text' value={usr} onChange={update} onKeyPress={handleKey} className='form-control' placeholder='User ID' aria-label='User ID' aria-describedby='basic-addon1' />
                    <button type='submit' onClick={fetch} className='btn btn-warning ml-2'>Search</button>
                </div>
            </form> 
        </Fragment>
    )
}


RenderForm.propTypes = {
    update: PropTypes.func.isRequired,
    handleE: PropTypes.func,
    fetch: PropTypes.func,
    urs: PropTypes.string
}


export default RenderForm