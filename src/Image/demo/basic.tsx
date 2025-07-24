import { Image } from 'zens';

export default () => {
  const handlePressEnter = () => {
    alert('You pressed enter!');
  };

  return (
    <Image
      width={300}
      height={200}
      src="https://picsum.photos/300/200"
    />
  );
};
