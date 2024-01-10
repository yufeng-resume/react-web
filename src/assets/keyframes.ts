import { keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const flash = keyframes`
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.6;
  }

  100% {
    opacity: 0.2;
  }
`;

export const slideAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const rollOut = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

export const swipeOut = keyframes`
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
    opacity: 1;
  }

  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
