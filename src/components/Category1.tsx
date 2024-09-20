import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Category1.module.css";

export type Category1Type = {
  className?: string;
  surgical172487901?: string;
  surgical?: string;
  instruments?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const Category1: FunctionComponent<Category1Type> = ({
  className = "",
  propPadding,
  propGap,
  surgical172487901,
  surgical,
  instruments,
}) => {
  const categoryStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={[styles.category, className].join(" ")}
      style={categoryStyle}
    >
      <div className={styles.surgical172487901Wrapper}>
        <img
          className={styles.surgical172487901Icon}
          loading="lazy"
          alt=""
          src={surgical172487901}
        />
      </div>
      <b className={styles.surgicalInstruments}>
        <p className={styles.surgical}>{surgical}</p>
        <p className={styles.surgical}>{instruments}</p>
      </b>
    </div>
  );
};

export default Category1;
