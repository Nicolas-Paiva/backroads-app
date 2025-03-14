import Title from './Title';
import {services} from '../data-js';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"our"} subTitle={"services"}/>
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service {...service}/>
          )
        })}
      </div>
    </section>
  )
};

export default Services;