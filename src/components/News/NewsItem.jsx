export default function NewsItem(){
    
    const newsData = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s',
        title: 'Exciting News Headline',
        content: 'This is a summary of the news content. It briefly explains what the news is about.',
        date: 'September 19, 2024',
        link: 'https://example.com/read-more'
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                    <img
                        className="w-full h-48 object-cover"
                        src={newsData.image}
                        alt={newsData.title}
                    />
                    <div className="p-6">
                        <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide mb-2">
                            {newsData.date}
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">{newsData.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            {newsData.content.length > 100 ? `${newsData.content.substring(0, 100)}...` : newsData.content}
                        </p>
                        <a
                            href={newsData.link}
                            className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:bg-blue-600"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}