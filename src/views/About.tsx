import { Section } from '../components/Section';
import '../styles/about.css';

const AboutView = () => {
  return (
    <div className='container'>
      <h1 className='title'>John Schloss</h1>

      <img
        src='https://www.placecage.com/300/300'
        alt=''
        style={{
          borderRadius: 999,
          margin: 25,
          border: '8px solid #fff',
          boxShadow: '0 0 8px rgb(0 0 0 / 60%)',
        }}
      />

      <h1 className='title'>Artist/Developer</h1>
      <p className='welcome'>Hello, Thank you for taking the time to check out my website!</p>

      <Section title='Education' visible={false}>
        <div className='Section__item'>
          <div className='Section__item-header'>Vincennes University</div>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Networking and Telecommunications - 2009 to 2010</div>
          </div>
        </div>
        <div className='Section__item'>
          <div className='Section__item-header'>Columbus State Community College</div>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>General Studies - 2014 to 2015</div>
          </div>
        </div>
        <div className='Section__item'>
          <div className='Section__item-header'>The Ohio State Universtiy</div>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Computer Science - 2015</div>
          </div>
        </div>
      </Section>

      <Section title='Work Experience' visible={false}>
        <div className='Section__item'>
          <div className='Section__item-header'>United States Army</div>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Infantry Radio Telecommunications Operator - 2011 to 2012</div>
            <div className='Section__item-description'>
              In charge and responsible for my platoons radio Equipment worth up to $900,000. Had to communicate under
              stressful situations and make sure the equipment stayed operational during combat missions in afghanistan.
              Also had to use satelite telecommunications to relay information to other units to make sure we had the
              right ammount of support for our missions.
            </div>
          </div>

          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Infantry Team Leader - 2012 to 2014</div>
            <div className='Section__item-description'>
              In charge of training and maintaing the health of four other soldiers. Making sure they had the proper
              knowledge and skills to sucessfully operate in combat enviorments. My job was to help them not only grow
              as soldiers but as people too. I have been to many Army leadership courses that have helped me learn how
              to be a better leader and that training has transfered over to the work enviorment and helped me become a
              strong worker and leader in the civilian workforce as well.
            </div>
          </div>
        </div>

        <div className='Section__item'>
          <div className='Section__item-header'>PacMoore Process Technoligies</div>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Forklift Driver 2021 to 2022</div>
            <div className='Section__item-description'>
              Tasked with making sure plant production team had materails on time, and move product out the system in a
              timely manner so they could continue to produce prodcut. Also in charge of cleaning up the production area
              and keeping it up to industry standards for food production.
            </div>
          </div>
        </div>

        <div className='Section__item'>
          <div className='Section__item-content'>
            <div className='Section__item-subheader'>Warehouse Management 2022 to Present</div>
            <div className='Section__item-description'>
              In charge of prodcut stored in the Warehouse, making sure that what was produced was stored in the
              warehouse properly and ready to be shipped to the customer in a timely fashion. Also made sure that
              product was seperated by, also in charge of disposing of, or destoying bad product.
            </div>
          </div>
        </div>
      </Section>

      <Section title='Programming Experience' visible={false}>
        <p>palce holder</p>
      </Section>
    </div>
  );
};

export { AboutView };