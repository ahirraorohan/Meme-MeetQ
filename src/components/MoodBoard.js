
import React, { useState } from 'react';

function MoodBoard() {
  const [images, setImages] = useState([]);

  const addImage = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="mood-board bg-pastelPink p-4 rounded-md">
      <h2 className="text-center text-pastelPurple text-xl">My Mood Board</h2>
      <input type="file" onChange={addImage} className="my-2" />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt="Mood" className="rounded-md" />
            <button
              className="absolute top-0 right-0 bg-pastelYellow text-red-500 rounded-full p-1"
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodBoard;

