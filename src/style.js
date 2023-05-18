import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  input {
    border-radius: 8px;
    height: 38px;
    max-width: 300px;
    width: 100%;
    margin: 24px 0;
    padding: 4px 8px 4px 8px;
    outline: none;
    border: 1px solid #b6b6b6;

  }

  a {
    font-family: 'poppins', sans-serif;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px;
    color: white;
    background-color: #3d535f;
    border-radius: 6px;
    transition: .4s;
    &:hover {
      background-color: #7f00ff;
    }
  }
`