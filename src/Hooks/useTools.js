import { useEffect, useState } from "react";

const useTools = (reload) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [reload]);
    return [tools, setTools]
}

export default useTools;