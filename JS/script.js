class CJugador{
    constructor(){
        this.playersTeam = [];
    }

    addPlayers(name, position, age, height, weight, nationality){
        this.playersTeam.push({name, position, age, height, weight, nationality});
    }

    createTable(){
        const table = document.querySelector('#playersTable tbody');
        table.innerHTML = '';

        this.playersTeam.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.position}</td>
            <td>${player.age}</td>
            <td>${player.height}</td>
            <td>${player.weight}</td>
            <td>${player.nationality}</td>
            `;
            table.appendChild(row);
        });
    }

    argePlayers(){
        let argeArray = [];
        for(const player of this.playersTeam){
            if(player.nationality === "Argentino"){
                argeArray.push(" " + player.name + " ");
            }
        }
        document.write("Los jugadores de nacionalidad argentina son: " + argeArray + "<br>");
    }

    playersWeight(){
        let weight = [];
        for(const player of this.playersTeam){
            if(player.weight >= 75 && player.weight <= 80){
                weight.push(" " + player.name + " ");
            }
        }
        document.write("Los jugadores cuyo peso está entre 75 y 80KG's son: " + weight + "<br>");
    }

    mostTaller(){
        let checkpoint = 0, checkName = [];


        for(const player of this.playersTeam){
            if(player.height >= checkpoint){
                checkpoint = player.height;
                checkName.push(" " + player.name);
            }
        }
        document.write("El jugador más alto es: " + checkName);
    }
}

const players = new CJugador();

players.addPlayers("Fabio1", "G", 43, 1.88, 86, "Brasil");
players.addPlayers("Marlon4", "D", 28, 1.83, 78, "Brasil");
players.addPlayers("Marcelo12", "D", 35, 1.73, 72, "Brasil");
players.addPlayers("Nino33", "D", 26, 1.88, 82, "Brasil");
players.addPlayers("John Kennedy9", "A", 21, 1.73, 71, "Brasil");
players.addPlayers("Keno11", "A", 34, 1.78, 72, "Brasil");
players.addPlayers("Germán Cano14", "A", 35, 1.78, 81, "Argentino");

players.createTable();
players.argePlayers();
players.playersWeight();
players.mostTaller();