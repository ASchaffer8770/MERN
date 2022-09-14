import React from 'react'

const CreateShowProducts = () => {
  return (
    <div>
        <div>Create Products Form Here</div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Title:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text-area" />
                </div>
                <input type="button" value="Submit" className='btn btn-primary'/>
            </form>
        </div>
        <div>Show All Products Here</div>
    </div>
  )
}

export default CreateShowProducts