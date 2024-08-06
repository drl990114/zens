import ErrorTip from './ErrorTip';
import Img, { ImgProps as RcImageProps } from './Img';

import { Loading3QuartersOutlined } from '../Icons';

interface ImageProps extends RcImageProps {
  errorTip?: string;
}

const ImageView = (props: ImageProps) => {
  const { errorTip = 'load error' } = props;
  return (
    <Img
      loader={<Loading3QuartersOutlined spin size={40} />}
      unloader={<ErrorTip errortip={errorTip} />}
      {...props}
    />
  );
};

export default ImageView;
