import './App.css';
import Input from './component/Input';

export default function App() {
  return (
    <section className="App-container">
      <h1>Hello Input</h1>
      <Input />
      <Input error helperText="This input has an error"/>
      <Input disabled helperText="This input is disabled"/>
    </section>
  );
}
