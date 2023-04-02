
import './App.css';
import Videos from "./pages/Videos"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Videos 
          likes={111}
          messages={222}
          shares={333}
          name ="Loonardo_Cuenca"
          description="Brecker o goleiro"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Videos 
          likes={444}
          messages={555}
          shares={661}
          name ="Jheni"
          description="Gato Pulando"
          music="Outra Musica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        

      </div>
    </div>
  );
}

export default App;
