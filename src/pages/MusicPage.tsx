import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, Music, Clock, User } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';

const MusicPage: React.FC = () => {
  const { songs, currentSong, isPlaying, currentTime, duration, playSong, pauseSong, resumeSong } = useMusic();
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [playlistRef, playlistInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = (song: any, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        pauseSong();
      } else {
        resumeSong();
      }
    } else {
      playSong(song);
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section ref={headerRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <Music className="w-16 h-16 text-lebron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The Bron Playlist
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stream the ultimate collection of LeBron-inspired tracks that capture the essence of greatness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-8 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Music className="w-5 h-5" />
              <span>{songs.length} tracks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Various Artists</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Playlist */}
      <section ref={playlistRef} className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
            {/* Playlist Header */}
            <div className="px-6 py-4 border-b border-white/10 bg-black/20">
              <div className="grid grid-cols-12 gap-4 text-gray-400 text-sm font-medium">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-6 md:col-span-5">Title</div>
                <div className="hidden md:block col-span-3">Artist</div>
                <div className="col-span-5 md:col-span-3 text-right">Duration</div>
              </div>
            </div>

            {/* Track List */}
            <div className="divide-y divide-white/5">
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={playlistInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer ${
                    currentSong?.id === song.id ? 'bg-lebron-gold/10' : ''
                  }`}
                  onClick={(e) => handlePlayPause(song, e)}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Track Number / Play Button */}
                    <div className="col-span-1 text-center">
                      {currentSong?.id === song.id && isPlaying ? (
                        <div className="w-4 h-4 mx-auto">
                          <div className="flex space-x-0.5 items-end h-4">
                            <div className="w-1 bg-lebron-gold animate-pulse" style={{ height: '60%' }} />
                            <div className="w-1 bg-lebron-gold animate-pulse" style={{ height: '100%', animationDelay: '0.1s' }} />
                            <div className="w-1 bg-lebron-gold animate-pulse" style={{ height: '40%', animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <span className={`text-sm ${currentSong?.id === song.id ? 'text-lebron-gold' : 'text-gray-400 group-hover:hidden'}`}>
                            {index + 1}
                          </span>
                          <Play className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </div>

                    {/* Song Info */}
                    <div className="col-span-6 md:col-span-5">
                      <div className="flex items-center space-x-3">
                        <img
                          src={song.coverArt}
                          alt={song.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="min-w-0">
                          <h3 className={`font-medium truncate ${
                            currentSong?.id === song.id ? 'text-lebron-gold' : 'text-white'
                          }`}>
                            {song.title}
                          </h3>
                          <p className="text-gray-400 text-sm truncate md:hidden">{song.artist}</p>
                        </div>
                      </div>
                    </div>

                    {/* Artist (Desktop) */}
                    <div className="hidden md:block col-span-3">
                      <p className="text-gray-400 truncate hover:text-white transition-colors">
                        {song.artist}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="col-span-5 md:col-span-3 text-right">
                      <span className="text-gray-400 text-sm">
                        {currentSong?.id === song.id && duration > 0 
                          ? formatTime(duration) 
                          : song.duration
                        }
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Play All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={playlistInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                playSong(songs[0]);
              }}
              className="inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-lebron-gold to-yellow-400 text-black font-bold rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <Play className="w-6 h-6" />
              <span>Play All</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;