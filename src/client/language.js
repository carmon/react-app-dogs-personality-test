import React from 'react';

import { CenteredContainer as Center } from './ui';

const style = {
    display: 'inline-block',
    marginTop: '2px',
    marginRight: '10px',
    width: '20%'
};

const LanguageSelector = ({ current, handlers, list, texts }) =>
    <Center>
        {list.map((l, it) => 
            <button 
                key={`b-${it}`} 
                onClick={it === current ? null : handlers[it]}
                style={{ ...style, fontWeight: it === current ? 'bold' : 'normal' }}
            >
            {texts[l].option}
            </button>)}
    </Center>;

export default LanguageSelector;