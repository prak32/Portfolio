
import Routing from './components/Routing';
import DataFetch from './components/DataFetch';
// import ParticlesComponent from './components/ParticlesComponent';

const App = () => {

  return (
    <div>
    <div className='flex flex-col gap-40 bg-gray-100'>
      <Routing/>
      <DataFetch/>
    </div>
    {/* <div>
      <ParticlesComponent/>
    </div> */}
    </div>
  );
};

export default App;
