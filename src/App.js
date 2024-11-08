import React, { useEffect } from 'react';
import MoodBoard from './components/MoodBoard';
import MemeMessaging from './components/MemeMessaging';
import StreakCounter from './components/StreakCounter';

function App() {

  return (
    <div className="app bg-pastelBlue min-h-screen flex flex-col items-center">
      <header className="text-pastelPurple text-3xl font-bold mt-8">MeetQ</header>
      <MoodBoard />
      <MemeMessaging />
      <StreakCounter />
      <footer className="text-pastelYellow mt-auto py-4">Alchemy and Magic Awaits!</footer>
    </div>
  );
}

export default App;
