import { useEffect, useState } from "react";

const useTools = (reload) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://calm-bayou-08500.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [reload]);
    return [tools, setTools]
}

export default useTools;