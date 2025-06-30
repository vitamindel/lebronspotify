import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Star, Trophy, TrendingUp, Heart, Target } from 'lucide-react';

const SonsPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [sonsRef, sonsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [momentsRef, momentsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const bronnyStats = [
    { label: 'Height', value: '6\'3"' },
    { label: 'Position', value: 'Guard' },
    { label: 'College', value: 'USC' },
    { label: 'NBA Draft', value: '2024' }
  ];

  const bryceStats = [
    { label: 'Height', value: '6\'6"' },
    { label: 'Position', value: 'Guard/Forward' },
    { label: 'School', value: 'Sierra Canyon' },
    { label: 'Class', value: '2025' }
  ];

  const familyMoments = [
    {
      title: 'Father-Son NBA History',
      description: 'LeBron and Bronny become the first father-son duo to play in the NBA simultaneously.',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Trophy
    },
    {
      title: 'High School Highlights',
      description: 'Watching his sons dominate at Sierra Canyon High School.',
      image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Star
    },
    {
      title: 'Family Basketball Legacy',
      description: 'Three generations of James family basketball excellence.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Heart
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section ref={headerRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
          >
            <Users className="w-16 h-16 text-lebron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The Next Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Following in their father's footsteps, Bronny and Bryce James are carrying on the family legacy with their own basketball journeys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sons Profiles */}
      <section ref={sonsRef} className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bronny James */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={sonsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-black/60 transition-all duration-300">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Bronny James"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Name and Position */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Bronny James</h2>
                    <p className="text-lebron-gold text-lg font-semibold">LeBron James Jr.</p>
                  </div>
                  
                  {/* Age Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-lebron-gold text-black font-bold rounded-full">
                    Age 20
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {bronnyStats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-lebron-gold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Career Highlights</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-lebron-gold flex-shrink-0" />
                        <span>McDonald's All-American (2023)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-lebron-gold flex-shrink-0" />
                        <span>Sierra Canyon State Championship</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-lebron-gold flex-shrink-0" />
                        <span>USC Trojans Guard (2023-2024)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-lebron-gold flex-shrink-0" />
                        <span>NBA Draft 2024 - 2nd Round Pick</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bryce James */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={sonsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-black/60 transition-all duration-300">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Bryce James"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Name and Position */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Bryce James</h2>
                    <p className="text-lebron-wine text-lg font-semibold">Bryce Maximus James</p>
                  </div>
                  
                  {/* Age Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-lebron-wine text-white font-bold rounded-full">
                    Age 17
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {bryceStats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-lebron-wine mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Rising Star</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-lebron-wine flex-shrink-0" />
                        <span>Sierra Canyon High School Standout</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-lebron-wine flex-shrink-0" />
                        <span>Growing 6'6" Frame with Guard Skills</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-lebron-wine flex-shrink-0" />
                        <span>Class of 2025 Prospect</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-lebron-wine flex-shrink-0" />
                        <span>Future College Recruitment Target</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Moments */}
      <section ref={momentsRef} className="py-20 px-4 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={momentsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Father-Son Legacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the special moments that define the James family basketball dynasty.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {familyMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, y: 50 }}
                animate={momentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <moment.icon className="w-8 h-8 text-lebron-gold mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{moment.title}</h3>
                  <p className="text-gray-300 text-sm">{moment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={momentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 py-12 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              "The best thing about it is just the time that we can spend together. That's the most important thing."
            </blockquote>
            <cite className="text-lebron-gold text-lg">— LeBron James on playing with his sons</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SonsPage;