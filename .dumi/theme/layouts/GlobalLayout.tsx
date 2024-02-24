import { useOutlet, usePrefersColor } from 'dumi';
import { ThemeProvider } from '../../../src';

const GlobalLayout = () => {
  const [color] = usePrefersColor();
  const outlet = useOutlet();

  return (
    <ThemeProvider
      theme={{
        mode: color,
      }}
    >
      {outlet}
    </ThemeProvider>
  );
};

export default GlobalLayout;
