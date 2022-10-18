import ElfItem from "./components/elves/ElfItem";
import DwarfItem from "./components/dwarfs/DwarfItem";
import { MachineItem, getAuthor } from "./components/machines/MachineItem";

function App() {
  return (
    <div>
      <ElfItem name="Galadriel" description="Galadriel er dronning og sånn. Pussy power heheheh" />
      <ElfItem name="Legolas" description="Langt hår som får jentene til å bli fuktige" />
      <ElfItem name="Elron" description="Seriøs alv, lite gøy." />
      <DwarfItem/>
      <MachineItem />
    </div>
    
  );
}

export default App;