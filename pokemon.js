const container = document.querySelector('#container');
const poki = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (let i = 1; i < 152; i++) {
    const img = document.createElement('img');
    img.src = `${poki}${i}.png`;
    container.appendChild(img);
}