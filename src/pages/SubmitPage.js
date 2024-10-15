import React from 'react';

const Submit = () => (
  <>
    <form>
      <div className='titre'>
        <h1>Créer un compte</h1>
      </div>
      <p>C’est simple et rapide.</p>
      <hr />
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" id="firstName" placeholder="Prénom" aria-label="Prénom" required />
        </div>
        <div className="col">
          <input type="text" className="form-control" id="lastName" placeholder="Nom de famille" aria-label="Nom de famille" required />
        </div>
        <div className="pseudo">
          <input type="text" className="form-control" id="pseudo" placeholder="Pseudo" aria-label="Pseudo" required />
        </div>
      </div>
      <div className="col">
        <input type="text" className="form-control" id="emailOrPhone" placeholder="Numéro mobile ou e-mail" aria-label="Numéro mobile ou e-mail" required />
      </div>
      <div className="col">
      <label htmlFor="password">Votre date de naissance</label>
        <input type="date" id="dob" name="dob" required />
      </div>
      <br></br>
      <div className="col">
        <input type="password" className="form-control" id="password" placeholder="Mot de passe" aria-label="Mot de passe" required />
      </div>
      <hr></hr>
      <button type="submit" className="btn btn-primary">S'inscrire</button>
    </form>
  </>
);

export default Submit;
