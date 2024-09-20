import { FunctionComponent } from "react";
import MultiLanguageDrodpwon from "./MultiLanguageDrodpwon";
import MultiCurrencyDropdown from "./MultiCurrencyDropdown";
import styles from "./TopNav.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.topNav, className].join(" ")}>
      <div className={styles.welcomeToJohnsonJohnsonCWrapper}>
        <div
          className={styles.welcomeToJohnson}
        >{`Welcome to Johnson & Johnson Customer Connect`}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.shrewsburySurgeryCenterWrapper}>
          <div className={styles.welcomeToJohnson}>
            41067, Shrewsbury Surgery Center
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.multiLanguagedrodpwonWrapper}>
          <MultiLanguageDrodpwon />
        </div>
        <div className={styles.multiLanguagedrodpwonWrapper}>
          <MultiCurrencyDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
