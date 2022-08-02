import { csv } from "d3";

const FetchCsv = async (data) => {
  var jsonData = [];

  return csv(data).then((d) => {
    for (let j = 1; j < d.columns.length; j++) {
      jsonData.push({
        name: d.columns[j],
        values: [],
      });
    }

    for (let i = 0; i < d.length; i++) {
      for (let j = 1; j < d.columns.length; j++) {
        jsonData[j - 1].values.push({
          x: parseFloat(d[i]["id"]),
          y: parseFloat(d[i][d.columns[j]]),
        });
      }
    }

    return jsonData;
  });
};

export default FetchCsv;
