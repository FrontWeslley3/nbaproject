const players = [
    {
        name: "LeBron James",
        team: "Los Angeles Lakers",
        position: "Ala-pivô",
        image: "img/lebron.jpeg",
        biography: "LeBron James é considerado um dos maiores jogadores de todos os tempos. Começou sua carreira no Cleveland Cavaliers, passou pelo Miami Heat, voltou aos Cavaliers e agora joga nos Lakers. Quatro vezes campeão da NBA, quatro vezes MVP (Jogador Mais Valioso) e diversos prêmios individuais. Conhecido por sua versatilidade, força física e inteligência de jogo.",
        logoClass: "lakers"
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        position: "Armador",
        image: "img/30.jpeg",
        biography: "Considerado o melhor arremessador de três pontos da história da NBA. Revolucionou o jogo com sua técnica de arremesso e precisão. Múltiplos campeões com o Golden State Warriors, vencedor de dois MVPs consecutivos (2015 e 2016). Fundamental para a transformação do Warriors no time dominante dos anos 2010.",
        logoClass: "warriors"
    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        position: "Ala-pivô",
        image: "img/giannis.jpeg",
        biography: "Nascido na Grécia, Giannis transformou-se em um dos jogadores mais dominantes da NBA. Campeão em 2021 com o Milwaukee Bucks, ganhou dois prêmios de MVP (2019 e 2020). Conhecido como 'Greek Freak' por sua combinação única de tamanho, força e agilidade.",
        logoClass: "bucks"
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns",
        position: "Ala",
        image: "img/kevin.jpeg",
        biography: "Um dos maiores pontuadores da história da NBA. Começou no Seattle SuperSonics/Oklahoma City Thunder, passou pelo Golden State Warriors e agora nos Phoenix Suns. Campeão duas vezes com o Warriors, dois MVPs de finais. Considerado um dos atacantes mais versáteis da história.",
        logoClass: "suns"
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks",
        position: "Armador",
        image: "img/luka.jpeg",
        biography: "Jovem prodígio esloveno que rapidamente se tornou uma das maiores estrelas da NBA. Chegou direto da Europa para o Dallas Mavericks e imediatamente mostrou seu talento excepcional. Conhecido por sua visão de jogo, passes precisos e capacidade de pontuação.",
        logoClass: "mavericks"
    },
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        position: "Pivô",
        image: "img/joel.jpeg",
        biography: "Um dos pivôs mais dominantes da era moderna. Nascido Camarões, Embiid transformou o Philadelphia 76ers com sua combinação única de força física, habilidade técnica e presença defensiva. Vencedor da MVP em 2023, é conhecido por seu jogo versátil que inclui arremessos de média distância e defesa intimidadora no garrafão.",
        logoClass: "sixers"
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets",
        position: "Pivô",
        image: "img/jokic.jpeg",
        biography: "O primeiro pivô da história a ganhar MVP por votação unânime por dois anos consecutivos. Jokić, da Sérvia, revolucionou a posição de pivô com sua incrível visão de jogo e passes. Campeão da NBA em 2023, é conhecido como o 'Nugget Maestro' por sua capacidade única de orquestrar o jogo ofensivo.",
        logoClass: "nuggets"
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics",
        position: "Ala",
        image: "img/jayson.jpeg",
        biography: "Uma das jovens estrelas mais brilhantes da NBA. Tatum é o rosto da nova geração dos Boston Celtics. Conhecido por sua técnica de arremesso suave, capacidade de criar jogadas e presença defensiva. Múltiplas vezes All-Star, tem sido fundamental para manter os Celtics como uma franquia competitiva.",
        logoClass: "celtics"
    },
    {
        name: "Ja Morant",
        team: "Memphis Grizzlies",
        position: "Armador",
        image: "img/ja.jpeg",
        biography: "Um dos jogadores mais eletrizantes da NBA. Morant revolucionou o jogo dos Memphis Grizzlies com suas jogadas explosivas e enterradas espetaculares. Jovem talento que ganhou o prêmio de Novato do Ano, rapidamente se estabeleceu como uma das principais estrelas jovens da liga.",
        logoClass: "grizzlies"
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers",
        position: "Armador",
        image: "img/harden.jpeg",
        biography: "Um dos melhores atacantes da NBA, Harden é conhecido por sua capacidade de pontuação e passes nos momentos decisivos. Liderou os Phoenix Suns até as finais da NBA em 2021, mostrando que é muito mais do que apenas um marcador de pontos. Múltiplas vezes All-Star, continua sendo uma das principais estrelas da liga.",
        logoClass: "clippers"
    },
    {
        name: "Damian Lillard",
        team: "Milwaukee Bucks",
        position: "Armador",
        image: "img/damian.jpeg",
        biography: "Conhecido como 'Dame Time', Lillard é sinônimo de clutch na NBA. Jogador dos Portland Trail Blazers por anos, recentemente trocado para o Milwaukee Bucks. Famoso por seus arremessos de longa distância em momentos cruciais, Lillard é considerado um dos armadores mais perigosos da liga.",
        logoClass: "bucks"
    },
    {
        name: "Zion Williamson",
        team: "New Orleans Pelicans",
        position: "Ala-pivô",
        image: "img/zion.jpeg",
        biography: "Uma força atlética da natureza, Zion chegou à NBA como um dos maiores prospects de todos os tempos. Apesar de lutar contra lesões, quando está em quadra, demonstra um poder físico e agilidade únicos. Suas enterradas são legendárias e seu potencial ainda é visto como imenso.",
        logoClass: "pelicans"
    },
    {
        name: "Kawhi Leonard",
        team: "Los Angeles Clippers",
        position: "Ala",
        image: "img/leonard.jpeg",
        biography: "Um dos melhores defensores da NBA, Kawhi também é um pontuador eficiente. Suas atuações decisivas nos playoffs o tornaram um dos jogadores mais respeitados da liga.",
        logoClass: "clippers"
    },
    {
        name: "Jimmy Butler",
        team: "Miami Heat",
        position: "Ala",
        image: "img/jimmy.jpeg",
        biography: "Conhecido por sua intensidade e mentalidade competitiva, 'Jimmy Buckets' é o coração e a alma do Miami Heat. Ele eleva seu jogo nos momentos mais importantes.",
        logoClass: "heat"
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers",
        position: "Ala-pivô",
        image: "img/antoni.jpeg",
        biography: "Davis é um defensor de elite e uma máquina de pontuar no garrafão. Quando saudável, ele é uma das peças mais dominantes do basquete.",
        logoClass: "lakers"
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns",
        position: "Ala-armador",
        image: "img/booker.jpeg",
        biography: "Um dos pontuadores mais habilidosos da NBA, Booker tem uma habilidade excepcional para criar e converter arremessos em momentos críticos.",
        logoClass: "suns"
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks",
        position: "Armador",
        image: "img/kirye.jpeg",
        biography: "Um dos dribladores mais habilidosos da história, Kyrie combina criatividade, precisão e controle para destruir defesas adversárias.",
        logoClass: "mavericks"
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers",
        position: "Ala-armador",
        image: "img/donovan.jpeg",
        biography: "Mitchell é um pontuador explosivo que combina atleticismo com habilidade de finalizar em qualquer lugar da quadra. Ele é uma peça central para os jovens Cavaliers.",
        logoClass: "cavaliers"
    },
    {
        name: "Zach LaVine",
        team: "Chicago Bulls",
        position: "Ala-armador",
        image: "img/lavine.jpeg",
        biography: "LaVine é conhecido por suas enterradas espetaculares e habilidade ofensiva. Ele continua sendo uma das principais estrelas do Chicago Bulls.",
        logoClass: "bulls"
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns",
        position: "Ala-armador",
        image: "img/beal.jpeg",
        biography: "Um dos melhores pontuadores da liga, Beal combina habilidade no arremesso com a capacidade de criar oportunidades ofensivas para si mesmo.",
        logoClass: "suns"
    },
    // Continue adicionando mais jogadores
];

