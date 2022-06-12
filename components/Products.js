import Image from 'next/image'
import Styles from './../styles/Products.module.css'
import Link from 'next/link'

const Products = ({ product }) => {
    // const { title, price, image, category,brand, id } = product
    const { product_title, price, image_url, category, brand, part_number, id } = product
    return (
        <div className={Styles.product}>
            <div>
                <Image src={image_url} width="200" height="200" />
            </div>
            <ul>
                <li>{product_title}</li>
                <li>Category: {category}</li>
                <li>$ {price} </li>
                <br></br>
                <li>
                    <Link href={`/products/${id}`} ><a className="crt">Cart</a></Link>
                    <Link href={`/products/${id}`} ><a className="button">Requsition</a></Link>
                </li>
                <br></br>
                <li>{part_number}</li>
                <li>Brand: {brand} </li>
            </ul>

        </div>
    )
}

export default Products