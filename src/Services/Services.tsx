import React from 'react';
import serviceData from '../constants/serviceData';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return <section>
    <div className="lg:px-36 px-3 mb-28">
      <div className="grid grid-cols-1 md2:grid-cols-4 md:grid-cols-3 justify-center gap-4">
        {serviceData.map((item, index) => (
          <motion.div whileHover={{scale: 1.1}} key={index} className="px-4 py-3 flex items-center gap-2 rounded-lg" style={{ backgroundColor: item.bg }}>
            <div className="text-3xl bg-customcolor text-white p-2 rounded-full">
              <item.icon />
            </div>
            <div>
              <h3 className="font-bold text-base text-customcolor">{item.title}</h3>
              <p className='text-sm text-customcolor/80'>{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
};

export default Services;