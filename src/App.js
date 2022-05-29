import './App.css';
import Input from './component/Input';

export default function App() {
  return (
    <section className="app__container">
      <h1 className='app__title'>Inputs</h1>
      <section className='app__row'>
        <Input title="<Input />"/>
        <Input title="&:hover"/>
        <Input title="&:focus"/>
      </section>

      <section className='app__row'>
        <Input title="<Input error/>" error/>
        <Input title="&:hover" error/>
        <Input title="&:focus" error/>
      </section>

      <section className='app__row'>
        <Input title="<Input disabled/>" disabled/>
      </section>

      <section className='app__row'>
        <Input title="<Input helperText=”Some interesting text” />" helperText="Some interesting text" />
        <Input title="<Input helperText=”Some interesting text” error/>" helperText="Some interesting text" error/>
      </section>

      <section className='app__row'>
        <Input title="<Input startIcon />" startIcon="phone"/>
        <Input title="<Input endIcon />" endIcon="lock"/>
      </section>

      <section className='app__row'>
        <Input title="<Input size=”sm” />" size="sm"/>
        <Input title="<Input size=”md” />" size="md"/>
      </section>
     
      <section className='app__row'>
        <Input title="<Input fullWidth />" fullWidth/>
      </section>
      
      <section className='app__row'>
        <Input title="<Input multiline row=”4” />" multiline row="4"/>
      </section>

    </section>
  );
}
