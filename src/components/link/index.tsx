import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Link({ href, ...props }: any) {
  const internal = /^\/(?!\/)/.test(href);

  return internal ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AniLink fade to={href} {...props} />
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading
    <a href={href} {...props} />
  );
}
