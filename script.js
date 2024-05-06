// Team member data

const teamMembers = [
    {
        name:'Lionel Messi',
        age:36,
        activeplayer:true,
        position:'Forward',
        strength:'ball control',
        weaknesses:'heading ability',
        skills: ['sribling', 'shooting', 'passing'],
        bio: 'yada yada'


    }
]

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4') 
    card.innerHTML=`
        <div class="card">


    `       
    });





}

window.onload = generateTeamCards()