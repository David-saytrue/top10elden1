// ============================================
// Top 10 Elden Ring Weapons Data
// ============================================
const weapons = [
    {
        rank: 1,
        name: "Rivers of Blood",
        type: "Katana",
        image: "images/weapon1.png",
        description: "A devastating katana that inflicts blood loss with its unique Corpse Piler skill, creating a flurry of bloody slashes.",
        fullDescription: "Rivers of Blood is considered one of the most powerful weapons in Elden Ring. Its unique skill 'Corpse Piler' allows the wielder to perform a series of rapid slashes that deal massive damage and build up blood loss at an alarming rate. This weapon truly shines in both PvE and PvP scenarios.",
        physicalDamage: 76,
        weight: 6.5,
        criticalDamage: 100,
        scaling: { STR: "E", DEX: "D", ARC: "D" },
        requirements: { STR: 12, DEX: 18, ARC: 20 },
        location: "Dropped by Bloody Finger Okina at the Church of Repose in the Mountaintops of the Giants."
    },
    {
        rank: 2,
        name: "Moonveil",
        type: "Katana",
        image: "images/weapon2.png",
        description: "An elegant katana imbued with glintstone magic, capable of unleashing devastating magic slashes from its sheath.",
        fullDescription: "Moonveil combines the speed of a katana with powerful magic damage. Its Transient Moonlight skill fires waves of magic that can stagger even the toughest bosses. The weapon scales wonderfully with Intelligence, making it perfect for spellblade builds.",
        physicalDamage: 73,
        weight: 6.5,
        criticalDamage: 100,
        scaling: { STR: "E", DEX: "D", INT: "C" },
        requirements: { STR: 12, DEX: 18, INT: 23 },
        location: "Found in Gael Tunnel in Caelid, dropped by the Magma Wyrm boss."
    },
    {
        rank: 3,
        name: "Blasphemous Blade",
        type: "Greatsword",
        image: "images/weapon3.png",
        description: "A wicked greatsword that heals the wielder with every kill and unleashes devastating fire waves.",
        fullDescription: "The Blasphemous Blade is beloved for its incredible sustain. Every enemy killed restores HP, and its Taker's Flames skill creates a massive wave of fire that deals huge damage. It's exceptional for clearing dungeons and surviving tough encounters.",
        physicalDamage: 121,
        weight: 13.5,
        criticalDamage: 100,
        scaling: { STR: "D", DEX: "D", FAI: "D" },
        requirements: { STR: 22, DEX: 15, FAI: 21 },
        location: "Obtained by trading Remembrance of the Blasphemous at the Roundtable Hold after defeating Rykard, Lord of Blasphemy."
    },
    {
        rank: 4,
        name: "Hand of Malenia",
        type: "Katana",
        image: "images/weapon1.png",
        description: "The legendary blade of Malenia, Blade of Miquella. Unleashes the devastating Waterfowl Dance technique.",
        fullDescription: "Hand of Malenia is a prestige weapon that rewards skilled players. Its Waterfowl Dance skill allows you to perform Malenia's infamous multi-hit combo, dealing massive damage to anything caught in its path. High skill ceiling but incredibly rewarding.",
        physicalDamage: 117,
        weight: 7,
        criticalDamage: 100,
        scaling: { STR: "E", DEX: "C" },
        requirements: { STR: 16, DEX: 48 },
        location: "Trade the Remembrance of the Rot Goddess at the Roundtable Hold after defeating Malenia."
    },
    {
        rank: 5,
        name: "Dark Moon Greatsword",
        type: "Greatsword",
        image: "images/weapon2.png",
        description: "A legendary frost blade blessed by the Dark Moon, capable of launching piercing moonlight projectiles.",
        fullDescription: "The Dark Moon Greatsword is the premier weapon for Intelligence builds. Its Moonlight Greatsword skill buffs the weapon with magic and frost, while enabling powerful ranged attacks. A callback to classic FromSoftware weapons with excellent versatility.",
        physicalDamage: 82,
        weight: 10,
        criticalDamage: 100,
        scaling: { STR: "D", DEX: "D", INT: "C" },
        requirements: { STR: 16, DEX: 11, INT: 38 },
        location: "Given by Ranni the Witch upon completing her questline at the Moonlight Altar."
    },
    {
        rank: 6,
        name: "Starscourge Greatsword",
        type: "Colossal Sword",
        image: "images/weapon3.png",
        description: "General Radahn's twin colossal swords wielded as one, pulling enemies in with gravitational force.",
        fullDescription: "Starscourge Greatsword is perfect for players who want power and style. Its Starcaller Cry skill pulls enemies toward you with gravity magic before slamming them with devastating force. Excellent crowd control and boss damage in one package.",
        physicalDamage: 129,
        weight: 20,
        criticalDamage: 100,
        scaling: { STR: "D", DEX: "D", INT: "E" },
        requirements: { STR: 38, DEX: 12, INT: 15 },
        location: "Trade the Remembrance of the Starscourge at the Roundtable Hold after defeating Starscourge Radahn."
    },
    {
        rank: 7,
        name: "Sword of Night and Flame",
        type: "Straight Sword",
        image: "images/wapon1.png",
        description: "A legendary sword combining the powers of the Carian moon magic and the Giants' flame in one blade.",
        fullDescription: "The Sword of Night and Flame offers incredible versatility with two distinct skill modes. One unleashes a beam of magic, the other a sweep of fire. Perfect for hybrid INT/FTH builds wanting the best of both worlds.",
        physicalDamage: 87,
        weight: 4,
        criticalDamage: 100,
        scaling: { STR: "E", DEX: "E", INT: "D", FAI: "D" },
        requirements: { STR: 12, DEX: 12, INT: 24, FAI: 24 },
        location: "Found in a locked room in Caria Manor. Accessed from the manor's ramparts."
    },
    {
        rank: 8,
        name: "Eleonora's Poleblade",
        type: "Twinblade",
        image: "images/weapon2.png",
        description: "A graceful twinblade that dances through enemies, building blood loss with elegant spinning attacks.",
        fullDescription: "Eleonora's Poleblade excels at aggressive, fast-paced combat. Its Bloodblade Dance skill creates a beautiful and deadly flurry of attacks that rapidly build blood loss. Great for players who love mobility and style.",
        physicalDamage: 72,
        weight: 6,
        criticalDamage: 100,
        scaling: { STR: "E", DEX: "D", ARC: "D" },
        requirements: { STR: 12, DEX: 21, ARC: 19 },
        location: "Dropped by Eleonora, Violet Bloody Finger at the Second Church of Marika in Altus Plateau."
    },
    {
        rank: 9,
        name: "Ruins Greatsword",
        type: "Colossal Sword",
        image: "images/weapon3.png",
        description: "A massive sword formed from ruins struck by a falling star, channels gravitational lightning.",
        fullDescription: "The Ruins Greatsword is raw power incarnate. Its Wave of Destruction skill sends a devastating shockwave across the battlefield. With incredible strength scaling, it's the weapon of choice for pure Strength builds looking to crush everything.",
        physicalDamage: 124,
        weight: 23,
        criticalDamage: 100,
        scaling: { STR: "S", INT: "E" },
        requirements: { STR: 50, INT: 16 },
        location: "Dropped by the Misbegotten Warrior and Crucible Knight duo in Redmane Castle."
    },
    {
        rank: 10,
        name: "Bloodhound's Fang",
        type: "Curved Greatsword",
        image: "images/weapon2.png",
        description: "A deadly curved greatsword wielded by Bloodhound Knights, featuring a powerful follow-up slash.",
        fullDescription: "Bloodhound's Fang is an excellent early-to-late game weapon. Its Bloodhound's Finesse skill provides incredible mobility with i-frames, followed by a powerful jumping attack. Innate blood loss makes it deadly against all enemies.",
        physicalDamage: 141,
        weight: 11.5,
        criticalDamage: 100,
        scaling: { STR: "D", DEX: "C" },
        requirements: { STR: 18, DEX: 17 },
        location: "Dropped by Bloodhound Knight Darriwil in the Forlorn Hound Evergaol in Limgrave."
    }
];

