import { useEffect, useState } from 'react';

const HomeView = ({ name }) => {
  return (
    <div className='container d-flex align-items-center justify-content-center h-100'>
      <div className='row'>
        <header className='text-center col-12'>
          <h1 className='text-uppercase'>
            <strong>Welcome To my Website</strong>
          </h1>
        </header>
        <div className='buffer col-12'></div>
        <section className='text-center col-12'>
          <hr />
          <a href='/about' className=' btn btn-primary btn-xl'>
            About Me
          </a>
          <a href='https://mailchi.mp/bddb8d4629ab/startup' className=' btn btn-primary btn-xl'>
            Mailing List
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
  );
};

export { HomeView };