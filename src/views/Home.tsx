import '../styles/home.css';

const HomeView = () => {
  return (
    <div className='container-home'>
      <div className='row'>
        <header className=''>
          <h1 className='text-uppercase'>
            <strong>Welcome To my Website</strong>
          </h1>
        </header>
        <div>
          <section className='text-center col-12'>
            <hr />

            <a href='/about' className=' btn btn-primary btn-xl'>
              About Me
            </a>

            <a href='mailto:j.schloss09@icloud.com' className=' btn btn-primary btn-xl'>
              Contact Me
            </a>

            <a href='/art' className=' btn btn-primary btn-xl'>
              Art
            </a>
            <a href='https://github.com/DatMack' className=' btn btn-primary btn-xl'>
              GitHub
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export { HomeView };
