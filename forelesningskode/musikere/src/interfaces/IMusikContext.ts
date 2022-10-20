interface IMusikContext {
  musicians: string[];
  addMusician: (newMusician: string) => void;
}

export default IMusikContext;