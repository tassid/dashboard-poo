import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis/dist'
import chartLabel from 'react-vis/dist/plot/chart-label'

const Chart = () =>{
    const data = [
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8}
    ]


return(
    <div className={{marginTop:'15px'}}>
        <XYPlot height={300} width={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} color="red" />
            <LineSeries data={data} color="purple"/>
            <LineSeries data={data} color="yellow"/>
        </XYPlot>
    </div>
)
}

export default Chart;