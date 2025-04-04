import * as React from "react";

// By: fa6-solid
// See: https://v0.app/icon/fa6-solid/cart-flatbed
// Example: <IconFa6SolidCartFlatbed width="30px" height="24px" style={{color: "#000000"}} />

export const Cart = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v288c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h197.4c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80c0-44.2-35.8-80-80-80zm160 80v192c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96v144c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V32h-96c-26.5 0-48 21.5-48 48"
    />
  </svg>
);
