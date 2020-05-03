import React,{useState} from 'react';
import {CREATE_EVENT} from '../actions'
import {DELETE_ALL_EVENT} from '../actions'

const Eventform=({state,dispatch})=>{
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  

  const addEvent= e =>{
  e.preventDefault()
  
  dispatch({
    type: CREATE_EVENT,
    title,
    body 
  })
  setTitle('')
  setBody('')

}

//console.log({state})

const deleteAllEvents =e =>{
  e.preventDefault()
  const result = window.confirm('すべてのイベントをほんとーに削除していいですか');
  if (result) ( dispatch({type:DELETE_ALL_EVENT}))

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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length===0}>すべてのイベントを削除する</button>      
      </form>
    </>
  )
}
export default Eventform