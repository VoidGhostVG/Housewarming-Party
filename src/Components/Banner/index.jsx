import "./Banner.css"

const Banner = (props) => {
    return (
        <section className="banner">
            <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                alt="Casa nova cheia de carinho"
                width="1000"
                height="300"
            />
            <div className="banner-selo">💕 Vem comemorar com a gente!</div>
        </section>
    )
}

export default Banner
