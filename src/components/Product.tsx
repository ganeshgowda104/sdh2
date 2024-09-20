import { FunctionComponent } from "react";
import styles from "./Product.module.css";

export type ProductType = {
  className?: string;
  component1?: string;
};

const Product: FunctionComponent<ProductType> = ({
  className = "",
  component1,
}) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.div}>$865.99</div>
      <div className={styles.componentIcons}>
        <img className={styles.component1Icon} alt="" src={component1} />
      </div>
      <div className={styles.warrantyDataRows}>
        <div className={styles.warrantyDataPoints}>
          <div className={styles.warranty}>Warranty</div>
          <div className={styles.years}>2 years</div>
        </div>
        <div className={styles.highTemperatureMedicalSteri}>
          High-Temperature Medical Sterilization Unit
        </div>
        <div className={styles.productTitleSpacers}>$25,000 - $40,000</div>
      </div>
    </div>
  );
};

export default Product;
