import React, { useState } from "react";
import "./Crud.css";
function Crud() {
  const [name, setName] = useState("")
  const [allData, setAllData] = useState([])
  const [show, setShow] = useState(false)
  const [editIndex, setEditIndex] = useState()

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData(newData => [...newData, name])
      setName("")
    }
  }

  const handleDelete = (index) => {
    allData.splice(index, 1)
    setAllData([...allData])
  }

  const handleEdit = (i) => {
    setName(allData[i])
    setShow(true)
    setEditIndex(i)
  }
  const handleUpdate = () => {
    allData.splice(editIndex, 1, name)
    setAllData([...allData])
    setShow(false)
    setName("")
  }

  return (
    <div class="container">

      <h1>CRUD Insert, Update and Delete</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!show ? <button onClick={handleAdd}>Add</button> :
        <button onClick={handleUpdate}>Update</button>}

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            allData.map((val, i) =>
              <tr>
                <td>{val}</td>
                <td> <button className="edit " onClick={() => handleEdit(i)} >Edit</button>
                  <button className="delete ml-2" onClick={() => handleDelete(i)}>Delete</button>

                 
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
export default Crud; 