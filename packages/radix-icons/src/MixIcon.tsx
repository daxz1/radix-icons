import * as React from 'react';
import { IconProps } from './types';

export const MixIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.14921 3.99994C2.14921 2.97777 2.97784 2.14913 4.00002 2.14913C5.02219 2.14913 5.85083 2.97777 5.85083 3.99994C5.85083 5.02212 5.02219 5.85075 4.00002 5.85075C2.97784 5.85075 2.14921 5.02212 2.14921 3.99994ZM4.00002 1.24913C2.48079 1.24913 1.24921 2.48071 1.24921 3.99994C1.24921 5.51917 2.48079 6.75075 4.00002 6.75075C5.51925 6.75075 6.75083 5.51917 6.75083 3.99994C6.75083 2.48071 5.51925 1.24913 4.00002 1.24913ZM5.82034 11.0001L2.49998 12.8369V9.1633L5.82034 11.0001ZM2.63883 8.21157C2.17228 7.95348 1.59998 8.29092 1.59998 8.8241V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21157ZM8.30001 9.00001C8.30001 8.61341 8.61341 8.30001 9.00001 8.30001H13C13.3866 8.30001 13.7 8.61341 13.7 9.00001V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00001ZM9.20001 9.20001V12.8H12.8V9.20001H9.20001ZM13.4432 2.19309C13.6189 2.01736 13.6189 1.73243 13.4432 1.5567C13.2675 1.38096 12.9826 1.38096 12.8068 1.5567L11 3.36351L9.19321 1.55672C9.01748 1.38099 8.73255 1.38099 8.55682 1.55672C8.38108 1.73246 8.38108 2.01738 8.55682 2.19312L10.3636 3.99991L8.55682 5.8067C8.38108 5.98243 8.38108 6.26736 8.55682 6.44309C8.73255 6.61883 9.01748 6.61883 9.19321 6.44309L11 4.6363L12.8068 6.44312C12.9826 6.61886 13.2675 6.61886 13.4432 6.44312C13.6189 6.26738 13.6189 5.98246 13.4432 5.80672L11.6364 3.99991L13.4432 2.19309Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MixIcon;
