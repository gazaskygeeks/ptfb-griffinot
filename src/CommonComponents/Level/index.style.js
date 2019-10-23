import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 4.9rem;
`;

export const CircleLevel = styled.div`
  @media (min-width: 1281px) {
    width: 12rem;
    height: 12rem;
    background: #ffce1c;
    border-radius: 11rem;
    z-index: 1;
  }
  width: 20rem;
  height: 20rem;
  background: #ffce1c;
  border-radius: 11rem;
  z-index: 1;
`;

export const ParagraphLevel = styled.p`
  @media (min-width: 1281px) {
    font-size: 2.5rem;
    margin-top: 4rem;
    font-weight: bolder;
    color: #e8425c;
  }
  font-size: 3.6rem;
  margin-top: 7.6rem;
  font-weight: bolder;
  color: #e8425c;
`;

export const TitleLevel = styled.div`
  @media (min-width: 1281px) {
    width: 45rem;
    height: 8rem;
    background: #205c8b;
    border: 1px solid #a0a0a0;
    box-sizing: border-box;
    border-radius: 82px;
    margin-top: 2rem;
    margin-left: -11rem;
  }
  width: 68rem;
  height: 12.9rem;
  background: #205c8b;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 82px;
  margin-top: 4.2rem;
  margin-left: -9rem;
`;

export const TitleParagraph = styled.p`
  @media (min-width: 1281px) {
    font-size: 2rem;
    margin-left:7.9rem;
    color: #ffffff;
  }
  font-size: 3.7rem;
  margin-left: 3.9rem;
  color: #ffffff;
`;
