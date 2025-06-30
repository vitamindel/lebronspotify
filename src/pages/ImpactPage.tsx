import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, GraduationCap, Megaphone, Film, Users, BookOpen, Star, Award } from 'lucide-react';

const ImpactPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [impactRef, impactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [quotesRef, quotesInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const impactAreas = [
    {
      title: 'I PROMISE School',
      description: 'Transforming education in Akron by providing comprehensive support to at-risk students and their families.',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: ['1,000+ Students Served', '$41M Investment', '90% Graduation Rate'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Social Justice Advocacy',
      description: 'Leading conversations on racial equality, voting rights, and social justice through activism and awareness.',
      icon: Megaphone,
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: ['More Than A Vote Campaign', 'Police Reform Advocacy', 'Community Organizing'],
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Media & Entertainment',
      description: 'Building SpringHill Entertainment and Uninterrupted to amplify diverse voices and tell important stories.',
      icon: Film,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: ['SpringHill Entertainment', 'Space Jam: A New Legacy', 'Uninterrupted Platform'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Community Development',
      description: 'Investing in Akron and other communities through housing, job creation, and local business support.',
      icon: Users,
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: ['Housing Initiatives', 'Job Creation Programs', 'Local Business Support'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const inspirationalQuotes = [
    {
      quote: "I'm going to use my platform to continue to inspire and help kids and give them the blueprint.",
      context: "On using his influence for good"
    },
    {
      quote: "Every night on the court I give my all, and if I'm not giving 100 percent, I criticize myself.",
      context: "On dedication and excellence"
    },
    {
      quote: "I like criticism. It makes you strong.",
      context: "On handling adversity"
    },
    {
      quote: "You have to be able to accept failure to get better.",
      context: "On growth mindset"
    }
  ];

  const achievements = [
    { icon: Award, title: 'Time 100 Most Influential', year: '2005, 2013, 2017, 2018' },
    { icon: Star, title: 'Associated Press Male Athlete', year: '2013, 2016, 2020' },
    { icon: Heart, title: 'J. Walter Kennedy Award', year: '2017' },
    { icon: BookOpen, title: 'NAACP Jackie Robinson Award', year: '2014' }
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
            <Heart className="w-16 h-16 text-lebron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              More Than Basketball
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              LeBron's impact extends far beyond the court, transforming communities, advocating for justice, and inspiring the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section ref={impactRef} className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row`}
              >
                <div className="lg:w-1/2 relative">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute top-6 left-6 p-3 bg-black/80 backdrop-blur-sm rounded-full">
                    <area.icon className="w-8 h-8 text-lebron-gold" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-black/40 backdrop-blur-lg border border-white/10 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {area.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lebron-gold font-semibold text-lg mb-4">Key Achievements:</h3>
                    {area.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lebron-gold rounded-full" />
                        <span className="text-gray-300">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Recognition & Awards
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
              >
                <achievement.icon className="w-12 h-12 text-lebron-gold mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section ref={quotesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={quotesInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Words of Wisdom
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {inspirationalQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={quotesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300"
              >
                <blockquote className="text-xl font-semibold text-white mb-4 leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <cite className="text-lebron-gold text-sm font-medium">
                  {item.context}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-lebron-gold to-yellow-400 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Be Inspired, Make Impact
            </h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              LeBron's legacy shows us that greatness isn't just about personal achievement—it's about lifting others up and creating lasting change in the world.
            </p>
            <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105">
              Learn More About I PROMISE
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;