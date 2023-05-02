export function csvToJson(csvFile) {
  return new Promise((resolve, reject) => {
    const url =
      "https://raw.githubusercontent.com/mickey530/BurgerMatter/master/src/burger-data/";
    let csvData;
    const result = [];
    fetch(url + csvFile)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data); // csv 데이터 출력

        // csv 데이터 파싱 및 처리

        csvData = data;

        const lines = csvData.trim().split("\n");

        // 첫 번째 라인은 각 열의 제목이므로 빼고 처리합니다.
        const headers = lines[0].split(",");
        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(",");
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = fields[j];
          }
          result.push(obj);
        }
        resolve(result); // Promise 완료
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Promise 에러
      });
  });
}
