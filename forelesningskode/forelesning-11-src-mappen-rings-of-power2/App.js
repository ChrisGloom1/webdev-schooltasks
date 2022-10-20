import { MachineItem } from './components/machines/MachineItem'; // MachineItem må importeres eksplisitt siden den eksporteres eksplisitt
import ElfItem from './components/elfs/ElfItem';

function App() {
  return (
    <div>
      <MachineItem/>
      <hr/>
      <ElfItem name="Galadriel" description="Dronningalv"/> {/* Sender inn props til ElfItem */}
      <ElfItem name="Legolas" description="Flink med bue"/>
      <ElfItem name={ "Elron " + (Math.random() * 100) } description="Veldig seriøs alv"/>{ /* Ved å bruke {} kan man skrive JavaScript */ }
      <ElfItem/>
    </div>
  );
}

export default App;
