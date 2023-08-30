import React from "react";
import styles from "./navdropcon.module.css";
import { Link } from "react-router-dom";

export const Navbropdowncon = ({ data }) => {
    const initialCity = sessionStorage.getItem("cityname")?.toLowerCase()
    return (
        <div className={styles.navdropcon}>
            <div className={styles.dropdown}>
                {data.subtitles.map((subtitle, index) => (
                    <div key={index}>
                        <ul className={styles.navdropconList}>
                            <li>
                                <span>
                                    <Link className={styles.firstLink}>{subtitle.subsubtile}</Link>
                                </span>
                            </li>
                            {subtitle.subsubdata.map((subsubitem, subIndex) => (
                                <li key={subIndex}>
                                    <span>
                                        <Link to={`/products?city=${initialCity}&category=${subtitle.subsubtile}`}>{subsubitem}</Link>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};