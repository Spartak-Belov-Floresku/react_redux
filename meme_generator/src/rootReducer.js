const DEFAULT_STATE_MEMES = {
    memes: []
  };
  
const rootReducer = (state = DEFAULT_STATE_MEMES, action) => {
    if (action.type === "CREATE_MEME") {
      return {
        ...state,
        memes: [
          ...state.memes, { ...action.meme }
        ]
      };
    }
    if (action.type === "DELETE_MEME") {
      return {
        ...state,
        memes: state.memes.filter(meme => meme.id !== action.id)
      };
    }
    return state;
  }
  
  export default rootReducer;