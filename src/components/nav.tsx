import React from 'react';
import { css } from '@emotion/core';
import typography from '../utils/typography';
import Link from './link';

type Props = {
  children: React.ReactNode;
};

export default function Nav({ children }: Props) {
  return (
    <header
      css={theme => css`
        display: flex;
        justify-content: space-between;
        padding: ${typography.rhythm(1)} ${typography.rhythm(2)};
        a.active {
          text-decoration-color: ${theme.colors.primary};
        }
      `}
    >
      <Link href="/">Home</Link>
      <nav
        css={css`
          a {
            margin-left: ${typography.rhythm(1)};
          }
        `}
      >
        {children}
      </nav>
    </header>
  );
}
