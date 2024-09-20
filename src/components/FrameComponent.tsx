import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import Category1 from "./Category1";
import Category from "./Category";
import HistoryProducts from "./HistoryProducts";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroSectionV2Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <img className={styles.frameChild} alt="" src="/group-1981.svg" />
            </div>
            <div className={styles.frameDiv}>
              <GroupComponent
                package2="/package-2.svg"
                quickOrder="Quick Order"
                fastTrackYourOrdersWithQuick="Fast track your orders with quick delivery."
              />
              <GroupComponent
                propFlex="0.9466"
                package2="/upload-file.svg"
                propWidth="unset"
                propFlex1="1"
                quickOrder="Upload a File"
                propAlignSelf="stretch"
                fastTrackYourOrdersWithQuick="Easily upload your order file to place bulk orders."
              />
              <GroupComponent
                propFlex="0.9466"
                package2="/deployed-code-history.svg"
                propWidth="unset"
                propFlex1="1"
                quickOrder="Order History / Reorder"
                propAlignSelf="unset"
                fastTrackYourOrdersWithQuick="Quickly reorder items from past purchases"
              />
              <GroupComponent
                propFlex="0.9466"
                package2="/headphones.svg"
                propWidth="unset"
                propFlex1="1"
                quickOrder="Manage orders"
                propAlignSelf="stretch"
                fastTrackYourOrdersWithQuick="Handle returns, payments, or disputes with live support"
              />
            </div>
          </div>
        </div>
        <div className={styles.categoriesParent}>
          <h1 className={styles.categories}>Categories</h1>
          <div className={styles.itemParent}>
            <div className={styles.item}>
              <div className={styles.category}>
                <div className={styles.prostheticLeg101161071Wrapper}>
                  <img
                    className={styles.prostheticLeg101161071Icon}
                    loading="lazy"
                    alt=""
                    src="/prostheticleg-10116107-1.svg"
                  />
                </div>
                <b className={styles.prostheticsAndOrthotics}>
                  Prosthetics and Orthotics
                </b>
              </div>
              <Category1
                surgical172487901="/surgical-17248790-1.svg"
                surgical="Surgical "
                instruments="Instruments"
              />
              <Category1
                propPadding="27.8px 12px"
                propGap="16px"
                surgical172487901="/ecgmonitor-6552518-1.svg"
                surgical="Cardiovascular "
                instruments="Devices"
              />
              <Category
                bandage27590061="/bandage-2759006-1.svg"
                woundCareAndDressings="Wound Care and Dressings"
              />
              <Category1
                propPadding="27.8px 12px"
                propGap="16px"
                surgical172487901="/inhaler-3077777-1.svg"
                surgical="Respiratory "
                instruments="Devices"
              />
              <Category
                bandage27590061="/vaccine-1119426-1.svg"
                propHeight="105.8px"
                propWidth="105.8px"
                woundCareAndDressings="Consumables and Disposables"
              />
              <div className={styles.arrowButton}>
                <img
                  className={styles.regulararrowleftIcon}
                  alt=""
                  src="/regulararrowleft.svg"
                />
              </div>
            </div>
            <div className={styles.arrowButton1}>
              <img
                className={styles.regulararrowleftIcon}
                alt=""
                src="/regulararrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.yourBrowsingHistoryParent}>
          <h1
            className={styles.yourBrowsingHistory}
          >{`Your Browsing History `}</h1>
          <div className={styles.historyItems}>
            <div className={styles.product}>
              <div className={styles.div}>$865.99</div>
              <div className={styles.component1Wrapper}>
                <img
                  className={styles.component1Icon}
                  loading="lazy"
                  alt=""
                  src="/component-1@2x.png"
                />
              </div>
              <div className={styles.warrantyInfo}>
                <div className={styles.warrantyYears}>
                  <h3 className={styles.warranty}>Warranty</h3>
                  <h3 className={styles.years}>2 years</h3>
                </div>
                <div className={styles.highTemperatureMedicalSteri}>
                  High-Temperature Medical Sterilization Unit
                </div>
                <div className={styles.productSeparator}>$25,000 - $40,000</div>
              </div>
            </div>
            <HistoryProducts
              component5="/component-5@2x.png"
              year="1 year"
              orthopedicSurgicalPositioning="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
            />
            <HistoryProducts
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              component5="/component-6@2x.png"
              propFlex="1"
              propOverflow="hidden"
              propWidth="unset"
              propWidth1="unset"
              year="6 months"
              propMinWidth="86px"
              orthopedicSurgicalPositioning="Adjustable Surgical Torque Wrench (4 Nm)"
              prop="$300 - $500"
              propWidth2="141px"
            />
            <HistoryProducts
              propAlignSelf="unset"
              propAlignSelf1="unset"
              component5="/component-7@2x.png"
              propFlex="unset"
              propOverflow="unset"
              propWidth="305px"
              propWidth1="243.3px"
              year="1 year"
              propMinWidth="53px"
              orthopedicSurgicalPositioning="Complete Surgical Instrument Tray Set"
              prop="$2,000 - $4,000"
              propWidth2="180px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
