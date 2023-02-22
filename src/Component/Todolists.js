import React from 'react'
const Todolists = (props) => {
  return (
    <div>
      <li style={{ margin: "10px",padding:"15px" }}>
        {props.item}
        <span>
          <i className="fa-solid fa-delete-left" style={{ marginRight: "30px", marginLeft: "15%", float: "right",color :"red",fontSize:"30px" }} onClick={
            e => {
              props.deleteitem(props.index)
            }
          }></i>
        </span>

      </li>
    </div>
  )
}

export default Todolists;

