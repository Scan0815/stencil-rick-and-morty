export class ServiceRickAndMorty{

  async get(){
    return await fetch("https://rickandmortyapi.com/api/character/").then((res) =>  res.json() );
  }

}
