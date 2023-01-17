import React from 'react';
import { useParams} from 'react-router-dom';

const LanguagePage = () => {
    const {language} = useParams();
    return (
        <div>
            <h2>This is the page for {language}</h2>
        </div>
    );
};

export default LanguagePage;
