import { Section } from '../components/Section';
import '../styles/art.css';

const ArtView = () => {
  return (
    <div className='container'>
      <h1>Art Gallery</h1>
      <img
        className='header-image'
        src='john-tattoo.jpeg'
        alt=''
        style={{
          borderRadius: 999,
          margin: 25,
          border: '8px solid #fff',
          boxShadow: '0 0 8px rgb(0 0 0 / 60%)',
        }}
      />
      <h1 className='welcome'>
        Welcome to my gallery! Here I have a collection of recent and old drawings and tattoos that I have done. If you
        are interested in contacting me about my work please don\'t hesitate to send me a message. Please check my
        schedule to see if I have any openings for tattoo sessions, I update it regularly.
      </h1>
      <Section title='Art' visible={false}>
        <div className='image__grid'>
          <img className='image__grid-content' src='fish.jpeg' alt='' />
          <img className='image__grid-content' src='zombie.jpeg' alt='' />
          <img className='image__grid-content' src='teeth.jpeg' alt='' />
          <img className='image__grid-content' src='heart.jpeg' alt='' />
          <img className='image__grid-content' src='cheech.jpeg' alt='' />
          <img className='image__grid-content' src='plane.jpeg' alt='' />
          <img className='image__grid-content' src='skull.jpeg' alt='' />
          <img className='image__grid-content' src='wizard.jpeg' alt='' />
          <img className='image__grid-content' src='skull-drawing.jpeg' alt='' />
          <img className='image__grid-content' src='lettering.jpeg' alt='' />
          <img className='image__grid-content' src='kartos.jpeg' alt='' />
        </div>
      </Section>

      <Section title='Tattoo Stuff' visible={false}>
        <div className='image__grid'>
          <img className='image__grid-content' src='nick.jpeg' alt='' />
          <img className='image__grid-content' src='brad.jpeg' alt='' />
          <img className='image__grid-content' src='father.jpeg' alt='' />
          <img className='image__grid-content' src='john-leg.jpeg' alt='' />
          <img className='image__grid-content' src='john-calf.jpeg' alt='' />
        </div>
      </Section>
    </div>
  );
};

export { ArtView };
