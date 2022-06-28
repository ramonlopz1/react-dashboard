import React from 'react';
import './GraphColumn.css'

const GraphColumn = props =>

        <div className="graph__column">
            <span className='valor'>
                R$ {parseFloat(props.value).toFixed(2).replace(".", ",")}
            </span>
            <div value={props.value} className='column' style={{ height: props.value / 500 }}>
            </div>
        </div>

export default GraphColumn;