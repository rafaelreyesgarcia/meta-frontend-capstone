import hero from '../resources/hero.jpg'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__text--container'>
        <h1>little lemon</h1>
        <h2>chicago</h2>
        <p className='hero__text--p'>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className='hero__img--container'>
        <img src={hero} alt="" className='hero__img' />
      </div>
    </section>
  )
}