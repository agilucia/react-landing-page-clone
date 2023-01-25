/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as SpatiumLogo } from './images/spatiumLogo.svg';
import { ReactComponent as CloudsImage } from './images/clouds.svg';

const headerFeaturesStyles = css`
  margin-right: 32px;
  text-decoration: none;
  color: #76226f;
  font-size: 16px;
  font-weight: 600;
`;

const headerDivStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 42px;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

const navHeaderStyles = css`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

const mainSectionHeadingStyles = css`
  font-size: 64px;
  font-weight: 600;
  color: #391f5b;
`;

const mainSectionParagraphStyles = css`
  margin: 32px auto 64px;
  width: 50%;
  color: #76226f;
  text-shadow: none;
  font-size: 21px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.04em;
`;

const topSectionHeaderStyles = css`
  background: linear-gradient(0deg, #e7daed, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  border-bottom: none;
`;

const spaceOdysseySectionStyles = css`
  padding-top: 128px;
  background: linear-gradient(180deg, #e7daed, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  text-align: center;
`;

const descriptiveSectionStyles = css`
  background: #391f5b;
  border: 1px solid #5c4678;
  padding-top: 300px;
  position: relative;
  padding-bottom: 128px;
`;

const footerMainStyles = css`
  background: #391f5b;
  border: 1px solid #5c4678;
  padding: 64px 32px;
`;

const cloudsSvgStyles = css`
  position: absolute;
  top: -86px;
  width: 100%;
  fill: #391f5b;
`;

const spatiumLogoSvgTopStyles = css`
  margin-bottom: -16px;
  margin-left: 16px;
`;

const newTabBoldStyles = css`
  border-bottom: 3px dotted #b384c9;
  font-weight: 700;
`;

const buttonBorderStyles = css`
  margin-bottom: 84px;
  display: inline-flex;
  border-radius: 42px;
  padding: 2px;
  background: linear-gradient(180deg, #d8bfe3 42%, #230b42);
`;

const buttonLgStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 34px;
  font-weight: 700;
  font-size: 21px;
  background: linear-gradient(
    180deg,
    rgba(179, 132, 201, 0.84),
    rgba(57, 31, 91, 0.84) 50%
  );
  box-shadow: 0 2px 2px rgb(57 31 91 / 24%), 0 8px 12px rgb(179 132 201 / 40%);
  border-radius: 42px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.04em;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 40%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);
`;

const buttonChromeImageStyles = css`
  margin-right: 8px;
`;

const containerImagesAndParagraphsStyles = css`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const imagesAndParagraphsSectionsStyles = css`
  margin: 0 32px;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const imageSplitMedia = css`
  width: 40%;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const textSplit = css`
  width: 55%;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const headingsForParagraphsStyles = css`
  font-size: 32px;
  font-weight: 700;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 30%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);
  letter-spacing: 0.04em;
  color: #fff;
  margin-bottom: 24px;
`;

const mainParagraphsStyles = css`
  font-size: 21px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.04em;
  color: #b384c9;
  text-shadow: #1b0835 0 1px 1px;
`;

const paragraphLinkToChromeStyles = css`
  font-size: 21px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.04em;
  color: #b384c9;
  text-shadow: #1b0835 0 1px 1px;
`;

const linkToChromeStyles = css`
  font-size: 21px;
  color: #fff;
  text-decoration: unset;
  margin-top: 16px;
  display: block;
`;

const dividerLeftStyles = css`
  margin: 64px 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0.4),
    rgba(179, 132, 201, 0)
  );
`;

const dividerRightStyles = css`
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(179, 132, 201, 0.4)
  );
  margin: 64px 0;
  width: 100%;
  height: 2px;
`;

const browserMockupImageContainerStyles = css`
  max-width: 100%;
  margin-bottom: -16%;
  margin-left: 16px;
  margin-right: 16px;
  display: block;
`;

const browserMockupTabStyles = css`
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 100%;
`;

const browserMockupImageStyles = css`
  height: 100%;
  width: 100%;
  border: 4px solid #fff;
  box-sizing: border-box;
  border-top: unset;
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 21px;
`;

const browserMockupImageDivStyles = css`
  position: relative;
  height: 600px;
  margin: 0;
  padding: 0;
  border: 0;
`;

const spaceOdysseyDivStyles = css`
  position: relative;
  z-index: 2;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

const footerContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

const footerParagraphStyles = css`
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 32px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #b384c9;
  text-shadow: #1b0835 0 1px 1px;
`;

const footerSectionTwoStyles = css`
  width: 50%;
  text-align: right;
`;

const footerSectionTwoHeadgingStyles = css`
  font-size: 26px;
  margin-bottom: 8px;
  font-weight: 700;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 30%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);
  letter-spacing: 0.04em;
  color: #fff;
`;

const footerEmailInputStyles = css`
  border-radius: 42px;
  padding: 16px 32px;
  width: 200px;
  font-size: 16px;
  font-weight: 700;
  color: #391f5b;
  outline: unset;
  border: 1px solid #b384c9;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 0 0 4px hsl(0deg 0% 100% / 30%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);
`;

const footerButtonStyles = css`
  box-sizing: border-box;
  box-shadow: 0 0 8px rgb(231 218 237 / 40%), 0 8px 24px rgb(57 31 91 / 32%);
  font-family: 'Quicksand', sans-serif;
  margin-left: 16px;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.84) -38.04%,
    rgba(231, 218, 237, 0.84) 31.7%,
    rgba(231, 218, 237, 0.84) 51.83%,
    rgba(216, 191, 227, 0.84)
  );
  border: 1px solid rgba(231, 218, 237, 0.5);
  border-radius: 42px;
  font-size: 16px;
  padding: 16px 28px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.04em;
  color: #391f5b;
