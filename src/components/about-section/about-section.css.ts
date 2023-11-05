import { css } from "lit";

export const styles = css`
  :host {
    --primary-bg-color: #1a2c14;
    --primary-text-color: #fcfcf4;
    --secondary-text-color: #ff0055;
    --hover-text-color: #00ffaf;
    color: var(--primary-text-color);
    display: block;
    height: 100%;
    width: 100%;
  }

  .content {
    height: 100%;
    background-color: var(--primary-bg-color);
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  hr.divider {
    border: 0.66px solid var(--primary-text-color);
    width: 100%;
  }

  .title,
  .author {
    display: inherit;
  }

  .app-title-section {
    font-family: "Anonymous Pro", sans-serif;
    font-size: 2rem;
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 0.8;
  }

  .image-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    gap: 2rem;
  }

  .primary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .primary-nav-section > img {
    object-fit: contain;
    width: 100%;
  }

  .secondary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .secondary-nav-section > img {
    width: 100%;
    object-fit: contain;
  }

  a {
    font-family: "Lato", sans-serif;
    color: var(--primary-text-color);
    font-size: 0.8rem;
    text-transform: lowercase;
    font-weight: 400;
    text-decoration: none;
  }

  a:hover {
    color: var(--hover-text-color);
    font-weight: 800;
  }

  .link {
    margin-block-end: 0.5rem;
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS */
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    .content {
      padding: 2rem;
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
  @media (min-width: 320px) and (max-width: 480px) {
    .content {
      padding: 2rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }
`;
