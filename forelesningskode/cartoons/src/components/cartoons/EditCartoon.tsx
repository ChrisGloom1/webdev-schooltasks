import { useState, ChangeEvent } from "react";
import ICartoon from "../../interfaces/ICartoon";
import CartoonService from "../../services/CartoonService";

const EditCartoon = () => {

  const [id, setId] = useState<string>("id not set");
  const [title, setTitle] = useState<string>("title not set");
  const [ageRestriction, setAgeRestriction] = useState<string>("age not set");

  const getCartoonFromService = async () => {
    const cartoon = await CartoonService.getCartoonById(parseInt(id));
    setTitle(cartoon.title);
    setAgeRestriction(cartoon.ageRestriction);
  }
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
    switch( name ){
      case "id": 
        setId(value);
      break;
      case "title":
        setTitle(value);
      break;
      case "ageRestriction":
        setAgeRestriction(value);
      break;
    }
  }

  const editCartoon = () => {
    const editedCartoon = {
      id: parseInt(id),
      title: title,
      ageRestriction: parseInt(ageRestriction)
    };
    CartoonService.putCartoon(editedCartoon);
  }

  return (
    <section>
      <h2>Rediger muvien din</h2>
      <div>
        <label>Identifiktionet</label>
        <input name='id' onChange={changeHandler} type="text" value={id}/>
        <button onClick={getCartoonFromService}>Hent tæggnfilm</button>
      </div>
      <div>
        <label>Tittelittel</label>
        <input name='title' onChange={changeHandler} type="text" value={title}/>
      </div>
      <div>
        <label>Storhetsgrense</label>
        <input name='ageRestriction' onChange={changeHandler} type="text" value={ageRestriction}/>
      </div>
      <button onClick={editCartoon}>Lagre endringzene vettu</button>

    </section>
  )
}

export default EditCartoon;