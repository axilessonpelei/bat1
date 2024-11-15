import Header from "../header/Header.jsx";

export const Layout = ({children}) => {
    return (
        <div className={"w-100 h-100 d-flex flex-column"}>
            <Header />
            <div className={"d-flex flex-column flex-grow-1"}>
                {children}
            </div>
        </div>
    );
};