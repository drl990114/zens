import { Image } from 'zens';

export default () => {
  const handlePressEnter = () => {
    alert('You pressed enter!');
  };

  return (
    <Image
      width={300}
      height={200}
      src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpe"
    />
  );
};
