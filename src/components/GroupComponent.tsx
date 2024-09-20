import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  package2?: string;
  quickOrder?: string;
  fastTrackYourOrdersWithQuick?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  propFlex,
  package2,
  propWidth,
  propFlex1,
  quickOrder,
  propAlignSelf,
  fastTrackYourOrdersWithQuick,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex1,
    };
  }, [propWidth, propFlex1]);

  const quickOrderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <img
        className={styles.package2Icon}
        loading="lazy"
        alt=""
        src={package2}
      />
      <div className={styles.quickOrderParent} style={frameDivStyle}>
        <b className={styles.quickOrder} style={quickOrderStyle}>
          {quickOrder}
        </b>
        <div className={styles.fastTrackYour}>
          {fastTrackYourOrdersWithQuick}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
