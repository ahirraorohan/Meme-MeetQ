
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function MemeMessaging() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div className="meme-messaging bg-pastelYellow p-4 rounded-md mt-4 w-full max-w-md">
      <h2 className="text-pastelPurple text-xl">Send a Meme Message</h2>
      <textarea
        className="w-full mt-2 p-2 border border-pastelPurple rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="bg-pastelBlue text-pastelPurple rounded-md p-1 mt-2"
      >
        {showEmojiPicker ? 'Hide Emojis' : 'Show Emojis'}
      </button>
      {showEmojiPicker && (
        <EmojiPicker onEmojiClick={handleEmojiClick} pickerStyle={{ width: '100%' }} />
      )}
    </div>
  );
}

export default MemeMessaging;
