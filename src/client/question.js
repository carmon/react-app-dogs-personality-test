import React, { PureComponent } from 'react';

import { CenteredContainer as Center } from './ui';

export default class Question extends PureComponent {
    constructor(props) {
        super(props);

        const onSwitchValue = val => { this.props.onChange(val); };
        this.handleClick = new Array(11).fill(0).map((v, it)=> () => onSwitchValue(it)); 
    }

    render() {
        const { category, catColor, root, text, value } = this.props;
        return (
            <div>
                <Center>
                    <text 
                        style={{ 
                            fontWeight: 'bold',
                            lineHeight: '20px', 
                            marginTop: '3%'
                        }}>
                        {root}
                    </text>
                </Center>
                <Center><text style={{ marginTop: '5px', textAlign: 'right' }}>{text}</text></Center>
                <Center>
                    {this.handleClick.map((h, it) => 
                        <button key={`b-${it}`} disabled={value === it} onClick={this.handleClick[it]} style={{ width: '32px' }}>{it}</button>)}
                </Center>
                <Center>
                    <text 
                        style={{ 
                            color: catColor, 
                            fontWeight: 'bold',
                            pointerEvents: 'none' 
                        }}>
                        {category}
                    </text>
                </Center>
            </div>
        );
    }
}