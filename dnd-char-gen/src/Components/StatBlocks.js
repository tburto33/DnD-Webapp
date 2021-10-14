import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StatBlock(props) {
    return (
        <div class="stat-block">
            <div>
                {props.statType}
            </div>
            <div>
                {props.statMod}
            </div>
            <div class="stat-mod">
                {props.statTotal}
            </div>
        </div>
    );
}

export default StatBlock;