`;

const footerLastDivStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <header css={topSectionHeaderStyles}>
        <div css={headerDivStyles}>
          <a href="/#">
            <SpatiumLogo css={spatiumLogoSvgTopStyles} />
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
        <section css={spaceOdysseySectionStyles}>
          <div css={spaceOdysseyDivStyles}>
            <h1 css={mainSectionHeadingStyles}>
              A space odyssey <br /> awaits you.
            </h1>
            <p css={mainSectionParagraphStyles}>
              Beautiful space images and information of your current sky map
              location on every <strong css={newTabBoldStyles}>new tab </strong>
              .
            </p>
            <div css={buttonBorderStyles}>
              <a
                href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&amp;utm_medium=cta-hero"
                css={buttonLgStyles}
              >
                <img
                  src="https://spatium.earth/chrome-logo.dccedd0b.svg"
                  alt="Chrome Web Store"
                  css={buttonChromeImageStyles}
                />
                ADD TO CHROME <span>- IT'S FREE</span>
              </a>
            </div>
            <div css={browserMockupImageContainerStyles}>
              <img
                src="https://spatium.earth/browser-mockup.9d688e12.svg"
                alt="Browser Mockup"
                css={browserMockupTabStyles}
              />
              <div css={browserMockupImageDivStyles}>
                <img
                  src="https://spatium.earth/02.60644d3b.jpg"
                  alt="The giant red nebula (NGC 2014)"
                  css={browserMockupImageStyles}
                />
              </div>
            </div>
          </div>
        </section>
        <section css={descriptiveSectionStyles}>
          <CloudsImage css={cloudsSvgStyles} />
          <div css={containerImagesAndParagraphsStyles}>
            <div css={imagesAndParagraphsSectionsStyles}>
              <img
                src="https://spatium.earth/feature.cfdac386.png"
                alt="spaceImageAlt"
                css={imageSplitMedia}
              />
              <div css={textSplit}>
                <h2 css={headingsForParagraphsStyles}>Space images.</h2>
                <p css={mainParagraphsStyles}>
                  Every day get a fascinating image of our universe. Enjoy
                  pictures of stars, planets, moons, galaxies, nebulae, comets
                  and more right on your browser tab.
                </p>
                <p css={paragraphLinkToChromeStyles}>
                  <a href="/#" css={linkToChromeStyles}>
                    + Add to Chrome
                  </a>
                </p>
              </div>
            </div>
            <div css={dividerLeftStyles} />
            <div css={imagesAndParagraphsSectionsStyles}>
              <div css={textSplit}>
                <h2 css={headingsForParagraphsStyles}>Sun Widget.</h2>
                <p css={mainParagraphsStyles}>
                  Find out when the sunrise, sunset, first and last light times
                  will be precisely at your location. It also shows a countdown
                  in an easy-to-read display, so you can stay tuned in your
                  favorite sun event - light up your world!.
                </p>
                <p css={paragraphLinkToChromeStyles}>
                  <a href="/#" css={linkToChromeStyles}>
                    + Add to Chrome
                  </a>
                </p>
              </div>
              <img
                src="https://spatium.earth/sun-widget.460c42bc.png"
                alt="sunWidgetImage"
                css={imageSplitMedia}
              />
            </div>
            <div css={dividerRightStyles} />
            <div css={imagesAndParagraphsSectionsStyles}>
              <img
                src="https://spatium.earth/moon-widget.460a1bed.png"
                alt="moonWidgetImage"
                css={imageSplitMedia}
              />
              <div css={textSplit}>
                <h2 css={headingsForParagraphsStyles}>Moon Widget.</h2>
                <p css={mainParagraphsStyles}>
                  See the current moon phase in real-time, countdowns to moon
                  events (New Moon, First Quarter, Full Moon and Last Quarter),
                  along with exact illumination percentages. Never miss an
                  opportunity for moon gazing anymore.
                </p>
                <p css={paragraphLinkToChromeStyles}>
                  <a href="/#" css={linkToChromeStyles}>
                    + Add to Chrome
                  </a>
                </p>
              </div>
            </div>
            <div css={dividerLeftStyles} />
            <div css={imagesAndParagraphsSectionsStyles}>
              <div css={textSplit}>
                <h2 css={headingsForParagraphsStyles}>
                  Inspire Yourself Daily.
                </h2>
                <p css={mainParagraphsStyles}>
                  Receive a daily dose of inspiration, insight and positive
                  action with our curated list of quotes from the most
                  intelligent people in history.
                </p>
                <p css={paragraphLinkToChromeStyles}>
                  <a href="/#" css={linkToChromeStyles}>
                    + Add to Chrome
                  </a>
                </p>
              </div>
              <img
                src="https://spatium.earth/quote-widget.1ab7329e.png"
                alt="dailyInspirationImage"
                css={imageSplitMedia}
              />
            </div>
            <div css={dividerRightStyles} />
            <div css={imagesAndParagraphsSectionsStyles}>
              <img
                src="https://spatium.earth/customizable-ui.a78085e0.png"
                alt="customizableInterfaceImage"
                css={imageSplitMedia}
              />
              <div css={textSplit}>
                <h2 css={headingsForParagraphsStyles}>
                  Customizable Interface.
                </h2>
                <p css={mainParagraphsStyles}>
                  You can customize your experience with Spatium by showing and
                  hiding widgets as per your needs. You decide what's on your
                  New Tab page - it's up to you!.
                </p>
                <p css={paragraphLinkToChromeStyles}>
                  <a href="/#" css={linkToChromeStyles}>
                    + Add to Chrome
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer css={footerMainStyles}>
        <div css={footerContainerStyles}>
          <div>
            <img
              src="https://spatium.earth/spatium-white-logo.f2d215ee.svg"
              alt="SpatiumLogoFooter"
            />
            <p css={footerParagraphStyles}>
              Made of stardust from Brazil and Canada.
            </p>
          </div>
          <div css={footerSectionTwoStyles}>
            <div>
              <h2 css={footerSectionTwoHeadgingStyles}>
                Be the first to know. No spam.
              </h2>
              <p css={footerParagraphStyles}>
                Join us and share our passion for the universe!. Stay in the
                loop about new product updates, features and announcements.
              </p>
            </div>
            <div>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  css={footerEmailInputStyles}
                />
                <button css={footerButtonStyles}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div css={footerLastDivStyles}>
          <a href="/#">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308719&amp;theme=light"
              alt="footerImage"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
