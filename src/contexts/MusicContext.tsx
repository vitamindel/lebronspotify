import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverArt: string;
  audioUrl: string;
}

interface MusicContextType {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  audioRef: React.RefObject<HTMLAudioElement>;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  resumeSong: () => void;
  nextSong: () => void;
  previousSong: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
}

const songs: Song[] = [
  {
    id: '1',
    title: "That's Bron",
    artist: 'ilyaugust',
    duration: '3:45',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/thatsbron.mp3'
  },
  {
    id: '2',
    title: 'Lebron Hour',
    artist: 'ilyaugust',
    duration: '3:30',
    coverArt: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/lebronhour.mp3'
  },
  {
    id: '3',
    title: 'LeRansom',
    artist: 'fnb.gang8',
    duration: '3:15',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/leransom.mp3'
  },
  {
    id: '4',
    title: "thinking 'bout lebron",
    artist: 'ilyaugust',
    duration: '3:20',
    coverArt: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/thinkingaboutlebron.mp3'
  },
  {
    id: '5',
    title: 'The Lebron I Used to Know',
    artist: 'ilyaugust',
    duration: '3:25',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/thatslebronusedtk.mp3'
  },
  {
    id: '6',
    title: 'Toward the Bron',
    artist: 'ilyaugust',
    duration: '3:30',
    coverArt: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/towardthelebron.mp3'
  },
  {
    id: '7',
    title: 'Le-Upside Down',
    artist: 'atp200520',
    duration: '3:25',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/leupsidedown.mp3'
  },
  {
    id: '8',
    title: 'No Bron',
    artist: 'ilyaugust',
    duration: '3:25',
    coverArt: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/nobron.mp3'
  },
  {
    id: '9',
    title: 'Lebron in 5',
    artist: 'ramon angelo',
    duration: '0:31',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/lakersin5.mp3'
  },
  {
    id: '10',
    title: 'Brontastic',
    artist: 'ilyaugust',
    duration: '1:03',
    coverArt: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/brontastic.mp4'
  },
  {
    id: '11',
    title: "I'd Catch a LeNade for You",
    artist: 'ilyaugust',
    duration: '0:45',
    coverArt: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&crop=face',
    audioUrl: '/lenade.mp3'
  }
];

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Audio event handlers
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    nextSong();
  };

  const handleError = (error: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error('Audio error:', error);
    setIsPlaying(false);
  };

  const playSong = (song: Song) => {
    // Stop any currently playing audio first
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    setCurrentSong(song);
    setIsPlaying(true);
    setCurrentTime(0);
    
    // Set the audio source and play
    if (audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.load();
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    }
  };

  const pauseSong = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const resumeSong = () => {
    if (!currentSong) return;
    
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    }
  };

  const nextSong = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  };

  const previousSong = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    playSong(songs[prevIndex]);
  };

  const seekTo = (time: number) => {
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <MusicContext.Provider value={{
      songs,
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      audioRef,
      playSong,
      pauseSong,
      resumeSong,
      nextSong,
      previousSong,
      seekTo,
      setVolume
    }}>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
        preload="metadata"
      />
      {children}
    </MusicContext.Provider>
  );
};