import { FunctionComponent } from "react";
import TopNav from "../components/TopNav";
import MiddleNav from "../components/MiddleNav";
import BottomNav from "../components/BottomNav";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import HistoryProducts from "../components/HistoryProducts";
import Product from "../components/Product";
import Product1 from "../components/Product1";
import styles from "./HeroSectionV.module.css";

const HeroSectionV: FunctionComponent = () => {
  return (
    <div className={styles.heroSectionV2}>
      <TopNav />
      <section className={styles.contentWrapper}>
        <header className={styles.middleNavParent}>
          <MiddleNav />
          <BottomNav />
        </header>
        <GroupComponent1 />
      </section>
      <FrameComponent />
      <section className={styles.contractRecommendationsWrapper}>
        <div className={styles.contractRecommendations}>
          <h1 className={styles.contractBasedRecommendations}>
            Contract-Based Recommendations
          </h1>
        </div>
      </section>
      <section className={styles.productListingWrapper}>
        <div className={styles.productListing}>
          <div className={styles.productItems}>
            <div className={styles.product}>
              <div className={styles.div}>$865.99</div>
              <div className={styles.sterilizationComponent}>
                <img
                  className={styles.component1Icon}
                  alt=""
                  src="/component-1@2x.png"
                />
              </div>
              <div className={styles.sterilizationWarrantyInfo}>
                <div className={styles.sterilizationWarrantyYears}>
                  <h3 className={styles.warranty}>Warranty</h3>
                  <h3 className={styles.years}>2 years</h3>
                </div>
                <div className={styles.highTemperatureMedicalSteri}>
                  High-Temperature Medical Sterilization Unit
                </div>
                <div className={styles.sterilizationProductSeparato}>
                  $25,000 - $40,000
                </div>
              </div>
            </div>
            <HistoryProducts
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              component5="/component-5@2x.png"
              propFlex="1"
              propOverflow="hidden"
              propWidth="unset"
              propWidth1="unset"
              year="1 year"
              propMinWidth="53px"
              orthopedicSurgicalPositioning="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
              propWidth2="202px"
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
          <div className={styles.headingParent}>
            <div className={styles.heading}>
              <h1 className={styles.allProducts}>All Products</h1>
              <div className={styles.leftContents}>
                <div className={styles.tab}>
                  <button className={styles.tab1}>
                    <div className={styles.allProduct}>All Product</div>
                  </button>
                  <div className={styles.tab2}>
                    <div className={styles.prosthetics}>Prosthetics</div>
                  </div>
                  <div className={styles.tab3}>
                    <div className={styles.surgicalInstruments}>
                      Surgical Instruments
                    </div>
                  </div>
                  <div className={styles.tab2}>
                    <div className={styles.consumables}>Consumables</div>
                  </div>
                  <div className={styles.tab2}>
                    <div className={styles.dressings}>Dressings</div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.seeMore}>See more</div>
                  <img
                    className={styles.regulararrowrightIcon}
                    alt=""
                    src="/regulararrowright-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.product1}>
              <Product component1="/component-1-2@2x.png" />
              <Product1
                component7="/component-7-2@2x.png"
                year="1 year"
                completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
                prop="$2,000 - $4,000"
              />
              <Product1
                component7="/component-6-2@2x.png"
                year="6 months"
                propMinWidth="66px"
                completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
                prop="$300 - $500"
                propWidth="108px"
              />
              <Product1
                component7="/component-5-2@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
                prop="$15,000 - $25,000"
                propWidth="155px"
              />
              <Product1
                component7="/component-6-2@2x.png"
                year="6 months"
                propMinWidth="66px"
                completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
                prop="$300 - $500"
                propWidth="108px"
              />
              <Product component1="/component-1-2@2x.png" />
              <Product1
                component7="/component-5-2@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
                prop="$15,000 - $25,000"
                propWidth="155px"
              />
              <Product1
                component7="/component-7-3@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
                prop="$2,000 - $4,000"
                propWidth="138px"
              />
              <Product1
                component7="/component-7-3@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
                prop="$2,000 - $4,000"
                propWidth="138px"
              />
              <Product component1="/component-1-2@2x.png" />
              <Product1
                component7="/component-5-2@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
                prop="$15,000 - $25,000"
                propWidth="155px"
              />
              <Product1
                component7="/component-6-2@2x.png"
                year="6 months"
                propMinWidth="66px"
                completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
                prop="$300 - $500"
                propWidth="108px"
              />
              <Product1
                component7="/component-6-5@2x.png"
                year="6 months"
                propMinWidth="66px"
                completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
                prop="$300 - $500"
                propWidth="108px"
              />
              <Product1
                component7="/component-5-2@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
                prop="$15,000 - $25,000"
                propWidth="155px"
              />
              <Product1
                component7="/component-7-5@2x.png"
                year="1 year"
                propMinWidth="41px"
                completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
                prop="$2,000 - $4,000"
                propWidth="138px"
              />
              <Product component1="/component-1-2@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.screenshot10512Parent}>
        <img
          className={styles.screenshot10512}
          alt=""
          src="/screenshot-105-12@2x.png"
        />
        <div className={styles.frameChild} />
      </section>
    </div>
  );
};

export default HeroSectionV;
