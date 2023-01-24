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
        <section>
          <img src="/#" alt="tabImage" />
        </section>
        <section>
          <div>
            <img src="/#" alt="spaceImageAlt" />
            <div>
              <h2>Space images.</h2>
              <p>
                Every day get a fascinating image of our universe. Enjoy
                pictures of stars, planets, moons, galaxies, nebulae, comets and
                more right on your browser tab.
              </p>
              <a href="/#">+ Add to Chrome</a>
            </div>
          </div>
          <div>
            <div>
              <h2>Sun Widget.</h2>
              <p>
                Find out when the sunrise, sunset, first and last light times
                will be precisely at your location. It also shows a countdown in
                an easy-to-read display, so you can stay tuned in your favorite
                sun event - light up your world!.
              </p>
              <a href="/#">+ Add to Chrome</a>
            </div>
            <img src="/#" alt="sunWidgetImage" />
          </div>
          <div>
            <img src="/#" alt="moonWidgetImage" />
            <div>
              <h2>Moon Widget.</h2>
              <p>
                See the current moon phase in real-time, countdowns to moon
                events (New Moon, First Quarter, Full Moon and Last Quarter),
                along with exact illumination percentages. Never miss an
                opportunity for moon gazing anymore.
              </p>
              <a href="/#">+ Add to Chrome</a>
            </div>
          </div>
          <div>
            <div>
              <h2>Inspire Yourself Daily.</h2>
              <p>
                Receive a daily dose of inspiration, insight and positive action
                with our curated list of quotes from the most intelligent people
                in history.
              </p>
              <a href="/#">+ Add to Chrome</a>
            </div>
            <img src="/#" alt="dailyInspirationImage" />
          </div>
          <div>
            <img src="/#" alt="customizableInterfaceImage" />
            <div>
              <h2>Customizable Interface.</h2>
              <p>
                You can customize your experience with Spatium by showing and
                hiding widgets as per your needs. You decide what's on your New
                Tab page - it's up to you!.
              </p>
              <a href="/#">+ Add to Chrome</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <div>Spatium</div>
          <div>
            <div>
              <h2>Be the first to know. No spam.</h2>
              <p>
                Join us and share our passion for the universe!. Stay in the
                loop about new product updates, features and announcements.
              </p>
            </div>
            <div>
              <form>
                <input></input>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <a href="/#">
            <img src="/#" alt="footerImage" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
