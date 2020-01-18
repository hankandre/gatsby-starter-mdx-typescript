import React from 'react';
import { render } from '@testing-library/react';
import Link from '.';

test('<Link/>', () => {
  window.matchMedia = jest.fn(() => true);
  const href = '/test-link';
  const { container } = render(<Link href={href}>Hello</Link>);
  expect(container.firstChild)
    .toBeInTheDocument()
    .toHaveAttribute('href', href);
});
