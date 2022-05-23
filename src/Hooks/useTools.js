import { useEffect, useState } from "react";

const useTools = (reload) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [reload]);
    return [tools, setTools]
}

export default useTools;