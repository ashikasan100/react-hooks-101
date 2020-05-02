
//action={
//    type: "CREATE_EVENT",
//    title: '2020東京オリンピックのおしらせ',
//    body: '2020東京オリンピックを開催します、つきましては・・・',
//}
// sate = []
// state =[
//   {id:1,title:'タイトル1',body:'ボディー1"'
//   {id:2,title:'タイトル2',body:'ボディー1"'
//   {id:3,title:'タイトル3',body:'ボディー1"'
//  }
//]


const events=(state = [],action) =>{
    switch(action.type){
        case 'CREATE_EVENT':
            const event={title:action.title,body:action.body}
            const lenght=state.length
            const id =lenght===0 ? 1 : state[length-1].id+1
           return [...state,{id,...event}]

        case 'DELETE_EVENT':
            return state

        case 'DELETE_ALL_EVENT':
            return state

        default:
            return state

    }
}
export default events