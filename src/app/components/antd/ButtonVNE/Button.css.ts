import { style } from '@vanilla-extract/css';

export const test = style({
  color: 'red',
  ':hover': {
    color: 'yellow',
  },
});