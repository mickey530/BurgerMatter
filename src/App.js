import React from "react";
// import { createBrowserRouter } from "react-router-dom";
function App() {
  let csv;

  fetch(
    "https://raw.githubusercontent.com/mickey530/BurgerMatter/master/src/burger-data/mcdonalds.csv"
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data); // csv 데이터 출력

      // csv 데이터 파싱 및 처리

      csv = data;

      const lines = csv.trim().split("\n");
      const result = [];

      // 첫 번째 라인은 각 열의 제목이므로 빼고 처리합니다.
      const headers = lines[0].split(",");
      for (let i = 1; i < lines.length; i++) {
        const fields = lines[i].split(",");
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = fields[j];
        }
        result.push(obj);
        console.log(result);
      }
    })
    .catch((error) => console.log(error));

  return (
    <div>
      <h1>Burger Matter</h1>
    </div>
  );
}

// const App = createBrowserRouter([
//   {
//     path: `${process.env.PUBLIC_URL}/`,
//     element: <Home />,
//   },
//   {
//     path: `${process.env.PUBLIC_URL}/movie/:id`,
//     element: <Detail />,
//   },
// ]);

export default App;
