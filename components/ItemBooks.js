import { useState, useEffect } from "react"


const ItemBooks = (props) => {

    const [arrayItem, setArrayItem] = useState([])

    useEffect(() => {
        console.log("las propiedades", props)
        setArrayItem(props.book)

        console.log(arrayItem)
    }, [])

    function getRandom() {
        return Math.random()
    }

    return (
        <>
            {
                arrayItem.map(item =>
                    <div key={getRandom()} className="book__item">
                        <div className="book__item-container">
                            <img src={`${item.img_url}`} alt="libro" className="book__img" />
                            <div className="book__texts">
                                <span>{`${item.name}`}</span>
                                <div className="book__icons">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>



    )
}

export default ItemBooks