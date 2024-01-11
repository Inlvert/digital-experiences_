import React from "react";
import styles from './LogoBar.module.scss'
import { ReactComponent as LogoIpsum1 } from "./svg/logoipsum1.svg";
import { ReactComponent as LogoIpsum2 } from "./svg/logoipsum2.svg";
import { ReactComponent as LogoIpsum3 } from "./svg/logoipsum3.svg";
import { ReactComponent as LogoIpsum4 } from "./svg/logoipsum4.svg";
import { ReactComponent as LogoIpsum5 } from "./svg/logoipsum5.svg";

function LogoBar() {
  return <div className={styles.wrapper}>
    <LogoIpsum1 />
    <LogoIpsum2 />
    <LogoIpsum3 />
    <LogoIpsum4 />
    <LogoIpsum5 />
  </div>;
}

export default LogoBar