import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Category.module.css";

export type CategoryType = {
  className?: string;
  bandage27590061?: string;
  woundCareAndDressings?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const Category: FunctionComponent<CategoryType> = ({
  className = "",
  bandage27590061,
  propHeight,
  propWidth,
  woundCareAndDressings,
}) => {
  const bandage27590061IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={[styles.category, className].join(" ")}>
      <div className={styles.bandage27590061Wrapper}>
        <img
          className={styles.bandage27590061Icon}
          loading="lazy"
          alt=""
          src={bandage27590061}
          style={bandage27590061IconStyle}
        />
      </div>
      <b className={styles.woundCareAnd}>{woundCareAndDressings}</b>
    </div>
  );
};

export default Category;
