import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.glowingSynapseMultiColoredParent}>
        <img
          className={styles.glowingSynapseMultiColoredIcon}
          alt=""
          src="/glowingsynapsemulticoloredneuralcommunicationabstractdesigngeneratedbyai-1@2x.png"
        />
        <div className={styles.bannerBackground} />
        <h2 className={styles.enhancingPrecisionAnd}>
          Enhancing Precision and Speed in Patient Care
        </h2>
      </div>
      <div className={styles.revolutionaryAiDrivenDiagnoParent}>
        <h1 className={styles.revolutionaryAiDrivenDiagnoContainer}>
          <p
            className={styles.revolutionaryAiDrivenDiagno}
          >{`Revolutionary AI-Driven Diagnostics `}</p>
          <p className={styles.revolutionaryAiDrivenDiagno}>
            in Medical Devices
          </p>
        </h1>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.bannerBackground} />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <img
                className={styles.botty1Icon}
                loading="lazy"
                alt=""
                src="/botty-1@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.ameliaParent}>
                  <h3 className={styles.amelia}>Amelia</h3>
                  <div className={styles.online}>Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
