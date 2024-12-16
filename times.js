const teams = [
    // Western Conference
    {
        name: "Golden State Warriors",
        conference: "Western",
        logoClass: "warriors",
        description: "Franquia dominante na última década, com múltiplos títulos recentes e um estilo de jogo revolucionário.",
        extraInfo: "Conhecida pelo seu jogo de arremessos de três pontos e pela formação do 'Death Lineup'."
    },
    {
        name: "Los Angeles Lakers",
        conference: "Western",
        logoClass: "lakers",
        description: "Franquia histórica com 16 campeonatos da NBA, uma das mais reconhecidas mundialmente.",
        extraInfo: "Jogadores lendários como Magic Johnson, Kobe Bryant e LeBron James marcaram época no time."
    },
    {
        name: "Los Angeles Clippers",
        conference: "Western",
        logoClass: "clippers",
        description: "Equipe de Los Angeles que busca estabelecer sua própria identidade no competitivo mercado de basquete californiano.",
        extraInfo: "Nos últimos anos, tem construído um elenco competitivo e ambicioso."
    },
    {
        name: "Phoenix Suns",
        conference: "Western",
        logoClass: "suns",
        description: "Equipe que ressurgiu nos últimos anos como uma potência no Oeste.",
        extraInfo: "Liderada por jogadores como Chris Paul e Devin Booker, alcançou as finais da NBA em 2021."
    },
    {
        name: "Sacramento Kings",
        conference: "Western",
        logoClass: "kings",
        description: "Uma das franquias mais antigas da NBA, com história rica no basquete.",
        extraInfo: "Passou por um período de reconstrução e busca voltar à sua antiga glória."
    },
    {
        name: "Dallas Mavericks",
        conference: "Western",
        logoClass: "mavericks",
        description: "Franquia que conquistou seu primeiro título em 2011 sob o comando de Dirk Nowitzki.",
        extraInfo: "Continua sendo uma equipe competitiva com Luka Dončić como principal estrela."
    },
    {
        name: "Houston Rockets",
        conference: "Western",
        logoClass: "rockets",
        description: "Franquia histórica com dois títulos da NBA, conhecida por seu estilo de jogo inovador.",
        extraInfo: "Passou por uma fase de reconstrução após a era de James Harden."
    },
    {
        name: "Memphis Grizzlies",
        conference: "Western",
        logoClass: "grizzlies",
        description: "Equipe jovem e talentosa, com um núcleo promissor liderado por Ja Morant.",
        extraInfo: "Tem se estabelecido como uma força emergente na Conferência Oeste."
    },
    {
        name: "New Orleans Pelicans",
        conference: "Western",
        logoClass: "pelicans",
        description: "Equipe jovem com grande potencial, tendo jovens talentos como Zion Williamson e Brandon Ingram.",
        extraInfo: "Busca consolidar-se como uma potência no Oeste."
    },
    {
        name: "San Antonio Spurs",
        conference: "Western",
        logoClass: "spurs",
        description: "Uma das franquias mais bem-sucedidas da NBA, com cinco títulos.",
        extraInfo: "Conhecida por seu sistema de jogo e desenvolvimento de jogadores."
    },
    {
        name: "Oklahoma City Thunder",
        conference: "Western",
        logoClass: "thunder",
        description: "Equipe em fase de reconstrução com muitas escolhas de draft e jovens talentos.",
        extraInfo: "Passou por uma transformação após a era de Kevin Durant e Russell Westbrook."
    },
    {
        name: "Minnesota Timberwolves",
        conference: "Western",
        logoClass: "timberwolves",
        description: "Equipe jovem com talentos emergentes como Karl-Anthony Towns.",
        extraInfo: "Busca retomar a relevância na Conferência Oeste."
    },
    {
        name: "Portland Trail Blazers",
        conference: "Western",
        logoClass: "trail-blazers",
        description: "Franquia histórica do noroeste dos EUA, com uma base de fãs apaixonada.",
        extraInfo: "Teve momentos memoráveis com jogadores como Damian Lillard."
    },
    {
        name: "Utah Jazz",
        conference: "Western",
        logoClass: "jazz",
        description: "Equipe conhecida por seu sistema de jogo consistente e desenvolvimento de jogadores.",
        extraInfo: "Passou por uma reconstrução recente, mas mantém sua identidade competitiva."
    },
    
    // Eastern Conference
    {
        name: "Boston Celtics",
        conference: "Eastern",
        logoClass: "celtics",
        description: "Franquia mais vitoriosa da NBA, com 17 títulos de campeonato.",
        extraInfo: "Fundada em 1946, tem uma história de grandes jogadores como Bill Russell e Larry Bird."
    },
    {
        name: "Brooklyn Nets",
        conference: "Eastern",
        logoClass: "nets",
        description: "Equipe de Nova York com um elenco de estrelas de alto calibre.",
        extraInfo: "Tem buscado títulos com jogadores como Kevin Durant e Kyrie Irving."
    },
    {
        name: "New York Knicks",
        conference: "Eastern",
        logoClass: "knicks",
        description: "Franquia histórica de Nova York, com uma base de fãs apaixonada.",
        extraInfo: "Busca retornar ao status de equipe de elite que tinha nas décadas passadas."
    },
    {
        name: "Philadelphia 76ers",
        conference: "Eastern",
        logoClass: "sixers",
        description: "Franquia histórica com grandes jogadores em sua história.",
        extraInfo: "Construiu um time competitivo em torno de Joel Embiid e James Harden."
    },
    {
        name: "Miami Heat",
        conference: "Eastern",
        logoClass: "heat",
        description: "Equipe conhecida por sua cultura de excelência e disciplina.",
        extraInfo: "Múltiplos títulos e sempre competitiva, com uma filosofia de jogo única."
    },
    {
        name: "Chicago Bulls",
        conference: "Eastern",
        logoClass: "bulls",
        description: "Franquia legendária, marcada pela era de Michael Jordan.",
        extraInfo: "Continua sendo uma das equipes mais reconhecidas globalmente."
    },
    {
        name: "Milwaukee Bucks",
        conference: "Eastern",
        logoClass: "bucks",
        description: "Equipe que conquistou o título em 2021 liderada por Giannis Antetokounmpo.",
        extraInfo: "Considerada uma das potências atuais da Conferência Leste."
    },
    {
        name: "Cleveland Cavaliers",
        conference: "Eastern",
        logoClass: "cavaliers",
        description: "Franquia que viveu momentos épicos com LeBron James e busca nova identidade.",
        extraInfo: "Tem jovens talentos promissores como Darius Garland."
    },
    {
        name: "Indiana Pacers",
        conference: "Eastern",
        logoClass: "pacers",
        description: "Equipe tradicional do meio-oeste americano, sempre competitiva.",
        extraInfo: "Conhecida por seu estilo de jogo disciplinado e consistente."
    },
    {
        name: "Detroit Pistons",
        conference: "Eastern",
        logoClass: "pistons",
        description: "Franquia histórica com três títulos da NBA.",
        extraInfo: "Passou por uma fase de reconstrução e desenvolvimento de jovens talentos."
    },
    {
        name: "Toronto Raptors",
        conference: "Eastern",
        logoClass: "raptors",
        description: "Primeiro time campeão da NBA fora dos Estados Unidos.",
        extraInfo: "Conquistou o título em 2019 com Kawhi Leonard, marcando história."
    },
    {
        name: "Atlanta Hawks",
        conference: "Eastern",
        logoClass: "hawks",
        description: "Equipe jovem e talentosa, com jogadores promissores.",
        extraInfo: "Tem potencial de crescimento e desenvolvimento."
    },
    {
        name: "Charlotte Hornets",
        conference: "Eastern",
        logoClass: "hornets",
        description: "Equipe em desenvolvimento, buscando estabelecer sua identidade.",
        extraInfo: "Tem jovens talentos e potencial de crescimento."
    },
    {
        name: "Washington Wizards",
        conference: "Eastern",
        logoClass: "wizards",
        description: "Franquia histórica com momentos memoráveis na NBA.",
        extraInfo: "Busca consistência e relevância na Conferência Leste."
    },
    {
        name: "Orlando Magic",
        conference: "Eastern",
        logoClass: "magic",
        description: "Equipe em fase de reconstrução com foco em jovens talentos.",
        extraInfo: "Passou por transformações significativas nos últimos anos."
    }
];
  // Continue ad];
