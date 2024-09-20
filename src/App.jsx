import Navbar from "./components/Header/Navbar";
import NewsComponent from "./components/News/NewsComponent";
import NewsItem from "./components/News/NewsItem";

export default function App(){
    return (
        <>
            <Navbar />
            {/* <NewsItem /> */}
            <NewsComponent />
        </>
    )
}
