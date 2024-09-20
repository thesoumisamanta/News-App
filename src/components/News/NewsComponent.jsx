import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export default function NewsComponent() {

    const [newsArray, setNewsArray] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b0c6ba287a7b4d7fabeb76d662801f25`)

                setNewsArray(res.data.articles)

                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        fetchNews()

    }, [])

    if (loading) return <h3 className="text-center text-3xl mt-6">Loading...</h3>
    if (error) return <h3 className="text-center text-3xl mt-6">Error: {error}</h3>

    const filteredNews = newsArray.filter(news => news.title !== "[Removed]" && news.description !== "[Removed]")

    return (
        <>

                <h1 className="text-center text-5xl mt-4">Top Headlines</h1>
                <div className="flex flex-wrap justify-center gap-6 p-6">

                {filteredNews.length > 0 ? (
                    filteredNews.map((news, index) => (
                        <NewsItem
                            key={index}
                            image={news.urlToImage || 'https://via.placeholder.com/400'}
                            title={news.title}
                            description={news.description}
                            author={news.author || 'Unknown'}
                            date={new Date(news.publishedAt).toLocaleDateString()}
                            url={news.url}
                        />
                    ))
                ) : (
                    <h3 className="text-center mt-6">No valid news items available.</h3>
                )}

                </div>

        </>
    )
}