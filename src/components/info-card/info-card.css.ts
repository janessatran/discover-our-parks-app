import { css } from "lit";

export const styles = css`
  :host {
    --primary-text-color-dark: #1a2c14;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .image-container {
    width: 100%;
  }

  .image-container > img {
    height: 100%;
    object-fit: contain;
  }

  .content-container {
    margin: 1rem;
    font-family: "Inter", sans-serif;
    font-color: var(--primary-text-color-dark);
  }

  .nav-container {
    margin-block: 3rem;
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
    .image-container > img {
      object-fit: cover;
      width: 100%;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .image-container > img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
