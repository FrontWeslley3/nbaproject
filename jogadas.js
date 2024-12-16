const players = [
    {
        name: "LeBron James",
        team: "Los Angeles Lakers",
        image: "img/lebron.jpeg",
        video: "img/james video.mp4"
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        image: "img/30.jpeg",
        video: "img/steph.mp4"
    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        image: "img/giannis.jpeg",
        video: "img/gianis.mp4"
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns",
        image: "img/kevin.jpeg",
        video: "img/durant.mp4"
    },
    {
        name: "Luka Doncić",
        team: "Dallas Mavericks",
        image: "img/luka.jpeg",
        video: "img/luka.mp4"
    },
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        image: "img/joel.jpeg",
        video: "img/embid.mp4"
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets",
        image: "img/jokic.jpeg",
        video: "img/jokic.mp4"
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics",
        image: "img/jayson.jpeg",
        video: "img/jt.mp4"
    }
];

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.classList.add('player-card');
    
    const neonBorder = document.createElement('div');
    neonBorder.classList.add('neon-border');
    
    const image = document.createElement('img');
    image.src = player.image;
    image.alt = player.name;
    image.classList.add('player-image');
    
    const info = document.createElement('div');
    info.classList.add('player-info');
    
    const name = document.createElement('div');
    name.classList.add('player-name');
    name.textContent = player.name;
    
    const team = document.createElement('div');
    team.classList.add('player-team');
    team.textContent = player.team;
    
    info.appendChild(name);
    info.appendChild(team);
    
    card.appendChild(neonBorder);
    card.appendChild(image);
    card.appendChild(info);
    
    // Add click event to show video
    card.addEventListener('click', () => {
        const modal = document.getElementById('video-modal');
        const videoPlayer = document.getElementById('player-video');
        const videoInfo = document.getElementById('video-info');
        
        videoPlayer.src = player.video;
        videoInfo.textContent = `${player.name} - ${player.team} Highlights`;
        
        modal.style.display = 'block';
    });
    
    return card;
}

function renderPlayers() {
    const container = document.getElementById('players-container');
    players.forEach(player => {
        const playerCard = createPlayerCard(player);
        container.appendChild(playerCard);
    });

    // Close modal functionality
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const videoPlayer = document.getElementById('player-video');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderPlayers);
