import { Input } from 'zens';

export default () =>  {
  const handlePressEnter = () => {
    alert('You pressed enter!');
  }

  return <Input placeholder='press enter' onPressEnter={handlePressEnter}/>
}
