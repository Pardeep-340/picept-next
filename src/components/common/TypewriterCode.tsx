import Typewriter from 'typewriter-effect';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CODE_DISPLAY_LIST } from '@/utils/helper';

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

const CodeWithTypewriter: React.FC = () => {
    const singleCode = CODE_DISPLAY_LIST[3];

    // Split the code into two parts: before and after the typewriter line
    const [beforeTypewriter, afterTypewriter] = singleCode.split(
        'xx[azure],xx[vertex-ai],xx[bedrock],xx[openai],.....'
    );

    return (
        <div>
            {/* Render the code before the Typewriter effect */}
            <SyntaxHighlighter language="python" style={customStyle}>
                {beforeTypewriter}
            </SyntaxHighlighter>

            {/* Render the Typewriter effect */}
            <div className='text-[#C5947C] font-Consolas text-xl ms-[47px]'>
                <Typewriter
                    options={{
                        strings: ['meta.llama3-70b-instruct-v1:0[bedrock]', "gpt-4o-mini[azure-openai]", "gemini-1.5-pro[vertex-ai]", "llama-3.1-70b-versatile[groq]", "open-mixtral-8x22b[mistral-ai]", "Your_Model[Your_Provider]"],
                        autoStart: true,
                        loop: true,
                        delay: 20,
                    }}
                />
            </div>

            {/* Render the code after the Typewriter effect */}
            <SyntaxHighlighter language="python" style={customStyle}>
                {afterTypewriter}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeWithTypewriter;
