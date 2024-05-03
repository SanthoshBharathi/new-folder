import { useEffect, useState } from "react"


const Apis =()=>{

const [users, setUsers] = useState([])
const [newUser, setNewUser] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(json => {setUsers(json.products); console.log(json.products);})
  },[])
  return (
    <>
<div className="App">
{(
  <>
  <h1>
    Products
  </h1>
  
    <table>
    {users.map(user => (
        <>
        {<tr>
            <td>{user.id}</td>
            <td>{user.title }</td>
            <td>{user.category}</td>
            <td>{user.price }</td> 
             <td><img src={user.thumbnail} alt="" width={150}/></td> 
        </tr>}
      </>
      ))}
      </table>
  </>
)}
</div></>
  )
}
export default Apis