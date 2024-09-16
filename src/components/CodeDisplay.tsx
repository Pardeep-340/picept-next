import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
    ...solarizedlight,
    'code[class*="language-"]': {
        color: '#AADAFB',
        background: '#161616',
        fontFamily: 'Consolas, sans-serif',
        fontSize: '20px',
    },
    'pre[class*="language-"]': { background: '#161616' },
    'comment': { color: '#75995E' },
    'string': { color: '#C5947C' },
    'keyword': { color: '#BC89BD' },
    'function': { color: '#F8D849' },
    'operator': { color: '#9C2FF6' },
    'punctuation': { color: '#CCCCCC' },
};

const CodeDisplay: React.FC<{ code: string }> = ({ code }) => {

    return (
        <SyntaxHighlighter language="python" style={customStyle}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeDisplay;
