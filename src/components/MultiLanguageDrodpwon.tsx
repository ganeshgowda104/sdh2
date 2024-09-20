import { FunctionComponent } from "react";
import styles from "./MultiLanguageDrodpwon.module.css";

export type MultiLanguageDrodpwonType = {
  className?: string;
};

const MultiLanguageDrodpwon: FunctionComponent<MultiLanguageDrodpwonType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.multiLanguagedrodpwon, className].join(" ")}>
      <div className={styles.dropdown}>
        <div className={styles.eng}>Eng</div>
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

export default MultiLanguageDrodpwon;
