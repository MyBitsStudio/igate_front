/**
 * Sample for Candle Series
 */
import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, ColumnSeries, Crosshair, StripLine, RowDirective, RowsDirective, SeriesDirective, Inject, Legend } from '@syncfusion/ej2-react-charts';
import {chartValues} from "@/data/financials";
export let zoomFactor: any;
export let zoomPosition: any;
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
/**
 * Candle sample
 */
export function Candle(this: any) {
    const onChartLoad = () => {
        const chart = document.getElementById('charts');
        // @ts-ignore
        chart.setAttribute('title', '');
    };
    const load = (args: { chart: { primaryXAxis: { zoomFactor: any; zoomPosition: any; }; theme: string; }; }) => {
        args.chart.primaryXAxis.zoomFactor = zoomFactor;
        args.chart.primaryXAxis.zoomPosition = zoomPosition;
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    const axisLabelRender = (args: { text: string; }) => {
        args.text = args.text.replace("0000000M", "M");
    };
    return (<div className='control-pane'>
        <style>{SAMPLE_CSS}</style>
        <div className='control-section'>
            <div className="row">
                <ChartComponent id='charts' style={{ textAlign: "center" }} load={load.bind(this)} primaryXAxis={{ valueType: 'DateTime', crosshairTooltip: { enable: true }, majorGridLines: { width: 0 } }} primaryYAxis={{ title: 'Volume', labelFormat: '{value}M', opposedPosition: true, majorGridLines: { width: 1 }, lineStyle: { width: 0 } }} legendSettings={{ visible: false }} tooltip={{ enable: true, shared: true, header: "", format: "<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b> <br> Volume : <b>${point.volume}</b>" }} width={'100%'} axisLabelRender={axisLabelRender.bind(this)} chartArea={{ border: { width: 0 } }} title="AAPL Historical" loaded={onChartLoad.bind(this)}>
                    <Inject services={[CandleSeries, StripLine, Category, Tooltip, DateTime, Zoom, Legend, ColumnSeries, Logarithmic, Crosshair]}/>
                    <RowsDirective>
                        <RowDirective height={'30%'}/>
                        <RowDirective height={'70%'}/>
                    </RowsDirective>
                    <AxesDirective>
                        <AxisDirective name='secondary' rangePadding={"None"} maximum={150} minimum={55} opposedPosition={true} rowIndex={1} majorGridLines={{ width: 1 }} labelFormat='n0' title='Price' plotOffset={30} lineStyle={{ width: 0 }}/>
                    </AxesDirective>
                    <SeriesCollectionDirective>
                        <SeriesDirective type='Column' dataSource={chartValues} animation={{ enable: true }} xName='period' yName='volume' enableTooltip={false} name='Volume'/>
                        <SeriesDirective type='Candle' yAxisName='secondary' bearFillColor='#2ecd71' bullFillColor='#e74c3d' dataSource={chartValues} animation={{ enable: true }} xName='period' low='low' high='high' open='open' close='close' name='Apple Inc' volume='volume'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    </div>);
}