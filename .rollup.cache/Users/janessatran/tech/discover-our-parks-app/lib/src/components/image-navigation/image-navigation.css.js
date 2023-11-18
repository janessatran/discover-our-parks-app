import { css } from "lit";
export const styles = css `
  .image-nav-container {
    display: flex;
    flex-direction: row;
    flex: 0 1;
    gap: 2rem;
    margin-block: 2rem;
  }

  .primary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .primary-nav-section > img {
    width: 100%;
    object-fit: cover;
    width: 300px;
    height: 300px;
  }

  .secondary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .secondary-nav-section > img {
    width: 100%;
    object-fit: cover;
    width: 230px;
    height: 230px;
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
`;
//# sourceMappingURL=image-navigation.css.js.map