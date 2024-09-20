import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product1.module.css";

export type Product1Type = {
  className?: string;
  component7?: string;
  year?: string;
  completeSurgicalInstrument?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Product1: FunctionComponent<Product1Type> = ({
  className = "",
  component7,
  year,
  propMinWidth,
  completeSurgicalInstrument,
  prop,
  propWidth,
}) => {
  const year1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.div}>$865.99</div>
      <div className={styles.component7Wrapper}>
        <img className={styles.component7Icon} alt="" src={component7} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.warrantyParent}>
          <div className={styles.warranty}>Warranty</div>
          <div className={styles.year} style={year1Style}>
            {year}
          </div>
        </div>
        <div className={styles.completeSurgicalInstrument}>
          {completeSurgicalInstrument}
        </div>
        <div className={styles.div1} style={div1Style}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default Product1;
