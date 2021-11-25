import { useState, useEffect } from "react"
import ItemBooks from "./ItemBooks"

import { useBooks } from '../components/BooksContext'
import BooksService from '../services/booksServices'

const ListBook = () => {

    const [audioBooks, setAudioBooks] = useState([])
    const [ebooksFree, setEbooksFree] = useState([])

    const [ allBooks, setAllBooks ] = useState()

    const { checkedOne, checkedTwo } = useBooks()

    const books = new BooksService()
    useEffect(() => {
        if(checkedOne) {
            books.getAllAudioBooks().then(data => {
                setAudioBooks(data.data)
                setEbooksFree([])
            })
        }else if(checkedTwo) {
            books.getAllEbooks().then(data => {
                setAudioBooks([])
                setEbooksFree(data.data)
            })
        }else {
            setAudioBooks([])
            setEbooksFree([])
            books.getInitialBooks().then(data => {
                console.log(data)
                allBooks = data
                setAudioBooks(allBooks.data.audiobooks)
                setEbooksFree(allBooks.data.freebook)
            })
        }
    }, [checkedOne, checkedTwo])

    return (
        <>
            <div>
                {
                    audioBooks.length > 0 ?
                        <div className="book__container">
                            <h4 className="book__category">AudioBooks</h4>
                            <div className="book__list">
                                <ItemBooks
                                    book={audioBooks}
                                />
                            </div>
                        </div>
                        :
                        <></>
                }
                {
                    ebooksFree.length > 0 ?
                        <div className="book__container">
                            <h4 className="book__category">Free Ebooks</h4>
                            <div className="book__list">
                                <ItemBooks
                                    book={ebooksFree}
                                />
                            </div>
                        </div>
                        :
                    <></>
                }

            </div>
        </>
    )
}


export default ListBook