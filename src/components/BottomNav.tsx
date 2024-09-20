import { FunctionComponent } from "react";
import styles from "./BottomNav.module.css";

export type BottomNavType = {
  className?: string;
};

const BottomNav: FunctionComponent<BottomNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.bottomNav, className].join(" ")}>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <div className={styles.allCategory}>All Category</div>
          <div className={styles.regularcaretdownWrapper}>
            <img
              className={styles.regularcaretdownIcon}
              alt=""
              src="/regularcaretdown-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.homeOrdersWrapper}>
        <div className={styles.homeOrders}>
          <a className={styles.home}>Home</a>
          <div className={styles.orders}>Orders</div>
        </div>
      </div>
      <div className={styles.navigationItems}>
        <img
          className={styles.regularcaretdownIcon}
          alt=""
          src="/regularcaretdown-2.svg"
        />
      </div>
      <div className={styles.navigationItems1}>
        <div className={styles.inventoryManagement}>Inventory Management</div>
      </div>
      <div className={styles.navigationItems}>
        <img
          className={styles.regularcaretdownIcon}
          alt=""
          src="/regularcaretdown-2.svg"
        />
      </div>
      <div className={styles.navigationItems3}>
        <div className={styles.reportsAnalytics}>{`Reports & Analytics`}</div>
      </div>
      <div className={styles.navigationItems}>
        <img
          className={styles.regularcaretdownIcon}
          alt=""
          src="/regularcaretdown-2.svg"
        />
      </div>
      <div className={styles.navigationItems5}>
        <div className={styles.productCatalog}>Product Catalog</div>
      </div>
      <div className={styles.navigationItems6}>
        <div className={styles.supportResources}>{`Support & Resources`}</div>
      </div>
      <div className={styles.permPhoneMsgWrapper}>
        <img
          className={styles.permPhoneMsgIcon}
          alt=""
          src="/perm-phone-msg.svg"
        />
      </div>
      <div className={styles.contactUsWrapper}>
        <a className={styles.contactUs}>Contact us</a>
      </div>
    </div>
  );
};

export default BottomNav;
