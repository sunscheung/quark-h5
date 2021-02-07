<template>
  <div>
    <p style="font-size: 14px; color: #606266">数据配置:</p>
    <br />
    <div id="x-spreadsheet-demo" class="qk-table" ref="shape"></div>
  </div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from "x-data-spreadsheet/src/locale/zh-cn";
import Parser from "./excel-parser.js";
Spreadsheet.locale("zh-cn", zhCN);

export default {
  name: "attr-qk-chartDataV",
  props: {
    chartDataV: Object,
  },
  data() {
    return {
      temprows: [],
      tempclos: [],
    };
  },
  mounted() {
    this.tempclos = this.chartDataV.columns;
    this.temprows = this.chartDataV.rows;
    this.init();
  },
  watch: {
    chartDataV() {
      this.tempclos = this.chartDataV.columns;
      this.temprows = this.chartDataV.rows;
    },
    temprows() {
      let chartData = {
        columns: this.tempclos,
        rows: this.temprows,
      };
      // TODO 这里传递值
      this.$emit("update:chartDataV", chartData);
    },
  },
  methods: {
    init() {
      let data1 = this.vChartJson2Csv(this.temprows, this.tempclos);
      const s = new Spreadsheet("#x-spreadsheet-demo", {
        showToolbar: false,
        showGrid: true,
        row: {
          len: this.temprows.length,
          height: 25,
        },
        view: {
          height: () => 317,
          width: () => 317,
        },
        col: {
          len: this.tempclos.length,
          width: 80,
          indexWidth: 60,
          minWidth: 60,
        },
      })
        .loadData(data1) // load data
        .change((data) => {
          // save data to db
          let dataset = data.rows;
          let datalist = [];
          for (let val in dataset) {
            if (val != "len") {
              datalist.push(dataset[val]["cells"]);
            }
          }
          let dlist = [];
          for (let f in datalist) {
            let t = [];
            for (let s in datalist[f]) {
              t.push(datalist[f][s]["text"]);
            }
            dlist.push(t);
          }
          let last = Parser.csv2VChartJson(dlist);

          this.tempclos = last["columns"];
          this.temprows = last["rows"];
        });
      s.bottombar.el.hide();
      // data validation
      // s.validate();
    },
    vChartJson2Csv(rowsV, closV) {
      let row = rowsV.map((item) => {
        const cells = {};
        let index = 0;
        for (let i in item) {
          cells[index] = { text: item[i] };
          index++;
        }
        return cells;
      });
      const cols = {};
      for (let i in closV) {
        cols[i] = { text: closV[i] };
      }
      const rows = {};
      for (let a = 1; a <= row.length; a++) {
        rows[a] = { cells: row[a - 1] };
      }
      let col = { 0: { cells: cols } };
      let dat = Object.assign(rows, col);
      let data = { rows: dat, cols: { len: closV.length } };
      return data;
    },
  },
};
</script>

<style scoped>
</style>
