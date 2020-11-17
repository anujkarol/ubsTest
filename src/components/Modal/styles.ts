import styledComponents, { keyframes } from 'styled-components';

import styledComponentsTS from 'styled-components-ts';

const animationOpacity = keyframes`
  0% { opacity: 0; }
  100% {opacity:1}
`;
const animationOpacityBackDrop = keyframes`
  0% { opacity: 0; }
  100% {opacity:1}
`;

const animationTranslate = keyframes`
  0% { transform: translate(0px, -100px) }
  100% {transform: translate(0px, 0px)}
`;

export const Container = styledComponents.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${animationOpacity};
  animation-duration: 0.2s;
  animation-iteration-count: 1;
`;
Container.displayName = 'Container';

export const ContentWrapper = styledComponents.div`
  background-color: #fefefe;
  padding: 48px;
  border: 1px solid #888;
  border-radius: 5px;
  min-height: 100px;
  width: 600px;
  max-height: calc(100vh - 10px);
  position: relative;
  text-align: center;
  animation-name: ${animationTranslate};
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  box-sizing: border-box;
  z-index:2

`;
ContentWrapper.displayName = 'ContentWrapper';

export const BackdropContainer = styledComponents.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4);
  opacity:1;
  animation-name: ${animationOpacityBackDrop};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
`;
BackdropContainer.displayName = 'BackdropContainer';

export const Title = styledComponentsTS<{ style: any }>(styledComponents.h1)`
  margin-bottom:32px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  text-align:center;
  margin-top: 0;
`;

Title.displayName = 'Title';
const CloseStyle = `
position: absolute;
top: 24px;
right: 24px;
font-size: 20px;
cursor:pointer;
`;
export const Close = styledComponentsTS<{ isCloseIcon: boolean }>(
  styledComponents.i,
)`
${({ isCloseIcon }) => isCloseIcon && CloseStyle}
`;
Close.displayName = 'Close';
