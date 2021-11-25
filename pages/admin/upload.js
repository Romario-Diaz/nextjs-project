import { useState } from "react"
import BooksService from '../../services/booksServices'

const Upload = () => {

    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [file, setFile] = useState()

    const [pathImage, setPathImage] = useState("")

    const resetStates = () => {
        setName("")
        setAuthor("")
        setFile()
    }

    const sendBook = (e) => {
        e.preventDefault()
        console.log("funciona el envio !!!")
        console.log("name : ", name)
        console.log("author: ", author)
    }

    const onFileChage = () => {

    }

    return (
        <div className="form__books">
            <h1 className="title__form">Uploading!!</h1>
            <br />

            <form onSubmit={sendBook}>
                <div>
                    <label className="label__form">Escriba el titulo del libro</label>
                    <input type="text" className="input-upload" value={name} name="name"
                     onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="label__form">Escriba el autor</label>
                    <input type="text" className="input-upload" value={author} name="author"
                     onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="input-file input-upload">
                    <input 
                        type="file"
                        placeholder="File"
                        onChange={onFileChage}
                    />

                    <img src={pathImage} alt="Image" width="150"/>
                </div>
                <div>
                    <input type="submit" value="Enviar" className="input-upload submit" />
                </div>
            </form>
        </div>
    )
}

export default Upload