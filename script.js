const teamMembers = [
    {
        img: 'imgs/Ngapeth.webp',
        name: 'Earvin Ngapeth',
        position: 'outside',
        skills: ['Powerful', 'Excellent passing', 'Techniques'],
        strengths: 'High volleyball IQ, Strong leadership qualities',
        weaknesses: 'Occasional disciplinary issues',
        biography: 'Earvin Ngapeth is a French professional volleyball player known for his dynamic playing style and exceptional skills as an outside hitter. Born on February 12, 1991, he has been a pivotal player for both the French national team and various European clubs, earning numerous accolades including the MVP award at the 2015 European Championship. Ngapeths charisma and talent have made him a standout figure in the volleyball world.',
    },

    {
        img: 'imgs/Leon.webp',
        name: 'Wilfredo León',
        position: 'outside',
        skills: ['Powerful serve', 'blocking', 'pasing'],
        strengths: 'Athleticism, Consistant performance',
        weaknesses: 'over-relying on power',
        biography: 'Wilfredo León is a Cuban-Polish volleyball player celebrated for his powerful spikes and serves as an outside hitter. Born on July 31, 1993, he began his career with the Cuban national team before acquiring Polish citizenship and playing for Poland. Leóns remarkable athleticism and skill have established him as one of the best volleyball players in the world.',
    },

    {
        img: 'imgs/nishida.jpg',
        name: 'Yuji Nishida',
        position: 'opposite',
        skills: ['speed', 'agility', 'awareness'],
        strengths: 'Vertical leap, Reliable under pressure',
        weaknesses: 'Relatively shorter height',
        biography: 'Yuji Nishida is a Japanese volleyball player renowned for his incredible vertical leap and scoring ability as an opposite hitter. Born on January 30, 2000, Nishida quickly rose to prominence in the volleyball scene, becoming a key player for the Japanese national team and competing in international leagues. His youthful energy and impressive performances have garnered him a large following and respect in the sport.        ',
    },
    {
        img: 'imgs/Tofoli.jpg',
        name: 'Paolo Tofoli',
        position: 'setter',
        skills: ['Setting accuracy', 'Tactical', 'Defense'],
        strengths: 'Experience and composure, Efficient ball distribution',
        weaknesses: 'Struggle with high-paced games',
        biography: 'Paolo Tofoli is a retired Italian volleyball player and coach who played as a setter, known for his tactical acumen and leadership on the court. Born on August 14, 1966, he had a distinguished career with the Italian national team, winning multiple World Championships and European Championships. Tofoli has transitioned into coaching, where he continues to contribute to the sport.        ',
    },
    {
        img: 'imgs/Santos.webp',
        name: 'Isac Santos',
        position: 'middle',
        skills: ['Strong serve', 'Hitting', 'Blocking'],
        strengths: 'Height and reach advantage, Strong teamwork',
        weaknesses: 'lateral quickness',
        biography: 'Isac Santos is a Brazilian volleyball player who excels as a middle blocker, recognized for his defensive skills and quick attacks. Born on December 13, 1990, he has been a vital member of the Brazil national team, contributing to their success in various international competitions. his presence at the net makes him a formidable opponent for any team.',
    },
    {
        img: 'imgs/Kłos.webp',
        name: 'Karol Kłos',
        position: 'middle',
        skills: ['Blocking techniques', 'Strong hitting', 'Defensive skills'],
        strengths: 'High volleyball intelligence, Consistent performance, Good teamwork and communication',
        weaknesses: 'offensive variety',
        biography: 'Karol Kłos is a Polish volleyball player who plays as a middle blocker, known for his blocking prowess and efficient hitting. Born on August 8, 1989, he has been an integral part of the Poland national team, helping them secure numerous titles, including the World Championship. His consistency and technique have earned him respect and admiration in the volleyball community. ',
    },
    {
        img: 'imgs/Shoji.jpg',
        name: 'Erik Shoji',
        position: 'libero',
        skills: ['Accurate passing', 'Quick reflexes', 'High defensive IQ'],
        strengths: 'Strong positioning, Quickness, agility',
        weaknesses: 'Serve receive',
        biography: 'Erik Shoji is an American volleyball player who specializes as a libero, famed for his defensive skills and precise passing. Born on August 24, 1989, Shoji has been a cornerstone for the U.S. national team, competing in various international tournaments and winning medals. His agility and ability to read the game make him one of the top liberos in the world.  ',
    }

]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        // Define background color based on position
        let backgroundColor;

        if (member.position === 'outside') {
            backgroundColor = '#0128C8';
        } else if (member.position === 'middle') {
            backgroundColor = 'white';
        } else if (member.position === 'opposite') {
          backgroundColor = '#00AEFF'
        } else if (member.position === 'setter') {
            backgroundColor = '#C80101';
        } else if (member.position === 'libero') {
            backgroundColor = 'silver';
        }
        

        card.style.backgroundColor = backgroundColor;

        // Apply border color to the card-header
        let borderColor;
        switch (member.position) {
            case 'outside':
                borderColor = '#0128C8';
                break;
            case 'middle':
                borderColor = 'white';
                break;
            case 'opposite':
                borderColor = '#00AEFF';
                break;
            case 'setter':
                borderColor = '#C80101';
                break;
            case 'libero':
                borderColor = 'silver';
                break;
            default:
                borderColor = 'black';
        }
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-header text-center" style="border-color: ${borderColor};">${member.name}</div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> ${member.skills.join(', ')}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards();