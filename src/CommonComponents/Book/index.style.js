import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 2.5rem;
  margin-bottom: 4rem;
  width: 95rem;
`;
export const CardItem = styled.a`
  border: 0.2rem solid #a7a7a7;
  border-radius: 1rem;
  display: flex;
  margin: 5rem 5rem 2rem 5rem;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    margin: 3rem 7rem 0rem 7rem;
  }

  @media screen and (min-width: 1281px) {
    margin: 3rem 30rem 0rem 30rem;
  }
`;
export const Image = styled.img`
  margin: 5rem 19rem 0rem 5rem;
  height: 23.5rem;
  border-radius: 0.5rem;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    margin: 5rem 8rem 5rem 5rem;
  }
`;
export const Title = styled.span`
  font-size: 3.3rem;
  color: #205c88;
  font-weight: 700;
  margin: ${(props) => props.margin || '10rem -7rem 1rem - 7rem'};
  text-align: center;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    padding: 1rem 1rem 0 1rem;
    margin: 4rem 0 0 -6.5rem;
    font-size: 2.4rem;
  }
`;
export const Price = styled.span`
  font-weight: 600;
  font-size: 2.8rem;
  margin: 0.2rem 5rem 2rem -2rem;
  text-align: center;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    font-size: 1.5rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 0 -6.5rem;
  }
`;
export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  color: var(--main-font-color);
  display: flex;
  text-align: justify;
  margin: 12rem 6rem 5rem -34rem;
  @media screen and (min-width: 1024px) and (max-height: 1280px) {
    font-size: 1.5rem;
    line-height: 2.3rem;
    padding: 0rem 2.5rem 0 0;
    margin: 5rem 3rem 5rem -0.3rem;
  }
`;

export const TextOne = styled.div`
  display: flex;
  flex-direction: column;
`;
