import React from 'react';

export default function LikebuttonIcon({
  active,
  ...props
}: { active: boolean } & React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width="35.25" height="35.778" viewBox="0 0 32.25 25.778" {...props}>
      <path
        d="M16.125,25.778C7.455,20.631,2.907,15.949,1.043,12.03c-5-10.5,9.274-15.524,15.082-9.325,5.808-6.2,20.078-1.177,15.082,9.325C29.343,15.949,24.8,20.631,16.125,25.778Z"
        transform="translate(0 0)"
        fill={active ? '#ec9e17' : '#bebebe'}
      />
    </svg>
  );
}
