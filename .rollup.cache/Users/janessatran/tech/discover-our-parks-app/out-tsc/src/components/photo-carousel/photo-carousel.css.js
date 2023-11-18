import { css } from "lit";
export const styles = css `
  :host {
    display: inline-block;
    position: relative;
    /* Defaults */
    border-radius: 4px;
    background: var(--bg-color, gainsboro);
    cursor: pointer;
    width: 100%;
    font-family: "Inter", sans-serif;
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
    height: 2rem;
    border-block: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
  }

  .photo-container {
    width: 100%;
    height: 400px;
    cursor: default;
  }

  .buttons {
    display: flex;
    gap: 1.2rem;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    padding-inline-end: 2rem;
    padding-block-end: 0.2rem;
  }

  slot[name="count"] {
    display: inherit;
    flex: 1 1 0;
    padding-inline-start: 1.5rem;
    font-size: 0.6rem;
    cursor: default;
  }

  slot[name="name"] {
    display: inherit;
    justify-content: flex-end;
    padding-inline-end: 1.5rem;
    margin-inline-end: 1.5rem;
    border-right: 1px solid black;
    height: 100%;
    align-items: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    cursor: default;
  }
`;
//# sourceMappingURL=photo-carousel.css.js.map