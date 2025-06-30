import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Star, Clock, Music, ArrowRight } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';

const HomePage: React.FC = () => {
  const { songs, playSong } = useMusic();
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [musicRef, musicInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [quoteRef, quoteInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { icon: Trophy, label: 'Championships', value: '4', color: 'text-lebron-gold' },
    { icon: Crown, label: 'Finals MVPs', value: '4', color: 'text-lebron-wine' },
    { icon: Star, label: 'All-Star Games', value: '20', color: 'text-lebron-purple' },
    { icon: Clock, label: 'Years in NBA', value: '22', color: 'text-blue-400' }
  ];

  const impactCards = [
    {
      title: 'I PROMISE School',
      description: 'Transforming education in Akron',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Social Justice',
      description: 'Leading voices for change',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Space Jam Legacy',
      description: 'Entertainment empire',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-lebron-navy/90 via-slate-900/80 to-lebron-wine/90" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Crown className="w-16 h-16 text-lebron-gold mx-auto mb-6 animate-float" />
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              LEBRONIFY
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              A legacy in motion — where music meets greatness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/music"
              className="group px-8 py-4 bg-gradient-to-r from-lebron-purple to-blue-600 text-white font-semibold rounded-full hover:from-lebron-purple/80 hover:to-blue-600/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-glow"
            >
              <span className="flex items-center justify-center space-x-2">
                <Music className="w-5 h-5" />
                <span>Start Listening</span>
              </span>
            </Link>
            
            <Link
              to="/legacy"
              className="group px-8 py-4 border-2 border-lebron-gold text-lebron-gold font-semibold rounded-full hover:bg-lebron-gold hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <Crown className="w-5 h-5" />
                <span>Explore Legacy</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Highlights */}
      <section ref={statsRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Legacy by the Numbers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-black/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:animate-pulse`} />
                  <div className={`text-4xl font-black ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Teaser */}
      <section ref={musicRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={musicInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Featured Tracks
          </motion.h2>
          
          <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide">
            {songs.slice(0, 6).map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: 50 }}
                animate={musicInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex-none w-64 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 cursor-pointer"
                onClick={() => playSong(song)}
              >
                <img
                  src={song.coverArt}
                  alt={song.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-white font-semibold mb-2 truncate">{song.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{song.artist}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{song.duration}</span>
                  <div className="w-8 h-8 bg-lebron-gold text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Music className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={musicInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/music"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-lebron-gold text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105"
            >
              <Music className="w-5 h-5" />
              <span>Browse All Songs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote & Impact Preview */}
      <section ref={quoteRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              "I'm just a kid from Akron."
            </blockquote>
            <cite className="text-lebron-gold text-xl">— LeBron James</cite>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={quoteInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/impact"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-lebron-gold text-lebron-gold font-semibold rounded-full hover:bg-lebron-gold hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Impact</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;