import * as React from 'react';
import { IconProps } from './types';

export const AlignStartIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.49953 1.05005C1.251 1.05005 1.04953 1.25152 1.04953 1.50005C1.04953 1.74858 1.251 1.95005 1.49953 1.95005L13.4995 1.95005C13.7481 1.95005 13.9495 1.74858 13.9495 1.50005C13.9495 1.25152 13.7481 1.05005 13.4995 1.05005H1.49953ZM5.99997 11V4.00002H8.99997V11H5.99997ZM4.99997 3.75002C4.99997 3.33581 5.33576 3.00002 5.74997 3.00002H9.24997C9.66418 3.00002 9.99997 3.33581 9.99997 3.75002V11.25C9.99997 11.6642 9.66418 12 9.24997 12H5.74997C5.33576 12 4.99997 11.6642 4.99997 11.25V3.75002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignStartIcon;
