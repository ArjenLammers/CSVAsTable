import { Component, createElement } from "react";

import { HTMLTable } from "./components/HTMLTable";
import "./ui/CSVasTable.css";

export class CSVasTable extends Component {
    render() {
        return (
            <HTMLTable
                type={this.props.csvastableType}
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                style={this.props.style}
                csv={this.props.csv ? this.props.csv.displayValue : ""}
            />
        );
    }
}
