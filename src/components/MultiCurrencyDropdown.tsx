import { FunctionComponent } from "react";
import styles from "./MultiCurrencyDropdown.module.css";

export type MultiCurrencyDropdownType = {
  className?: string;
};

const MultiCurrencyDropdown: FunctionComponent<MultiCurrencyDropdownType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.multiCurrencydropdown, className].join(" ")}>
      <div className={styles.dropdown}>
        <a className={styles.usd}>USA</a>
        <div className={styles.regularcaretdownWrapper}>
          <img
            className={styles.regularcaretdownIcon}
            alt=""
            src="/regularcaretdown.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiCurrencyDropdown;
