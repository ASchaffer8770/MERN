import React from 'react'


const ShowAllComponent = (props) => {


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((eachProduct, i)=>{
                        return(
                            <tr key={i}>
                                <td> {eachProduct.title}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAllComponent