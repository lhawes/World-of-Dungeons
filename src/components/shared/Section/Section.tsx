import * as React from 'react';
import { css } from 'emotion';

const sectionCss = css`
  margin: 10px 0;
  padding: 0 10px;
`;

export const Section: React.FC = ({ children }) => {
  return (
    <section className={sectionCss}>
      { children }
    </section>
  );
}
