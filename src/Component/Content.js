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
  const [burger0, setBurger0] = useState({});
  const [burger1, setBurger1] = useState({});

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

  /** 브랜드 선택 값 세팅*/
  const selectBrand = (e) => {
    switch (e.target.dataset.num) {
      case "0":
        setBrand0(e.target.value);
        setBurger0(data[e.target.value][0]);
        break;
      case "1":
        setBrand1(e.target.value);
        setBurger1(data[e.target.value][0]);
        break;
    }
  };
  /** 햄버거 선택 값 세팅*/
  const selectBurger = (e) => {
    switch (e.target.dataset.num) {
      case "0":
        let selectedBurger0 = data[brand0].find((b) => b.id == e.target.value);
        setBurger0(selectedBurger0);
        console.log(burger0);
        break;
      case "1":
        let selectedBurger1 = data[brand1].find((b) => b.id == e.target.value);
        setBurger1(selectedBurger1);
        console.log(burger1);
        break;
    }
  };

  return (
    <div>
      <div className={styles.brand}>
        <select
          onChange={selectBrand}
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
          onChange={selectBrand}
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
        <select
          className={styles.selectBox}
          onChange={selectBurger}
          data-num="0">
          {option0
            ? option0.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))
            : false}
        </select>
        <select
          className={styles.selectBox}
          onChange={selectBurger}
          data-num="1">
          <option value="none" disabled>
            햄버거 선택
          </option>
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
        <BurgerInfo
          img={burger0.imgpath}
          kcal={burger0.kcal}
          price={burger0.price}
        />
        {/* <div className={infoStyle.comparison}>
            <div className={infoStyle.imgbox}></div>
            <ul>
              <li>칼로리</li>
              <li>가격</li>
            </ul>
          </div> */}
        <BurgerInfo
          img={burger1.imgpath}
          kcal={burger1.kcal}
          price={burger1.price}
        />
      </div>
    </div>
  );
}

export default Content;
