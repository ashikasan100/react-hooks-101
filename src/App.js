import React, {useEffect,useState} from 'react'

const App=props=> {

  const [state,setState]=useState(props)
  const {name,price}=state

  //値をいれる、更新がかかった。第2引数なし
  useEffect(()=>{ console.log('This is like componentDidMount or componentDidUpdate.')})
    //画面初期描画。第2引数[]
  useEffect(()=>{ console.log('This is like componentDidMount')},[])
      //名前をかえる。第2引数[name]
  useEffect(()=>{ console.log('This callback is for name only.')},[name])

  return (
    <>
      <p>現在の{state.name}は{state.price}円です。</p>
      <button onClick={()=>setState({...state,price:price+1})}>+1</button>
      <button onClick={()=>setState({...state,price:price-1})}>-1</button>
      <button onClick={()=>setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state,name:e.target.value})}/>
    </>
  )
}

App.defaultProps={
  name:'',
  price:1000
}

export default App;
