import { useState, ChangeEvent } from "react";
import ImageUploadService from "./services/ImageUploadService";

function App() {

  const [img, setImg] = useState<File|null>(null);
  const setImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target;
    if(files!=null){
      const file = files[0];
      setImg(file);
    }
  }

  const uploadImage = () => {
    if(img!=null){
      ImageUploadService.uploadImage(img);
    }
  }

  return (
    <div>

      <header>
        <h1>Bildeopplastning</h1>
      </header>

      <main>
        <label>Velg bilde</label>
        <input onChange={setImageHandler} type="file"/>
        <button onClick={uploadImage}>Last opp</button>
      </main>

      <footer></footer>

    </div>
  );
}

export default App;
