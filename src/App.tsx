import { Button } from './components/ui/button';

const App = () => {
  return (
    <>
      <h1 className="text-7xl font-bold">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log('it worked')}
      >
        click me
      </Button>
    </>
  );
};
export default App;
