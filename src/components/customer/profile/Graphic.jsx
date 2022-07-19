import { useEffect } from 'react';
import utils from '../../graphics/util/utils';

import GraphColumn from './GraphColumn';

import './Graphic.css'


export default function Graphic(props) {
    
    const customerInfos = props.allData
    const filteredData = customerInfos?.graphicData
   
    useEffect(() => {
        
    }, [props.graphicData])

    const renderGraphic = () => {

        return (
            <div className="wrapper__container">
                <div className='graph__container'>
                    <div className='columns'>
                        {renderGraphicColumn()}
                    </div>
                    <div className="meses">
                        <span className="mes">Jan</span>
                        <span className="mes">Fev</span>
                        <span className="mes">Mar</span>
                        <span className="mes">Abr</span>
                        <span className="mes">Mai</span>
                        <span className="mes">Jun</span>
                        <span className="mes">Jul</span>
                        <span className="mes">Ago</span>
                        <span className="mes">Set</span>
                        <span className="mes">Out</span>
                        <span className="mes">Nov</span>
                        <span className="mes">Dez</span>
                    </div>
                </div>
            </div>
        )
    }

    const calcGrowthly = () => {
        if(!filteredData) return

        const totGrowthlyArr = utils.calcYearGrowthly(filteredData, props.year, true)
        // const avgGrowthly = (totGrowthly / 12).toFixed(2)
        return totGrowthlyArr
    }

    const renderGraphicColumn = () => {
        const [filtered, year] = [filteredData, props.year]

        const arrayValues = utils.getUpdateList(filtered, year);

        let greaterColumn = utils.calcGreaterMonthly(filtered, year);

        const totGrowthlyArr = calcGrowthly()

        let k = 0
        let id = 0
        let columnSize = 0

        if (arrayValues) {
            return arrayValues.map((monthValue, idx) => {

                // define quanto o menor representa em porcentagem, rem relação
                // ao maior
                // p = menor * 100 / maior
                columnSize = monthValue * 100 / greaterColumn

                return (
                    <GraphColumn
                        monthGrowthly={totGrowthlyArr[idx]}
                        id={id++}
                        key={k++}
                        columnsize={columnSize}
                        value={utils.formatNumbers(monthValue)}>
                    </GraphColumn>
                )
            })
        }
    }


        return (
            <section className='content_children customer__graphic'>
                {renderGraphic()}
            </section>
        )
}

