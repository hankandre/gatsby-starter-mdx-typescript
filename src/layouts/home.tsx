import React from 'react';
import { css } from '@emotion/core';
import Nav from '../components/nav';
import Link from '../components/link';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      <Nav>
        <Link activeClassName="active" href="/">
          Home
        </Link>
        <Link activeClassName="active" href="/about">
          About
        </Link>
        <Link activeClassName="active" href="/blog">
          Blog
        </Link>
      </Nav>
      {children}
    </div>
  );
}
