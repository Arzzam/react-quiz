import styled, { keyframes } from "styled-components";

const LoaderKeyframes = keyframes`
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`;

const LoaderAnimation = styled.div`
  width: 50px;
  height: 24px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0%
      50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100% / 3) 12px;
  background-repeat: no-repeat;
  animation: ${LoaderKeyframes} 1s infinite linear;
`;

const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-6 text-color-medium text-2xl">
      <LoaderAnimation />
      <p>Loading questions...</p>
    </div>
  );
};

export default Loader;
