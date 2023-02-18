import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

const Swiggy = () => {
    return (<>
        <Header />
        <Body />
        <Footer />
    </>);
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Swiggy />);
