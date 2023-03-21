import styled from "styled-components";

const WrapperDay = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  /* width: 100px; */
  width: 697px;
  /* @media (prefers-color-scheme: light){
    color: black !important;
  }
  @media (prefers-color-scheme: dark){
    color: #ffffff !important;
  } */
`;

const WrapperBTN = styled.div`
  /* display: inline-block; */
  width: 80px;
  /* height: 35px; */
  /* background-color: aqua; */
`;

const BTN = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 70px;
  height: 30px;
  margin: 2px;
  padding: 2px;
  color: black !important;
  background-color: #f4c2c2;
  border-radius: 22px;
`;

const Days = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 80px;
  text-align: center;
  /* color: inherit; */
`;

const Time = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 8px;
  font-weight: 400;
  width: 40px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 50px; */
  /* color: inherit; */
`;

const WaitingWrapper = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 697px;
`;

const LogoPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  width: 600px;
`;

const LogoStudio = styled.p`
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  font-size: 35px;
  color: #986e70;
`;

const LogoSandra = styled.p`
  font-family: 'Philosopher', sans-serif;
  /* font-family: 'Signika Negative', sans-serif; */
  font-weight: 300;
  font-size: 18px;
  margin-top: -8px;
  color: #986e70;

`;

export {
  WrapperDay,
  WrapperBTN,
  Days,
  BTN,
  Time,
  WaitingWrapper,
  LogoPosition,
  LogoStudio,
  LogoSandra
}