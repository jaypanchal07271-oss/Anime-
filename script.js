const animeData = [
  {
    title: "Attack on Titan",
    year: "2013",
    type: "TV Series",
    genre: "Action / Drama / Dark Fantasy",
    studio: "Wit Studio",
    episodes: "87 Episodes",
    status: "Completed",
    score: "9.1",
    summary:
      "Humanity lives behind giant walls to survive the terrifying Titans, but when the walls fall, Eren Yeager and his friends are thrown into a brutal war that uncovers the world’s darkest secrets. The story blends survival, rebellion, and political betrayal in a deeply emotional and intense journey.",
    cover:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    ratings: {
      imdb: "9.1",
      mal: "8.8",
      crunchyroll: "4.9/5"
    },
    characters: [
      {
        name: "Eren Yeager",
        role: "Main Protagonist",
        image:
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
        description: "A fierce and determined fighter driven by vengeance and the truth."
      },
      {
        name: "Mikasa Ackerman",
        role: "Combat Specialist",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        description: "Highly skilled and loyal, she protects her loved ones without hesitation."
      },
      {
        name: "Levi Ackerman",
        role: "Captain of the Scouts",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        description: "A disciplined and terrifyingly efficient leader with unmatched precision."
      }
    ]
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    year: "2009",
    type: "TV Series",
    genre: "Adventure / Fantasy / Action",
    studio: "Bones",
    episodes: "64 Episodes",
    status: "Completed",
    score: "9.0",
    summary:
      "After failing to resurrect their mother through alchemy, Edward and Alphonse Elric lose parts of their bodies and begin a dangerous journey to reclaim what they have lost. Their quest reveals a deeper conspiracy and tests the moral cost of human ambition.",
    cover:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80",
    ratings: {
      imdb: "9.1",
      mal: "9.1",
      crunchyroll: "4.9/5"
    },
    characters: [
      {
        name: "Edward Elric",
        role: "Alchemist",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        description: "A brilliant and stubborn alchemist with an unshakable will."
      },
      {
        name: "Alphonse Elric",
        role: "Brother",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
        description: "Gentle and compassionate, he carries the family’s dreams in his heart."
      },
      {
        name: "Winry Rockbell",
        role: "Engineer",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        description: "A fearless mechanic whose support keeps Edward moving forward."
      }
    ]
  },
  {
    title: "Demon Slayer",
    year: "2019",
    type: "TV Series",
    genre: "Action / Fantasy / Adventure",
    studio: "ufotable",
    episodes: "44 Episodes",
    status: "Ongoing",
    score: "8.9",
    summary:
      "When Tanjiro Kamado’s family is slaughtered and his sister becomes a demon, he joins the Demon Slayer Corps. With bravery, kindness, and formidable skill, he challenges the darkness threatening humanity and searches for a way to save his sister.",
    cover:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    ratings: {
      imdb: "8.7",
      mal: "8.7",
      crunchyroll: "4.8/5"
    },
    characters: [
      {
        name: "Tanjiro Kamado",
        role: "Demon Slayer",
        image:
          "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&q=80",
        description: "A compassionate warrior who fights with emotional strength and discipline."
      },
      {
        name: "Nezuko Kamado",
        role: "Demon Sister",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        description: "A gentle demon with incredible power and a deep bond with her brother."
      },
      {
        name: "Zenitsu Agatsuma",
        role: "Thunder Breathing User",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        description: "A nervous but incredibly talented swordsman with lightning-fast reflexes."
      }
    ]
  },
  {
    title: "One Punch Man",
    year: "2015",
    type: "TV Series",
    genre: "Comedy / Action / Superhero",
    studio: "Madhouse",
    episodes: "24 Episodes",
    status: "Completed",
    score: "8.8",
    summary:
      "Saitama is a hero who can defeat any villain with a single punch, but his overwhelming power has left him bored and searching for a real challenge. As he becomes involved in the Hero Association, he meets a cast of unpredictable and hilarious characters.",
    cover:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
    ratings: {
      imdb: "8.7",
      mal: "8.5",
      crunchyroll: "4.7/5"
    },
    characters: [
      {
        name: "Saitama",
        role: "Hero for Fun",
        image:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80",
        description: "An ordinary man with absurd power and a surprisingly heartfelt personality."
      },
      {
        name: "Genos",
        role: "Cyborg Hero",
        image:
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
        description: "A brilliant cyborg who admires Saitama and strives to become stronger."
      },
      {
        name: "Tatsumaki",
        role: "Esper",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
        description: "A highly powerful esper with a dramatic personality and fierce confidence."
      }
    ]
  }
];

const animeList = document.getElementById("animeList");
const animeDetail = document.getElementById("animeDetail");

function renderAnimeList(activeTitle = animeData[0].title) {
  animeList.innerHTML = animeData
    .map(
      (anime) => `
        <button class="anime-item ${anime.title === activeTitle ? "active" : ""}" data-title="${anime.title}">
          <img src="${anime.cover}" alt="${anime.title}" />
          <div class="item-info">
            <h3>${anime.title}</h3>
            <div class="item-meta">
              <span>${anime.type}</span>
              <span class="item-score">${anime.score}</span>
            </div>
          </div>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".anime-item").forEach((item) => {
    item.addEventListener("click", () => {
      renderAnimeList(item.dataset.title);
      renderAnimeDetail(item.dataset.title);
    });
  });
}

function renderAnimeDetail(selectedTitle) {
  const anime = animeData.find((item) => item.title === selectedTitle) || animeData[0];

  animeDetail.innerHTML = `
    <div class="poster-banner">
      <img src="${anime.banner}" alt="${anime.title} banner" />
      <div class="poster-overlay"></div>
      <div class="banner-content">
        <div class="banner-title">
          <h1>${anime.title}</h1>
          <div class="banner-tags">
            <span>${anime.type}</span>
            <span>${anime.genre}</span>
            <span>${anime.year}</span>
          </div>
        </div>

        <div class="score-box">
          <small>Score</small>
          <strong>${anime.score}</strong>
        </div>
      </div>
    </div>

    <div class="main-grid">
      <div class="info-card">
        <h3>Story Summary</h3>
        <p>${anime.summary}</p>

        <div class="meta-grid">
          <div class="meta-item">
            <label>Studio</label>
            <span>${anime.studio}</span>
          </div>
          <div class="meta-item">
            <label>Episodes</label>
            <span>${anime.episodes}</span>
          </div>
          <div class="meta-item">
            <label>Status</label>
            <span>${anime.status}</span>
          </div>
          <div class="meta-item">
            <label>Genre</label>
            <span>${anime.genre}</span>
          </div>
        </div>
      </div>

      <div class="ratings-card">
        <h3>Ratings</h3>
        <div class="rating-grid">
          <div class="rating-box">
            <span class="platform">IMDb</span>
            <span class="value">${anime.ratings.imdb}<small>/10</small></span>
          </div>
          <div class="rating-box">
            <span class="platform">MyAnimeList</span>
            <span class="value">${anime.ratings.mal}<small>/10</small></span>
          </div>
          <div class="rating-box">
            <span class="platform">Crunchyroll</span>
            <span class="value">${anime.ratings.crunchyroll}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="character-card">
      <h3>Main Characters</h3>
      <div class="character-list">
        ${anime.characters
          .map(
            (character) => `
              <div class="character-item">
                <img src="${character.image}" alt="${character.name}" />
                <div class="character-info">
                  <h4>${character.name}</h4>
                  <p>${character.role}</p>
                  <p>${character.description}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

renderAnimeList();
renderAnimeDetail(animeData[0].title);
