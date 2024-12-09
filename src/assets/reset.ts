import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --main-color: #f4a000;
  --text-color: #422612;
  --point-color:#f09dc1;
  --bg-color:#f1e1bb;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
    "Montserrat", sans-serif,
		'Pretendard Variable',
		Pretendard,
		-apple-system,
		BlinkMacSystemFont,
		system-ui,
		Roboto,
		'Helvetica Neue',
		'Segoe UI',
		'Apple SD Gothic Neo',
		'Noto Sans KR',
		'Malgun Gothic',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		sans-serif;
    -webkit-touch-callout:none;
    user-select:none;    
    -webkit-user-select:none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);

  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;

  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html{
    height: 100%;
    overscroll-behavior: none;
    -ms-scroll-chaining:none;
  }
  body {
    overflow-x: hidden;
    height: 100%;
    line-height: 1;
    min-height: 100dvh;
    /* background-color: var(--bg-color); */
  }

  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button{
    background-color: #fff;
    border:none;
    cursor: pointer;
  }
// router-transition
  .page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    transition: all 3s;
  }
  .page-transition-wrapper {
    position: relative;
    height: 100%;
  }
  .page-transition--push-enter {
    z-index: 1;
    transform: translateX(100%);
  }
  .page-transition--push-enter-active {
    transform: translateX(0);
    transition: transform 1s;
  }
  .page-transition--push-exit {
    z-index: 0;
    transform: translateX(0);
  }
  .page-transition--push-exit-active {
    transform: translateX(-100%);
    transition: transform 1s;
  }
  .page-transition--pop-enter {
    z-index: 1;
    transform: translateX(-100%);
  }
  .page-transition--pop-enter-active {
    transform: translateX(0);
    transition: transform 1s;
  }
  .page-transition--pop-exit {
    transform: translateX(0);
  }
  .page-transition--pop-exit-active {
    transform: translateX(100%);
    transition: transform 1s;
  }

`;
