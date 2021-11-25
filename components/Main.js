
import FilterBooks from "./FilterBooks"

const Main = (props) => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__left">
                    <FilterBooks />
                </div>
                <div className="main__right">
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default Main