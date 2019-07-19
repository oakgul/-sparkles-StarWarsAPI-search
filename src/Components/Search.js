import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {

  
  
    search = async () => {
      const char = document.getElementById('character');
      let val = char.value;
      char.value = '';
      await axios.get(`https://swapi.co/api/people/${val}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('Aradığınız içerik bulunamadı, lütfen doğru yazdığınızdan emin olun !!');
      });
    }
  

  render() {
    return (
      <div className="row text-center">

        <div className="col-md-5"><input id='movie' className="form-control mr-sm-2" type="search" placeholder="Search a movie.." aria-label="Search"/>  
          </div>

        <div className="col-md-5"><input id='character' className="form-control mr-sm-2" type="search" placeholder="Search a character.." aria-label="Search"/>  
          </div>
          
        <div className="col-md-2"><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.search}>Search</button> 
          </div>
 
      </div>
    )
  }
}