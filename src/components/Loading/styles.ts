import styled, { keyframes } from "styled-components";

const spin3D = keyframes`
    from {
      transform: rotate3d(.5,.5,.5, 720deg);
    }
    to{
      transform: rotate3d(0deg);
    }
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-color: transparent;
`;

const LeoBorderOne = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
  rgba(9,121,12,1) 33%, 
  rgba(0,212,255,1) 100%);
  animation: ${spin3D} 2s linear 0s infinite;
`;

const LeoCoreOne = styled.div`
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
`;

const LeoBorderTwo = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(2,0,36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 33%,
	 rgba(0, 212, 255, 1) 100%
  );
  animation: ${spin3D} 2.2s linear 0s infinite;
`;

const LeoCoreTwo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d2630aa;
  border-radius: 50%;
`;

export { SpinnerBox, LeoBorderOne, LeoCoreOne, LeoBorderTwo, LeoCoreTwo };