import React from 'react';
import { render } from '@testing-library/react';
import Link from '.';

test('<Link/>', () => {
  const { container } = render(<Link href="/hello">Hello</Link>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      href="/hello"
    >
      Hello
    </a>
  `);
});
