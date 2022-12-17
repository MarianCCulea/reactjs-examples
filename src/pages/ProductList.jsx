import Product from "../components/Product";

const ProductList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Product postId={3}></Product>
          <Product postId={4}></Product>
          <Product postId={5}></Product>
          <Product postId={5}></Product>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
