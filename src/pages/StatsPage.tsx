import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Trophy, Target, BarChart3 } from 'lucide-react';

const StatsPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [chartsRef, chartsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeFilter, setActiveFilter] = useState('career');

  const careerStats = [
    { season: '2003-04', points: 20.9, rebounds: 5.5, assists: 5.9 },
    { season: '2004-05', points: 27.2, rebounds: 7.4, assists: 7.2 },
    { season: '2005-06', points: 31.4, rebounds: 7.0, assists: 6.6 },
    { season: '2006-07', points: 27.3, rebounds: 6.7, assists: 6.0 },
    { season: '2007-08', points: 30.0, rebounds: 7.9, assists: 7.2 },
    { season: '2008-09', points: 28.4, rebounds: 7.6, assists: 7.2 },
    { season: '2009-10', points: 29.7, rebounds: 7.3, assists: 8.6 },
    { season: '2010-11', points: 26.7, rebounds: 7.5, assists: 7.0 },
    { season: '2011-12', points: 27.1, rebounds: 7.9, assists: 6.2 },
    { season: '2012-13', points: 26.8, rebounds: 8.0, assists: 7.3 },
    { season: '2013-14', points: 27.1, rebounds: 6.9, assists: 6.3 },
    { season: '2014-15', points: 25.3, rebounds: 6.0, assists: 7.4 },
    { season: '2015-16', points: 25.3, rebounds: 7.4, assists: 6.8 },
    { season: '2016-17', points: 26.4, rebounds: 8.6, assists: 8.7 },
    { season: '2017-18', points: 27.5, rebounds: 8.6, assists: 9.1 },
    { season: '2018-19', points: 27.4, rebounds: 8.5, assists: 8.3 },
    { season: '2019-20', points: 25.3, rebounds: 7.8, assists: 10.2 },
    { season: '2020-21', points: 25.0, rebounds: 7.7, assists: 7.8 },
    { season: '2021-22', points: 30.3, rebounds: 8.2, assists: 6.2 },
    { season: '2022-23', points: 28.9, rebounds: 8.3, assists: 6.8 }
  ];

  const teamStats = [
    { team: 'Cavaliers', points: 23119, color: '#722F37' },
    { team: 'Heat', points: 7804, color: '#98002E' },
    { team: 'Lakers', points: 8818, color: '#552583' }
  ];

  const achievements = [
    { category: 'Championships', count: 4, icon: Trophy, color: 'text-lebron-gold' },
    { category: 'Finals MVPs', count: 4, icon: Trophy, color: 'text-lebron-wine' },
    { category: 'Regular Season MVPs', count: 4, icon: Target, color: 'text-blue-400' },
    { category: 'All-Star Selections', count: 20, icon: BarChart3, color: 'text-purple-400' }
  ];

  const COLORS = ['#722F37', '#98002E', '#552583'];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section ref={headerRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
          >
            <TrendingUp className="w-16 h-16 text-lebron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The Numbers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Statistical excellence spanning over two decades. Explore the data behind the greatness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            {['career', 'playoffs', 'teams'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-lebron-gold text-black'
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.category}
                initial={{ opacity: 0, y: 50 }}
                animate={chartsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-black/60 transition-all duration-300"
              >
                <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-3`} />
                <div className={`text-3xl font-black ${achievement.color} mb-2`}>
                  {achievement.count}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {achievement.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section ref={chartsRef} className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Career Points Progression */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={chartsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Career Scoring Average</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={careerStats.slice(-10)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="season" 
                    stroke="#9CA3AF"
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="points" 
                    stroke="#FDB927" 
                    strokeWidth={3}
                    dot={{ fill: '#FDB927', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Points by Team */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={chartsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Career Points by Team</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={teamStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="points"
                  >
                    {teamStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-4 mt-4">
                {teamStats.map((team, index) => (
                  <div key={team.team} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-gray-300 text-sm">{team.team}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Triple-Double Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={chartsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Season Stats (2022-23)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { category: 'Points', value: 28.9, color: '#FDB927' },
                  { category: 'Rebounds', value: 8.3, color: '#722F37' },
                  { category: 'Assists', value: 6.8, color: '#552583' }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="category" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Bar dataKey="value" fill="#FDB927" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Career Totals */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={chartsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Career Totals</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Points</span>
                  <span className="text-2xl font-bold text-lebron-gold">39,742</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Rebounds</span>
                  <span className="text-2xl font-bold text-lebron-wine">10,783</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Assists</span>
                  <span className="text-2xl font-bold text-lebron-purple">10,346</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Games Played</span>
                  <span className="text-2xl font-bold text-blue-400">1,421</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Triple-Doubles</span>
                  <span className="text-2xl font-bold text-green-400">117</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsPage;