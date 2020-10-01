import * as React from 'react';
import { IconProps } from './types';

export const FigmaLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.99999 2.04999H5.52499C4.71037 2.04999 4.04999 2.71037 4.04999 3.52499C4.04999 4.33961 4.71037 4.99999 5.52499 4.99999H6.99999V2.04999ZM6.99999 1.04999H7.99999H9.47499C10.8419 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5641 5.04815 10.9669 5.49999C11.5641 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.8419 9.95 9.47499 9.95C8.9223 9.95 8.41192 9.76884 7.99999 9.46266V9.95L7.99999 11.425C7.99999 12.7919 6.89189 13.9 5.52499 13.9C4.15808 13.9 3.04999 12.7919 3.04999 11.425C3.04999 10.6183 3.43587 9.90184 4.03311 9.44999C3.43587 8.99814 3.04999 8.28163 3.04999 7.475C3.04999 6.66836 3.43588 5.95184 4.03313 5.5C3.43588 5.04815 3.04999 4.33163 3.04999 3.52499C3.04999 2.15808 4.15808 1.04999 5.52499 1.04999H6.99999ZM7.99999 2.04999V4.99999H9.47499C10.2896 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2896 2.04999 9.47499 2.04999H7.99999ZM5.52499 8.94998H6.99999L6.99999 7.4788L6.99999 7.475L6.99999 7.4712V6H5.52499C4.71037 6 4.04999 6.66038 4.04999 7.475C4.04999 8.28767 4.70721 8.94684 5.51914 8.94999L5.52499 8.94998ZM4.04999 11.425C4.04999 10.6123 4.70721 9.95315 5.51914 9.94999L5.52499 9.95H6.99999L6.99999 11.425C6.99999 12.2396 6.33961 12.9 5.52499 12.9C4.71037 12.9 4.04999 12.2396 4.04999 11.425ZM7.99999 7.47206C8.00158 6.65879 8.66135 6 9.47499 6C10.2896 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2896 8.95 9.47499 8.95C8.66135 8.95 8.00158 8.29121 7.99999 7.47794V7.47206Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FigmaLogoIcon;