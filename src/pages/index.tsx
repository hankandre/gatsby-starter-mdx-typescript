import React from 'react';
import { css } from '@emotion/core';
import HomeLayout from '../layouts/home';
import Illustration from '../components/illustration';
import typography from '../utils/typography';

const Homepage = () => (
  <HomeLayout>
    <main
      css={css`
        display: flex;
        flex: 1;
        padding: ${typography.rhythm(1)} ${typography.rhythm(2)};
        align-items: center;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <h1>Welcome to your new Gatsby site</h1>
      </div>
      <Illustration />
    </main>
    <footer>
      <small>&copy; Someone</small>
    </footer>
  </HomeLayout>
);

export default Homepage;