const teamsGrid = document.getElementById('teamsGrid');
const searchInput = document.getElementById('searchTeams');
const conferenceFilter = document.getElementById('conferenceFilter');
const teamDetails = document.getElementById('teamDetails');
const overlay = document.getElementById('overlay');
const closeDetails = document.getElementById('closeDetails');

function createTeamCard(team) {
    const card = document.createElement('div');
    card.classList.add('team-card');
    card.setAttribute('data-conference', team.conference);
    
    card.innerHTML = `
        <div class="team-logo ${team.logoClass}"></div>
        <div class="team-info">
            <h3>${team.name}</h3>
            <p>Conferência ${team.conference}</p>
        </div>
    `;

    card.addEventListener('click', () => showTeamDetails(team));
    return card;
}

function showTeamDetails(team) {
    document.getElementById('teamDetailsName').textContent = team.name;
    document.getElementById('teamDetailsConference').textContent = `Conferência ${team.conference}`;
    document.getElementById('teamDetailsDescription').textContent = team.description;
    document.getElementById('teamDetailsExtraInfo').textContent = team.extraInfo;
    
    const detailsLogo = document.getElementById('teamDetailsLogo');
    detailsLogo.className = 'team-details-logo';
    detailsLogo.classList.add(team.logoClass);

    teamDetails.classList.add('active');
    overlay.classList.add('active');
}

function closeTeamDetails() {
    teamDetails.classList.remove('active');
    overlay.classList.remove('active');
}

function renderTeams(filteredTeams) {
    teamsGrid.innerHTML = '';
    filteredTeams.forEach(team => {
        teamsGrid.appendChild(createTeamCard(team));
    });
}

function filterTeams() {
    const searchTerm = searchInput.value.toLowerCase();
    const conferenceSelected = conferenceFilter.value;

    const filteredTeams = teams.filter(team => 
        team.name.toLowerCase().includes(searchTerm) &&
        (conferenceSelected === '' || team.conference === conferenceSelected)
    );

    renderTeams(filteredTeams);
}

// Inicialização
renderTeams(teams);
searchInput.addEventListener('input', filterTeams);
conferenceFilter.addEventListener('change', filterTeams);
closeDetails.addEventListener('click', closeTeamDetails);
overlay.addEventListener('click', closeTeamDetails);
