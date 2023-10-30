import React from 'react'
import { Table } from 'react-bootstrap'
import { Axios } from '../../api/Axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Bars.css'

const TableShow = (props) => {
    // HANDLE DELETE
    async function handleDelete(id){
      try{
          const res = await Axios.delete(`${props.delete}/${id}`)
          const DeleTe = props.data.filter(item=>item.id != id)
          props.setUsers(DeleTe)
      }catch (err){
         console.log(err)
      }
  }
  
// MAPING 
  const HeaderShow = props.header.map(item => <th>{item.name}</th>)
  const dataShow = props.data.map((item,key) => (
  <tr key={key}>
    { props.header.map((item2,key2) =>(
      <td key={key2}>
        { item2.key === 'image' ?  <img className='add-image' src={item[item2.key]}/> : item[item2.key] === "1995"
        ? "Admin"
        : item[item2.key] === "2001"
        ? "User"
        : item[item2.key] === "1996"
        ? "Writer"
        : item[item2.key] === "1999"
        ? "Product Manger"
        : item[item2.key]
      }</td>
      
    ))}
      <td>
        {
          item.role == '1995' ?
          <div>
            <Link to={`${item.id}`}>
              <FontAwesomeIcon cursor={'pointer'} icon={faPenToSquare} />
            </Link>
          </div> : 
          <div className='d-flex align-items-center gap-3'>
            <Link to={`${item.id}`}>
              <FontAwesomeIcon cursor={'pointer'} icon={faPenToSquare} />
            </Link>
              <FontAwesomeIcon onClick={()=>handleDelete(item.id)} cursor={'pointer'} color='red' icon={faTrash} />
          </div>
        }
    </td>
  </tr>
  )
  )
  
  return (
    <Table striped>
          <thead>
            <tr>
              {HeaderShow}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {dataShow}
          </tbody>
    </Table >
  )
}

export default TableShow