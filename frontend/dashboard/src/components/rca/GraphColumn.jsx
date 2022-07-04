import React from 'react';
import './GraphColumn.css'

const GraphColumn = props =>

        <div className="graph__column">
            <span className='valor'>
                {props.value}
            </span>
          
            <div columnsize={props.columnsize} className='column' style={{ height: props.columnsize + "%" }}>
            </div>
        </div>

export default GraphColumn;