/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as SpatiumLogo } from './images/spatiumLogo.svg';

const headerFeaturesStyles = css`
  text-decoration: none;
  color: #76226f;
`;

const headerDivStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const navHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mainSectionHeadingStyles = css`
  text-align: center;
`;

const mainSectionParagraphStyles = css`
  text-align: center;
`;

function App() {
  return (
    <>
      <header>
        <div css={headerDivStyles}>
          <a href="/#">
            <SpatiumLogo />
          </a>
          <nav css={navHeaderStyles}>
            <a href="/#" css={headerFeaturesStyles}>
              Features
            </a>
            <a href="/#">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308719&amp;theme=light"
                alt="Spatium - A space odyssey awaits you with beautiful space images | Product Hunt"
              />
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <h1 css={mainSectionHeadingStyles}>
            A space odyssey <br /> awaits you.
          </h1>
          <p css={mainSectionParagraphStyles}>
            Beautiful space iamges and information of your current sky map
            location on every new tab.
          </p>
        </section>
      </main>
      <footer>my footer</footer>
    </>
  );
}

export default App;
