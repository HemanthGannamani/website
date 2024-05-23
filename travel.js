function exploreDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

const destinationsData = {
    'Paris': {
        title: 'Paris, France',
        description: 'Paris, the City of Light, is known for its cafes, art, and romance. Key attractions include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.'
    },
    'Bali': {
        title: 'Bali, Indonesia',
        description: 'Bali is a tropical paradise with beautiful beaches, volcanic mountains, and vibrant culture. Explore Ubud, the rice terraces, and the coral reefs.'
    },
    'New York': {
        title: 'New York, USA',
        description: 'New York City is a bustling metropolis known for its iconic landmarks such as Times Square, Central Park, and the Statue of Liberty.'
    },
    'Tokyo': {
        title: 'Tokyo, Japan',
        description: 'Tokyo is a dynamic city blending modern skyscrapers with historic temples. Don\'t miss the Shibuya Crossing, Tokyo Tower, and the Imperial Palace.'
    },
    'Sydney': {
        title: 'Sydney, Australia',
        description: 'Sydney offers stunning harbor views, iconic landmarks like the Sydney Opera House, and beautiful beaches such as Bondi Beach.'
    }
};

function viewDetails(destination) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const data = destinationsData[destination];
    modalTitle.innerText = data.title;
    modalDescription.innerText = data.description;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('formMessage').innerText = 'Thank you for your message!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});

function loadContent() {
    const contentArea = document.getElementById('contentArea');
    const newContent = document.createElement('div');
    newContent.innerHTML = `
        <h3>Additional Content</h3>
        <p>This is some additional content that was loaded dynamically. You can add more information about tours, travel tips, or anything relevant to your website.</p>
    `;
    contentArea.appendChild(newContent);
}
