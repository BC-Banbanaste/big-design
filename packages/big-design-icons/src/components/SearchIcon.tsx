// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React from 'react';

import { createStyledIcon, IconProps } from '../base';

const Icon = React.memo<Partial<IconProps>>(({ title, theme, ...props }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" strokeWidth="0" {...props}>
    {title ? <title>{title}</title> : null}
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
));

export const SearchIcon = createStyledIcon(Icon);

SearchIcon.displayName = 'SearchIcon';
