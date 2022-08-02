import { csv } from "d3";

const FetchCsv = async (data) => {
  let csvData = csv(data);

  var jsonData = [];

  return csvData.then((d) => {
    let columns = Object.keys(d[0]);

    for (let i = 0; i < d.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        d[i][columns[j]] = parseFloat(d[i][columns[j]]);

        if (j > 1) {
          d[i][columns[j]] += d[i][columns[j - 1]];
        }
      }
    }

    for (let j = 1; j < columns.length; j++) {
      jsonData.push({
        name: columns[j],
        values: [],
      });
    }

    for (let i = 0; i < d.length; i++) {
      for (let j = 1; j < columns.length; j++) {
        jsonData[j - 1].values.push({
          x: d[i]["id"],
          y0: j === 1 ? 0 : d[i][columns[j - 1]],
          y1: d[i][columns[j]],
        });
      }
    }

    return jsonData;
  });
};

export default FetchCsv;
