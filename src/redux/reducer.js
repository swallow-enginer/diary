import DiaryConst from "../util/DiaryConst";

// ステート初期化用
const initialState = {
  user_id     : 1
  , user_name : "未入力"
}
 
// リデューサーを定義 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DiaryConst.ACTION_TYPE.SET_USER:
      return {
          user_id: action.user_id
          , user_nm: action.user_nm
    };

    default:
      return state
  }
}