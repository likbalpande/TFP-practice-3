// import { useEffect } from "react";
import { useRef } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";

const App = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    // useEffect(() => {
    //     console.log("App effect run!");
    // }, []);

    const handleViewFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    const handleViewHeader = () => {
        headerRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    return (
        <div>
            <Header handleViewFooter={handleViewFooter} ref={headerRef}></Header>
            <HomePage />
            <Footer handleViewHeader={handleViewHeader} ref={footerRef}></Footer>
        </div>
    );
};

export default App;
