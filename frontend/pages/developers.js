import React from 'react';

export default function Developers() {
  const developers = [
    { name: 'Damaris', role: 'Full Stack Developer', image: 'Damaris.png' },
    { name: 'Dani', role: 'Full Stack Developer', image: 'Dani.png' },
    { name: 'Karla', role: 'Full Stack Developer', image: 'Karla.png' },
    { name: 'Lizzie', role: 'Full Stack Developer', image: 'Lizzie.png' },
    { name: 'Saraí', role: 'Full Stack Developer', image: 'Sarai.png' },
  ];

  return (
    <div className="developers">
      <h2 className="developers-title">Our Developers</h2>
      <div className="developers-list">
        {developers.map((developer) => (
          <div key={developer.name} className="developer-card">
            <img
              src={`/images/${developer.image}`}
              alt={developer.name}
              style={{ height: 150, width: 150 }}
            />
            <h3 className="developer-name">{developer.name}</h3>
            <p className="developer-role">{developer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
