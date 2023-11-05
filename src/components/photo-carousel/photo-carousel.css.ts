import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
    position: relative;
    /* Defaults */
    border-radius: 4px;
    background: gainsboro;
    cursor: pointer;
    width: 100%;
  }

  .fit {
    position: relative;
    height: 100%;
    width: 100%;
  }

  ::slotted(*) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu-container {
    height: 2.5rem;
    padding: 1rem;
    border-block: 1px solid black;
  }

  .photo-container {
    width: 100%;
    height: 400px;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    height: 100%;
  }
`;
