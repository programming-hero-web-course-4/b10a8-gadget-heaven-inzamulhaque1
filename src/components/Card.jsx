/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { product_title, product_image, price, rating } = product;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">

      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt="{product_title}"
          className="rounded-xl h-[200px] w-full object-cover"
        />
      </figure>

      <div className="card-body ">
        
        <h2 className="card-title">{product_title}</h2>

        <p>{price}</p>
        <p>Rating: {rating}</p>

        <div className="card-actions">
          <button className="btn rounded-full border-2 text-purple-500 border-purple-500 hover:text-white hover:bg-purple-500">View Details</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
