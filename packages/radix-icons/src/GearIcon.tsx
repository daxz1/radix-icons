import * as React from 'react';
import { IconProps } from './types';

export const GearIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.7207 1.30045C7.32368 1.30045 6.97954 1.5753 6.89176 1.9625L6.65368 3.01265C6.27474 3.12285 5.91324 3.27376 5.5743 3.46023L4.66306 2.8858C4.3272 2.67408 3.88951 2.72307 3.60877 3.00381L3.0027 3.60989C2.72196 3.89062 2.67297 4.32831 2.88469 4.66417L3.4593 5.57572C3.27297 5.91459 3.12218 6.27601 3.01208 6.65485L1.962 6.89291C1.57481 6.98069 1.29996 7.32483 1.29996 7.72185L1.29996 8.57897C1.29996 8.97599 1.57481 9.32013 1.962 9.40791L3.01219 9.646C3.12236 10.025 3.27325 10.3865 3.45969 10.7254L2.88527 11.6367C2.67355 11.9725 2.72254 12.4102 3.00328 12.6909L3.60935 13.297C3.89009 13.5778 4.32778 13.6267 4.66364 13.415L5.57493 12.8406C5.91369 13.0269 6.27497 13.1777 6.65368 13.2878L6.89176 14.338C6.97954 14.7251 7.32368 15 7.7207 15H8.57782C8.97484 15 9.31898 14.7251 9.40676 14.338L9.64474 13.2882C10.0238 13.1781 10.3855 13.0272 10.7246 12.8407L11.6355 13.4149C11.9713 13.6267 12.409 13.5777 12.6897 13.2969L13.2958 12.6909C13.5765 12.4101 13.6255 11.9724 13.4138 11.6366L12.8398 10.726C13.0264 10.3868 13.1774 10.0251 13.2876 9.64591L14.3375 9.40791C14.7247 9.32013 14.9995 8.97599 14.9995 8.57897V7.72185C14.9995 7.32483 14.7247 6.98069 14.3375 6.89291L13.2877 6.65493C13.1776 6.27585 13.0267 5.91423 12.8402 5.57517L13.4144 4.66426C13.6261 4.3284 13.5771 3.89071 13.2964 3.60997L12.6903 3.0039C12.4096 2.72316 11.9719 2.67417 11.636 2.88589L10.7252 3.46006C10.3859 3.27345 10.0241 3.12245 9.64474 3.01225L9.40676 1.9625C9.31898 1.5753 8.97484 1.30045 8.57782 1.30045H7.7207ZM5.57046 4.46257C6.09712 4.0935 6.70647 3.83438 7.3652 3.71854L7.7207 2.15043H8.57782L8.93327 3.71831C9.59239 3.83401 10.2021 4.09316 10.7291 4.46238L12.0893 3.60492L12.6954 4.21099L11.8379 5.57127C12.2069 6.09806 12.466 6.70756 12.5817 7.36642L14.1495 7.72185V8.57897L12.5817 8.93441C12.4659 9.59339 12.2067 10.203 11.8375 10.7298L12.6948 12.0898L12.0887 12.6959L10.7285 11.8385C10.2017 12.2075 9.59215 12.4665 8.93327 12.5821L8.57782 14.15H7.7207L7.3652 12.5819C6.70671 12.4661 6.09755 12.2071 5.57102 11.8383L4.21038 12.696L3.6043 12.0899L4.462 10.7293C4.09298 10.2026 3.83391 9.59324 3.71814 8.93449L2.14993 8.57897L2.14993 7.72185L3.71807 7.36634C3.83377 6.70771 4.0927 6.09841 4.46157 5.57175L3.60372 4.21091L4.20979 3.60484L5.57046 4.46257ZM9.67472 8.15011C9.67472 8.99228 8.99202 9.67498 8.14986 9.67498C7.30769 9.67498 6.62499 8.99228 6.62499 8.15011C6.62499 7.30795 7.30769 6.62525 8.14986 6.62525C8.99202 6.62525 9.67472 7.30795 9.67472 8.15011ZM10.5747 8.15011C10.5747 9.48932 9.48906 10.575 8.14986 10.575C6.81065 10.575 5.72501 9.48932 5.72501 8.15011C5.72501 6.81091 6.81065 5.72527 8.14986 5.72527C9.48906 5.72527 10.5747 6.81091 10.5747 8.15011Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default GearIcon;
