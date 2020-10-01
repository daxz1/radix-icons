import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVerticalIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.10001 12.5C4.10001 12.7209 4.27909 12.9 4.50001 12.9C4.72092 12.9 4.90001 12.7209 4.90001 12.5L4.90001 2.49999C4.90001 2.27908 4.72092 2.09999 4.50001 2.09999C4.27909 2.09999 4.10001 2.27908 4.10001 2.49999L4.10001 12.5ZM6.10001 12.5C6.10001 12.7209 6.27909 12.9 6.50001 12.9C6.72092 12.9 6.90001 12.7209 6.90001 12.5L6.90001 2.49999C6.90001 2.27908 6.72092 2.09999 6.50001 2.09999C6.27909 2.09999 6.10001 2.27908 6.10001 2.49999L6.10001 12.5ZM8.50001 12.9C8.27909 12.9 8.10001 12.7209 8.10001 12.5L8.10001 2.49999C8.10001 2.27908 8.27909 2.09999 8.50001 2.09999C8.72092 2.09999 8.90001 2.27908 8.90001 2.49999L8.90001 12.5C8.90001 12.7209 8.72092 12.9 8.50001 12.9ZM10.1 12.5C10.1 12.7209 10.2791 12.9 10.5 12.9C10.7209 12.9 10.9 12.7209 10.9 12.5L10.9 2.49999C10.9 2.27908 10.7209 2.09999 10.5 2.09999C10.2791 2.09999 10.1 2.27908 10.1 2.49999L10.1 12.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DragHandleVerticalIcon;
