
import Head from 'next/head'
import Container from '../components/Container'
import ListBooks from '../components/ListBooks'
import API from '../util/const'
import _fetch from 'isomorphic-fetch'
import { BookProvider } from '../components/BooksContext'

export default () => <BookProvider>

    <Index></Index>
</BookProvider>

function Index() {

    return (
        <Container>
            <Head>
                <title>Home</title>    
            </Head>       

            <ListBooks 
                // list = {props}
            />     
        </Container>
    )
}

// Index.getInitialProps = async () => {
//     // const res = await _fetch(`${API.URI}/books/getInicializationData`)
//     // const data = res.json()
//     // return data
// }

