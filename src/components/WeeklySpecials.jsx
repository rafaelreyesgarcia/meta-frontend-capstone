import MopedIcon from '@mui/icons-material/Moped';

export default function WeeklySpecials() {
  const products = [
    {
      img: 'src/assets/greek-salad.jpg',
      name: 'Greek Salad',
      price: 12.99,
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      img: 'src/assets/bruschetta.jpg',
      name: 'Bruschetta',
      price: 5.99,
      description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      img: 'src/assets/lemon-dessert.jpg',
      name: 'Lemon Dessert',
      price: 5.00,
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is authentic as can be imagined.',
    }
  ];

  return (
    <section className="specials text-variant">
      <div className="specials__heading">
        <h1 className="text-variant">this weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials__cards">
        {products.map(product => (
          <div className="product-card">
            <img
              src={product.img}
              alt={product.name} className='product__img'
            />
            <div className="product__description">
              <div className="product__description--heading">
                <h3>{product.name}</h3>
                <span className="highlight">${parseFloat(product.price).toFixed(2)}</span>
              </div>
              <p className='product__description--text'>
                {product.description}
              </p>
              <div className='product__order'>
                <span><b>Order a Delivery</b></span>
                <MopedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}