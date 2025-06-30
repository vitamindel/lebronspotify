import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Crown, Target, Heart, Zap } from 'lucide-react';

const LegacyPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const timelineEvents = [
    {
      year: '1984',
      title: 'Born in Akron',
      description: 'LeBron Raymone James is born in Akron, Ohio, beginning a journey that would change basketball forever.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-purple-600'
    },
    {
      year: '2003',
      title: 'Drafted #1 Overall',
      description: 'Straight from high school to the NBA, LeBron is selected first overall by his hometown Cleveland Cavaliers.',
      icon: Star,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-wine to-lebron-gold'
    },
    {
      year: '2010',
      title: 'The Decision',
      description: 'LeBron takes his talents to South Beach, joining Dwyane Wade and Chris Bosh in Miami.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/159832/basketball-dunk-blue-game-159832.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-black'
    },
    {
      year: '2012',
      title: 'First Championship',
      description: 'LeBron captures his first NBA title and Finals MVP, defeating the Oklahoma City Thunder.',
      icon: Trophy,
      image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-gold to-yellow-400'
    },
    {
      year: '2013',
      title: 'Back-to-Back Champion',
      description: 'Miami Heat win their second consecutive championship in a thrilling 7-game series against San Antonio.',
      icon: Trophy,
      image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-gold to-yellow-400'
    },
    {
      year: '2014',
      title: 'Coming Home',
      description: 'LeBron returns to Cleveland with a promise to bring a championship to his hometown.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-wine to-lebron-gold'
    },
    {
      year: '2016',
      title: 'Cleveland Champion',
      description: 'LeBron delivers on his promise, leading the Cavs to their first championship in franchise history, ending Cleveland\'s 52-year title drought.',
      icon: Crown,
      image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-wine to-lebron-gold'
    },
    {
      year: '2018',
      title: 'Lakers Legacy',
      description: 'LeBron joins the Los Angeles Lakers, continuing his journey to basketball immortality.',
      icon: Star,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-purple to-lebron-gold'
    },
    {
      year: '2020',
      title: 'Bubble Championship',
      description: 'In an unprecedented season, LeBron leads the Lakers to their 17th championship in the Orlando Bubble.',
      icon: Trophy,
      image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-purple to-lebron-gold'
    },
    {
      year: '2023',
      title: 'All-Time Scoring Leader',
      description: 'LeBron breaks Kareem Abdul-Jabbar\'s all-time scoring record, cementing his place in basketball history.',
      icon: Target,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lebron-gold to-yellow-400'
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
            <Crown className="w-16 h-16 text-lebron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The Legacy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a kid from Akron to the greatest player of all time. Follow LeBron's incredible journey through the milestones that defined a legend.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lebron-gold via-lebron-wine to-lebron-purple" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lebron-gold rounded-full border-4 border-slate-900 z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="group bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-black/60 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-lebron-gold font-bold rounded-full">
                        {event.year}
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute top-4 right-4 p-2 bg-black/80 backdrop-blur-sm rounded-full">
                        <event.icon className="w-6 h-6 text-lebron-gold" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lebron-gold transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-16"
          >
            The Numbers Don't Lie
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
            >
              <Trophy className="w-12 h-12 text-lebron-gold mx-auto mb-4" />
              <div className="text-4xl font-black text-lebron-gold mb-2">4</div>
              <div className="text-white font-semibold mb-2">NBA Championships</div>
              <div className="text-gray-400 text-sm">2012, 2013, 2016, 2020</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
            >
              <Crown className="w-12 h-12 text-lebron-wine mx-auto mb-4" />
              <div className="text-4xl font-black text-lebron-wine mb-2">4</div>
              <div className="text-white font-semibold mb-2">Finals MVPs</div>
              <div className="text-gray-400 text-sm">Clutch when it matters most</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-black text-blue-400 mb-2">39K+</div>
              <div className="text-white font-semibold mb-2">Career Points</div>
              <div className="text-gray-400 text-sm">All-time scoring leader</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;