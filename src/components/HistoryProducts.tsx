import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HistoryProducts.module.css";

export type HistoryProductsType = {
  className?: string;
  component5?: string;
  year?: string;
  orthopedicSurgicalPositioning?: string;
  prop?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
};

const HistoryProducts: FunctionComponent<HistoryProductsType> = ({
  className = "",
  propAlignSelf,
  propAlignSelf1,
  component5,
  propFlex,
  propOverflow,
  propWidth,
  propWidth1,
  year,
  propMinWidth,
  orthopedicSurgicalPositioning,
  prop,
  propWidth2,
}) => {
  const productStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const component5IconStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propFlex, propOverflow, propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const yearStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={[styles.historyProducts, className].join(" ")}>
      <div className={styles.product} style={productStyle}>
        <div className={styles.div}>$865.99</div>
        <div className={styles.component5Wrapper} style={frameDiv1Style}>
          <img
            className={styles.component5Icon}
            loading="lazy"
            alt=""
            src={component5}
            style={component5IconStyle}
          />
        </div>
        <div className={styles.frameParent} style={frameDiv2Style}>
          <div className={styles.warrantyParent}>
            <h3 className={styles.warranty}>Warranty</h3>
            <h3 className={styles.year} style={yearStyle}>
              {year}
            </h3>
          </div>
          <div className={styles.orthopedicSurgicalPositionin}>
            {orthopedicSurgicalPositioning}
          </div>
          <div className={styles.div1} style={divStyle}>
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryProducts;
