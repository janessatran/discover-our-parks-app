import { css } from "lit";

export const styles = css`
  .pill-button {
    height: 2.2rem;
    width: max-content;
    border-radius: 30px;
    padding-inline: 1rem 0.5rem;
    border: 1px solid black;
    align-items: center;
    display: flex;
    text-transform: uppercase;
    font-weight: 700;
  }

  .pill-button:hover {
    background-color: orange;
  }

  span {
    margin-inline: 0.5rem;
    font-size: 1.2rem;
    box-sizing: border-box;
    margin-block: -4px 0;
  }

  a {
    text-decoration: none;
  }
`;
