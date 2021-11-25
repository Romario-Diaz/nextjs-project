
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div>
                <div className="header__top">
                    <h1 className="header__logo">Library Books</h1>
                </div>
                <nav className="header__bottom">
                    <ul className="header__menu">
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Categorias</a>
                            <ul>
                                <li>
                                    <Link href="./TerrorBooks">
                                        <a >Libros de terror</a>
                                    </Link>
                                </li>
                                <li><a href="#">Libros de suspenso</a></li>
                                <li><a href="#">Libros de drama</a></li>
                                <li><a href="#">Libros de romance</a></li>
                                <li><a href="#">Libros de programacion</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link href="./blog">
                                <a >Blog</a>
                            </Link>

                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar