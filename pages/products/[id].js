import Image from 'next/image'
import Styles from './../../styles/SingleProduct.module.css'
import Head from "next/head";

const SingleProduct = ({ product }) => {
    const { title, price, image, description, category, id } = product

    return (
        <div className={Styles.product}>
            <Head>
                <title>{title}</title>
            </Head>
            <div><Image src={image} width="300" height="500" /></div>
            <div>
                <h2>{title}</h2>
                <h3>{category}</h3>
                <h1>{price},00$</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SingleProduct;

export async function getStaticPaths() {
    const req = await fetch("https://fakestoreapi.com/products")
    const products = await req.json();
    const path = products.map((product) => {
        return {
            params: { id: product.id.toString() },
        };
    });
    return {
        path,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await req.json();
    return {
        props: { product }
    }
}