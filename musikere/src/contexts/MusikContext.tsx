import { FC, ReactNode, createContext, useState } from 'react';
import IMusikContext from '../interfaces/IMusikContext';

const MusikContext = createContext<IMusikContext | null>(null);

interface Props {
  children: ReactNode
}

const MusikProvider : FC <Props> = ({children}) => {

  const [musicians, setMusicians] = useState<string[]>(["Elvis", "Michael Jackson"]);

  const addMusician = (newMusician: string) : void => {
    setMusicians( [newMusician, ...musicians] ); // immutability
    
  }

  return (
    <MusikContext.Provider value={{musicians, addMusician}}>
      { children }
    </MusikContext.Provider>
  )
}