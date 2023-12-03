import Header from "./partials/Header";

function Hero() {
  return (
    <main className="hero">
      <Header />
      <div className="hero-center">
        <section className="hero-title">
          <h1>Ahmad</h1>
          <div className="title-skills">
            <span className="js">JavaScript</span>
            <span className="react">ReactJS</span>
            <span className="node">NodeJS</span>
          </div>
          <p>
            Welcome to my portfolio website! I'm a passionate full stack web
            developer dedicated to creating stunning and functional digital
            experiences. With expertise in both front-end and back-end
            development, I bring a comprehensive skill set to the table.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Hero;