// ============================================
// DOM Elements
// ============================================
const weaponsGrid = document.getElementById('weapons-grid');
const modal = document.getElementById('weapon-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const particlesContainer = document.getElementById('particles');

// ============================================
// Create Floating Particles
// ============================================
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// Render Weapon Cards
// ============================================
function renderWeapons() {
    weaponsGrid.innerHTML = weapons.map(weapon => `
        <article class="weapon-card" data-rank="${weapon.rank}">
            <div class="weapon-rank">${weapon.rank}</div>
            <div class="weapon-image">
                <img src="${weapon.image}" alt="${weapon.name}" class="weapon-img" loading="lazy">
            </div>
            <div class="weapon-content">
                <span class="weapon-type">${weapon.type}</span>
                <h2 class="weapon-name">${weapon.name}</h2>
                <p class="weapon-description">${weapon.description}</p>
                <div class="weapon-stats">
                    <div class="stat">
                        <span class="stat-label">Damage</span>
                        <span class="stat-value">${weapon.physicalDamage}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Weight</span>
                        <span class="stat-value">${weapon.weight}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Critical</span>
                        <span class="stat-value">${weapon.criticalDamage}</span>
                    </div>
                </div>
                <span class="view-details">View Details</span>
            </div>
        </article>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.weapon-card').forEach(card => {
        card.addEventListener('click', () => {
            const rank = parseInt(card.dataset.rank);
            const weapon = weapons.find(w => w.rank === rank);
            openModal(weapon);
        });
    });
}

// ============================================
// Modal Functions
// ============================================
function openModal(weapon) {
    const scalingHTML = Object.entries(weapon.scaling)
        .map(([stat, grade]) => `<span class="scaling-item">${stat}: <span>${grade}</span></span>`)
        .join('');
    
    const requirementsHTML = Object.entries(weapon.requirements)
        .map(([stat, value]) => `<span class="scaling-item">${stat}: <span>${value}</span></span>`)
        .join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${weapon.image}" alt="${weapon.name}" class="modal-weapon-img">
            <h2 class="modal-title">${weapon.name}</h2>
            <p class="modal-type">${weapon.type}</p>
        </div>
        
        <div class="modal-section">
            <h3>Overview</h3>
            <p>${weapon.fullDescription}</p>
        </div>
        
        <div class="modal-section">
            <h3>Stats</h3>
            <div class="stat-grid">
                <div class="stat-item">
                    <span class="stat-label">Physical</span>
                    <span class="stat-value">${weapon.physicalDamage}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Weight</span>
                    <span class="stat-value">${weapon.weight}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Critical</span>
                    <span class="stat-value">${weapon.criticalDamage}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Scaling</h3>
            <div class="scaling-list">${scalingHTML}</div>
        </div>
        
        <div class="modal-section">
            <h3>Requirements</h3>
            <div class="scaling-list">${requirementsHTML}</div>
        </div>
        
        <div class="modal-section">
            <h3>Location</h3>
            <p>${weapon.location}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// Event Listeners
// ============================================
modalClose.addEventListener('click', closeModal);

modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scroll indicator click
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    weaponsGrid.scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderWeapons();
});
