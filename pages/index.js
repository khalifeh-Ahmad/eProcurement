import Products from "../components/Products"
import data from '../products.json';
import Head from "next/head";
import Filter from "../components/Filter";

const index = ({ products }) => {
  return (
    <main className="container">
      <Head>
        <title>eProcurement</title>
      </Head>
      {/* <Filter state={state} /> */}
      <Filter />
      <div className="main">
        {
          data && data.map(product => <Products key={product.id} product={product} />)
        }
      </div>
    </main>
  )
}

export default index

// export async function getStaticProps() {
//   const req = await fetch("https://api2.eprocurement.ae")
//   const products = await req.json();

//   return {
//     props: { products }
//   }
// }