const playersGrid = document.getElementById('playersGrid');
const searchInput = document.getElementById('searchPlayers');
const teamFilter = document.getElementById('teamFilter');
const playerDetailsOverlay = document.getElementById('playerDetailsOverlay');
const closeDetailsBtn = document.getElementById('closeDetails');

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.classList.add('player-card');
    card.setAttribute('data-team', player.team);

    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <div class="player-hover-info">
            <h3>${player.name}</h3>
            <p>${player.team}</p>
        </div>
    `;

    card.addEventListener('click', () => showPlayerDetails(player));
    return card;
}

function showPlayerDetails(player) {
    document.getElementById('playerDetailsImage').src = player.image;
    document.getElementById('playerDetailsName').textContent = player.name;
    document.getElementById('playerDetailsTeam').textContent = `Time: ${player.team}`;
    document.getElementById('playerDetailsPosition').textContent = `Posição: ${player.position}`;
    document.getElementById('playerDetailsbiography').textContent = player.biography;

    playerDetailsOverlay.style.display = 'flex';
}

function closePlayerDetails() {
    playerDetailsOverlay.style.display = 'none';
}

function populateTeamFilter() {
    const teams = [...new Set(players.map(player => player.team))];
    teams.sort().forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

function filterPlayers() {
    const searchTerm = searchInput.value.toLowerCase();
    const teamSelected = teamFilter.value;

    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchTerm) &&
        (teamSelected === '' || player.team === teamSelected)
    );

    renderPlayers(filteredPlayers);
}

function renderPlayers(playerList) {
    playersGrid.innerHTML = '';
    playerList.forEach(player => {
        playersGrid.appendChild(createPlayerCard(player));
    });
}

// Inicialização
renderPlayers(players);
populateTeamFilter();
searchInput.addEventListener('input', filterPlayers);
teamFilter.addEventListener('change', filterPlayers);
closeDetailsBtn.addEventListener('click', closePlayerDetails);
playerDetailsOverlay.addEventListener('click', (e) => {
    if (e.target === playerDetailsOverlay) {
        closePlayerDetails();
    }
});

