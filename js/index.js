
// data is an array of objects which contains information about the candidates
const data = [
    {
        Name: "Kutub",
        Age: 21,
        City: "Bardhaman",
        Language: "Javascript",
        Framework: "DJango",
        Image: "https://randomuser.me/api/portraits/men/14.jpg"
    },

    {
        Name: "Reshma",
        Age: 19,
        City: "Bardhaman",
        Language: "Javascript",
        Framework: "DJango",
        Image: "https://randomuser.me/api/portraits/women/11.jpg"
    },

    {
        Name: "Tasi",
        Age: 22,
        City: "Murshidabad",
        Language: "Python",
        Framework: "Angular",
        Image: "https://randomuser.me/api/portraits/men/76.jpg"
    },

    {
        Name: "Mainul",
        Age: 20,
        City: "Malda",
        Language: "Java",
        Framework: "J2EEE",
        Image: "https://randomuser.me/api/portraits/men/63.jpg"
    },

    {
        Name: "Sala",
        Age: 23,
        City: "Birbhum",
        Language: "PHP",
        Framework: "Bootstrap",
        Image: "https://randomuser.me/api/portraits/men/99.jpg"
    }
]

//CV Iterator
function cvIterator(profiles) {
    nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } : { done: true }

        }
    };
}

// add event listner to the next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

const candidate = cvIterator(data);
nextCV();

// nextCV function
function nextCV() {
    const currentCandidate = candidate.next().value;

    const image = document.getElementById("image");
    const profile = document.getElementById("profile");

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.Image}">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.Name}</li>
        <li class="list-group-item">${currentCandidate.Age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.City}</li>
        <li class="list-group-item">Compatible with ${currentCandidate.Language} language</li>
        <li class="list-group-item">Work in ${currentCandidate.Framework}</li>
        </ul>`;
    } else {
        alert("End of Candidate Application");
        window.location.reload();
    }
}
