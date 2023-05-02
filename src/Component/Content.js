import React, { useState, useEffect } from "react";
import { csvToJson } from "../getCsvData.js";
import loadingCss from "./style/Loading.module.css";
import styles from "./style/Content.module.css";
import infoStyle from "./style/Info.module.css";
import BurgerInfo from "./BurgerInfo";

function Content() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [brand0, setBrand0] = useState("");
  const [brand1, setBrand1] = useState("");
  const [option0, setOption0] = useState([]);
  const [option1, setOption1] = useState([]);

  useEffect(() => {
    setOption0(data[brand0]);
  }, [brand0]);

  useEffect(() => {
    setOption1(data[brand1]);
  }, [brand1]);

  useEffect(() => {
    /* get csv data */
    const csvList = ["mcdonalds.csv", "burgerking.csv"];
    const apiData = [];

    Promise.all(csvList.map((csv) => csvToJson(csv)))
      .then((results) => {
        results.forEach((data) => {
          apiData.push(data);
        });
        setData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    console.log(apiData);
  }, []);

  if (loading) {
    return <h1 id={loadingCss.loading}>Loading...</h1>;
  }

  /** 브랜드 선택값 세팅*/
  const onSelect = (e) => {
    switch (e.target.dataset.num) {
      case "0":
        setBrand0(e.target.value);
        // console.log(e.target.dataset.num + " : " + e.target.value);
        // data[e.target.value].map((b) => {
        //   console.log(b.id + " : " + b.name);
        // });
        console.log(brand0);
        console.log(option0);
        break;
      case "1":
        setBrand1(e.target.value);
        console.log(e.target.dataset.num + " : " + e.target.value);
        break;
    }
  };

  return (
    <div>
      <div className={styles.brand}>
        <select
          onChange={onSelect}
          defaultValue="none"
          className={styles.selectBox}
          data-num="0">
          <option value="none" disabled>
            브랜드 선택
          </option>
          <option value="0">맥도날드</option>
          <option value="1">버거킹</option>
        </select>
        <select
          onChange={onSelect}
          defaultValue="none"
          className={styles.selectBox}
          data-num="1">
          <option value="none" disabled>
            브랜드 선택
          </option>
          <option value="0">맥도날드</option>
          <option value="1">버거킹</option>
        </select>
      </div>

      <div className={styles.brand}>
        <select className={styles.selectBox}>
          {option0
            ? option0.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))
            : false}
        </select>
        <select className={styles.selectBox}>
          {option1
            ? option1.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))
            : false}
        </select>
      </div>

      <div className={styles.brand}>
        <BurgerInfo />
        <div className={infoStyle.comparison}>
          <ul>
            <li>가격</li>
            <li>칼로리</li>
          </ul>
        </div>
        <BurgerInfo />
      </div>
    </div>
  );
}

export default Content;
