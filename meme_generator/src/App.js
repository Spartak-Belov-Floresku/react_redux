import './App.css';
import FormMeme from './FormMeme';
import Meme from './Meme';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  const createMeme = (newMeme) =>{
    dispatch({type: "CREATE_MEME", meme: newMeme});
  }

  const deleteMeme = (id) => {
    dispatch({type: "DELETE_MEME", id});
  }

  const memeComps = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ));

  return (
    <div className="App">
      <FormMeme createMeme={createMeme} />
      <hr />
      {memeComps}    
    </div>
  );
}

export default App;
