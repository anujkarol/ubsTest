import styledComponents, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
      transform: rotate(0deg);
 }
  100% {
      transform: rotate(360deg);
 }
`;

const animationOpacity = keyframes`
  0% { opacity: 0; }
  100% {opacity:0.65}
`;
export const Container = styledComponents.div`
  display: flex;
  justify-content: space-around;
  min-height: 200px;
  position: fixed;
  top:0;
  left:0;
  height:100%;
  background: #000;
opacity:0.65;
  width:100%;
  z-index: 10;
  animation-name: ${animationOpacity};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;
Container.displayName = 'Loader';

export const Spinner = styledComponents.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 0.25rem solid #fff;
  border-top-color: #656565;
  animation: ${spin} 1s infinite linear;
  align-self: center;
`;

Spinner.displayName = 'Spinner';
