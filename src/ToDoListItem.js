import React from "react";

export default function ToDoListItem({reverseStatus, removeItem, k, item, index}) {
  var todoClass = item.done ? "done" : "undone",
         imgSrc = item.done ? "../ok.png" : "../no.png";

    function closeClick(){
        removeItem(index);
    }

    function callReverseStatus(){
        console.log(index)
        reverseStatus(index);
    }

  return (
    <li key={index} id={k} className="list-group-item">
      <div className={todoClass}>
        <span onClick={callReverseStatus} style={{marginRight: "5px",cursor: "pointer"}}>
            <img style={{width: "15px", height: "15px"}} src={imgSrc} alt="Ok"></img>
        </span>
        <span style={{display: "inline-block", width:"90%"}}>{item.value}</span>
        <span style={{cursor: "pointer"}} onClick={closeClick}>
            <img style={{width: "15px", height: "15px"}} src="../x.png" alt="Remove"></img>
        </span>
      </div>    
    </li>
  );
}
