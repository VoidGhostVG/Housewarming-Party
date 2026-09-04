import "./Header.css"


const Header = (props) => {
    return (
        <>
            <header className="header-cha">
                <span className="header-icone">🏡💗</span>
                <h1>{props.titleHeader}</h1>
                <p>{props.textHeader}</p>
            </header>
            <hr className="divider" />
        </>
    )
}

export default Header;
