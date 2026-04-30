import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const ALlPhotosPage = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  const allPhotos = await res.json()

  return (
    <div>
      <h1 className='tex-center mb-4 mt-4 text-3xl text-center'>All Photos</h1>

      <div className='grid grid-cols-3 gap-4'>
        {allPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>

    </div>
  );
};

export default ALlPhotosPage;