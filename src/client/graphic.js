import React from 'react';

import { CenteredContainer as Center } from './ui';

const Bar = ({ style, value }) => 
    <td style={{ ...style, height: '100px', position: 'relative' }}>
        <div style={{ width: '20px', height: value+'%', backgroundColor: 'white', position: 'absolute', bottom: 0, left: '50%', marginLeft: '-10px' }} />
    </td>;

const Graphic = ({ drives, profiles, values, width }) => {
    const cWidth = width / profiles.length;
    const rStyle = {
        display: 'flex'
    };
    const cstyle = {
        display: 'inline-block',
        margin: 0,
        padding: 0, 
        textAlign: 'center',
        pointerEvents: 'none',
        width: `${cWidth}px`
    };
    return (
        <Center>
            <table style={{ margin: '5px 0', width: `${width + 4}px` }}>
                <tbody>
                    <tr style={rStyle}>
                        {values.map((v, it) => 
                            <Bar key={`v-${it}`} style={cstyle} value={v} />)}
                    </tr>
                    <tr style={{ ...rStyle, lineHeight: '30px' }}>
                        {profiles.map((n, it) => 
                            <td key={`p-${it}`} style={{...cstyle, borderTop: '#fff solid 1px', fontWeight: 'bold' }}>{n}</td>)}
                    </tr>
                    <tr style={rStyle}>
                        <td style={{ ...cstyle, width: '100%' }} >{drives}</td>
                    </tr>
                </tbody>
            </table>
        </Center>
    );
};

export default Graphic;