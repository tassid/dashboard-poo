import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot, lineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis/dist'

const Chart = () =>{
    const data = [
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8},
        {x:0,y:8}
    ]
}

return(
    <div className={{marginTop:'15px'}}>
        <XYPlot height={300} width={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <lineSeries />

        </XYPlot>
    </div>
)