import styled from 'styled-components';

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`;
export const SubmissionDiv = styled.div`
width: 80%;
max-width: 488px;
height: auto;
border-radius: 30px;
background: #989E8D;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
margin: 5%;
padding: 4% 4%; /* Equivalent to 20px padding */
font-family: 'Gill Sans', sans-serif;
font-weight: 400;
font-size: 24px;
line-height: 30px;
`;
export const CenteredFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

export const LineParagraph = styled.p`
  &:first-child {
    margin-top: 40px;
  }
  margin: 10px 0;
  text-align: left;
  width: 100%;
  font-size: 24px;
  color: #333;
  font-weight: 500;

  span {
    width: 110px;
    display: inline-flex;
    font-weight: 300;
  }

  strong {
    margin-left: 20px;
    font-weight: 600;
  }
`;
