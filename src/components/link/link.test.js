import React from 'react';
import { render } from '@testing-library/react';
import Link from '.';

test('<Link/>', () => {
  const href = '/test-link';
  const { container } = render(<Link href={href}>Hello</Link>);
  expect(container.firstChild)
    .toBeInTheDocument()
    .toHaveAttribute('href', href);
});
