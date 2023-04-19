import styled, {
  // keyframes
} from 'styled-components';

// const myAnim = `
// 	0% {
// 		transform: scale(2);
// 	}

// 	100% {
// 		transform: scale(1);
// 	}
// `;

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(194, 209, 99, 0.5);
  backdrop-filter: blur(2px);
`;

const Dialog = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  margin: auto;
  padding-top: 25px;
  /* margin-left: auto;
  margin-right: auto;
  margin-right: auto;
  margin-right: auto; */
  padding-left: 20px;
  border: 3px solid;
  border-radius: 12px;
  margin-top: 25px;
  background: rgb(246, 205, 205);
  /* animation: {myAnim} 0.5s ease 0s 1 normal forwards; */
`;

const KindStyle = styled.span`
  color: #cc2048;
`;

const SubBTN = styled.button`
  /* width: 100px;
  margin: 10px;
  margin-left: 0px;
  padding: 5px;
  border-radius: 5px; */
  box-shadow: 0px 0px 22px 0px #d6d8d5;
	background-color:#d6d8d5;
	border-radius:28px;
	border:1px solid #d6d8d5;
	display:inline-block;
	/* cursor:pointer; */
	color: black;
	font-family:'Times New Roman', Times, serif;
	font-size:16px;
  font-weight: 700;
  margin-top: 20px;
	/* padding:12px 23px; */
  padding-top: 12px;
  padding-bottom: 12px;
	text-decoration:none;
	text-shadow:0px 0px 11px #d6d8d5;
  text-align: center;
  width: 200px;
  /* :hover{
    background-color:#5cbf2a;
  } */
  /* :active{
    position:relative;
	top:1px;
  } */
`;

const InputStyle = styled.input`
  background-color: inherit;
  border-radius: 22px;
  width: 200px;
  box-shadow: 2px 2px 5px rgba(66,66,66,.75);
  padding-left: 10px;
  /* margin-right: 20px; */
`;

export {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
  InputStyle,
};