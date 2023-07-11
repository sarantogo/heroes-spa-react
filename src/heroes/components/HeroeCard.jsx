/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const HeroeCard = ({ heroe }) => {
  const heroeImageUrl = `/assets/heroes/${heroe.id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroeImageUrl}
              alt={heroe.superhero}
              className="card-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">{heroe.alter_ego}</p>
              {heroe.alter_ego !== heroe.characters && (
                <p className="card-text">{heroe.characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>
              <Link to={`/heroe/${heroe.id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
