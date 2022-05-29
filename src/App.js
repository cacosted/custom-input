import './App.css';
import Input from './component/Input';

export default function App() {
  return (
    <section className="App-container">
      <h1>Hello Input</h1>
      <Input />
      <Input error helperText="This input has an error"/>
      <Input disabled helperText="This input is disabled"/>
      <Input startIcon="settings"/>
      <Input endIcon="home"/>
      <Input size="sm" multiline row="20"/>
      <Input endIcon="home" size="md" fullWidth/>
    </section>
  );
}
