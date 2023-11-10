import { css } from "lit";

export const styles = css`
  :host {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .main-layout {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    width: 100%;
  }

  .mapboxgl-canvas {
    width: 100%;
    height: 100%;
  }
`;
