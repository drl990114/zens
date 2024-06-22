import { useContext } from 'react';
import { PuffLoader } from 'react-spinners';
import type { LoaderSizeProps } from 'react-spinners/helpers/props';
import { ThemeContext } from '../Theme';

export const Loading = (props: LoaderSizeProps) => {
  const themeContext = useContext(ThemeContext);
  return <PuffLoader color={themeContext.accentColor} {...props} />;
};
