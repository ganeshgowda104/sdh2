import { FunctionComponent } from "react";
import styles from "./MiddleNav.module.css";

export type MiddleNavType = {
  className?: string;
};

const MiddleNav: FunctionComponent<MiddleNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.middleNav, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <a className={styles.customerConnect}>
          <p className={styles.customer}>Customer</p>
          <p className={styles.customer}>Connect</p>
        </a>
      </div>
      <div className={styles.div}>
        <input
          className={styles.searchForAnything}
          placeholder="Search for anything..."
          type="text"
        />
        <img
          className={styles.regularmagnifyingglassIcon}
          alt=""
          src="/regularmagnifyingglass.svg"
        />
      </div>
      <div className={styles.middleNavInner}>
        <div className={styles.myPageParent}>
          <div className={styles.myPage}>
            <img
              className={styles.shoppingCartIcon}
              alt=""
              src="/shopping-cart.svg"
            />
            <div className={styles.signupboxtoptitle}>
              <a className={styles.a}>2</a>
            </div>
          </div>
          <img
            className={styles.bookmarkHeartIcon}
            alt=""
            src="/bookmark-heart.svg"
          />
          <img
            className={styles.bookmarkHeartIcon}
            alt=""
            src="/account-circle.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
