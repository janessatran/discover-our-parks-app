import { css } from "lit";

export const styles = css`
  :host {
    --secondary-text-color: #ff0055;
    --hover-text-color: #00ffaf;
    color: var(--primary-text-color, #fcfcf4);
    display: block;
    width: 100%;
    display: flex;
  }

  .content {
    background-color: var(--primary-bg-color, #1a2c14);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    color: var(--primary-title-color, --primary-text-color);
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  hr.divider {
    border: 0.66px solid var(--primary-text-color, #fcfcf4);
    width: 100%;
  }

  .title,
  .author {
    display: inherit;
  }

  #map {
    overflow: hidden;
  }

  #fly {
    display: block;
    position: relative;
    margin: 0px auto;
    width: 50%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background: #ee8a65;
  }

  .app-title-section {
    font-family: "Anonymous Pro", sans-serif;
    font-size: var(--header-font-size, 5rem);
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 0.8;
  }

  a {
    color: var(--primary-link-color, --primary-text-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--primary-link-hover-color, --hover-text-color);
    font-weight: 800;
  }

  img.placeholder-img {
    width: 100%;
  }

  .mapboxgl-canvas {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
  }

  /* 
  #map {
    width: 100%;
    height: 500px;
    display: block;
  }

  

  .mapboxgl-popup {
    max-width: 280px;
  }

  .mapboxgl-popup-content {
    background-color: white;
    color: black;
    padding: 2.2rem 2rem;
    box-sizing: border-box;
  }

  .mapboxgl-popup-close-button {
    position: absolute;
    top: 4px;
    left: 6px;
  }

  .mapboxgl-canvas-container {
    height: 100%;
  }
*/

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 768px) {
    .content {
      padding: 1rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .app-title-section {
      font-size: 4rem;
    }

    .content {
      padding: 1rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Really narrow smartphones (like Galaxy Fold)
    ##Screen = B/w 280px
  */
  @media (max-width: 280px) {
    .app-title-section {
      font-size: 2rem;
    }
  }
`;
