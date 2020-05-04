import React,{useContext,useState} from 'react';
import {CREATE_EVENT,DELETE_ALL_EVENT,ADD_OPERATION_LOG,DELETE_OPERATION_LOGS} from '../actions'
import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils.js'
const Eventform=()=>{
  const {state,dispatch}=useContext(AppContext)
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const addEvent= e =>{
   e.preventDefault()
  
   dispatch({
     type: CREATE_EVENT,
     title,
     body 
   })
   dispatch({
    type:ADD_OPERATION_LOG,
    description:'イベントを作成しました。',
    oparatedAt:timeCurrentIso8601()
   })

  setTitle('')
  setBody('')

}

//console.log({state})

const deleteAllEvents =e =>{
  e.preventDefault()
  const result = window.confirm('すべてのイベントをほんとーに削除していいですか');
  if (result) {
    dispatch({type:DELETE_ALL_EVENT})
    dispatch({
      type:ADD_OPERATION_LOG,
      description:'イベントをすべて削除しました。',
      oparatedAt:timeCurrentIso8601()
    })
  }    
}
const unCreatable = title==='' || body==='' 

  return(
    <>
      <h4>イベント作成フォーム</h4>
      <form>
       <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length===0}>すべてのイベントを削除する</button>      
      </form>
    </>
  )
}
export default Eventform