import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    padding: 2rem 0;
  }

  form {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

export const Timer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  
  .timer-actions-buttons {
    display: flex;
    gap: 1rem;
  }
`;