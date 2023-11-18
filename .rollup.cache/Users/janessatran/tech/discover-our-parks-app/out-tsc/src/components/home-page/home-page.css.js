import { css } from "lit";
export const styles = css `
  :host {
    --primary-bg-color: #1a2c14;
    --bg-color: #fcfcf4;

    height: 100%;
    display: block;
    margin: 0;
    position: relative;
    width: 100%;
  }

  .main-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }

  .main-container > *:nth-child(1) {
    flex: 0 0 50%;
    border-inline-end: 1px solid black;
  }

  .main-container > *:nth-child(2) {
    flex-grow: 1; /* grow width automatically if needed */
    min-width: 0; /* allow shrinking below default width */
  }

  /**
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
   */
  @media (min-width: 768px) and (max-width: 1024px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }
`;
//# sourceMappingURL=home-page.css.js.map