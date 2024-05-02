import { Component, createElement } from "react";
import classNames from "classnames";
import Papa from "papaparse";

export class HTMLTable extends Component {
    render() {
        const result = Papa.parse(this.props.csv, {
            delimiter: ",",
            escapeChar: "\\",
            header: true,
            quoteChar: '"',
            newLine: "\r\n",
            error: function (err) {
                console.error("Error while parsing CSV:", err);
            }
        });

        const headers = [];
        for (const element of result.meta.fields) {
            headers.push(createElement("th", {}, element));
        }

        const rows = [];
        for (var i = 0; i < result.data.length; i++) {
            const columns = [];
            Object.keys(result.data[i]).forEach(function (key) {
                columns.push(createElement("td", {}, result.data[i][key]));
            });
            rows.push(createElement("tr", {}, columns));
        }
        const bodyElement = createElement("tbody", {}, rows);
        const headersElement = createElement("thead", {}, headers);
        const tableElement = createElement("table", {
            className: 'csv'
        }, 
            [headersElement, bodyElement]
        );

        return tableElement;

        /* return (
            <span
                className={classNames("widget-csvastable", this.props.type, this.props.className, {
                    [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle
                })}
                style={this.props.style}
            >{this.props.csv}</span>
        ); */
    }
}
