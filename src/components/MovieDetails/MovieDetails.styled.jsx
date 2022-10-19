import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  padding: 10px;
  gap: 15px;

  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

export const Params = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const Topic = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
