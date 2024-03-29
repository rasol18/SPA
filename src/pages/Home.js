import getData from "../utils/getData";


const Home = async () => {
    //llama la api//
    const characters = await getData();

    const view = `
    <div class="Characters"> 
        ${characters.results.map(character => 
            `
            <article class="Character-item"> 
            <a href="#/${character.id}/"> 
            <img src="${character.image}" alt="${character.name}">  </img>
            <h2>${character.name} </h2>
            </a>
            </article>`
        ).join('')}


       
    </div>
    `;
    return view
};
export default Home;