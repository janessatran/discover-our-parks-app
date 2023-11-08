import { css } from "lit";

export const styles = css`
  :host {
    --primary-bg-color: #fcfcf4;
    height: 100%;
    display: block;
    margin: 0;
    position: relative;
  }

  main {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }

  /** Transition Effect */
  .right-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: auto;
    left: 100%;
    bottom: auto;
    right: auto;
    background: #7f4a88;
    transition: all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .right-layer.active {
    left: -100%;
  }
  .right-layer--2 {
    background: #c79ecf;
    transition-delay: 0.3s;
  }
  .right-layer--3 {
    background: #fe9191;
    transition-delay: 0.2s;
  }

  /**
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
   */
  @media (min-width: 768px) and (max-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
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
    main {
      display: flex;
      flex-direction: column;
    }
  }
`;
