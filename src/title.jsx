import React, { useEffect } from 'react';
import { UseEffect } from 'react';

function Title(){
    useEffect(() => {
        document.title = "Lansip";
    }, []);
}

export default Title;