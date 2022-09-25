import React, { useEffect, useState } from 'react';
import News from './News';

const NewsBLog = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(" https://electrix-manufacturer-server.onrender.com/news")
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, []);
    return (
        <div className='px-12'>
            <h1 className='text-center text-neutral font-bold mb-1 mt-5 text-5xl'>News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    news.map(_news => <News
                        _news={_news}
                        key={_news._id}
                    ></News>)
                }
            </div>
        </div>
    );
};

export default NewsBLog;