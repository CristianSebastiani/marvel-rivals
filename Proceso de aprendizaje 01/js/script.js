fetch('https://raw.githubusercontent.com/CristianSebastiani/marvel-rivals/main/Marvel-Rivals.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('contenedor-personajes');

        data.personajes.forEach(p => {
            const card = document.createElement('div');
            card.className = 'personaje';
            card.innerHTML = `
                <img src="${p.imagen}" alt="${p.nombre}">
                <h2>${p.nombre}</h2>
                <p class="rol">${p.rol}</p>
                <p class="descripcion">${p.descripcion}</p>
                <p class="habilidades"><b>Habilidades:</b> ${p.habilidades.join(', ')}</p>
            `;
            contenedor.appendChild(card);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
