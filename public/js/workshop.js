const popUpDiv = document.querySelector(".pop-up-div");
const popUpClose = document.querySelector(".pop-up-close");
const popUpContainer = document.querySelector(".pop-up-container");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

button1.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">3D PRINTING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <div class="pop-up-text">
            <ul>
                <li>This workshop offers a holistic learning on the functions and the working of a 3D printer.</li>
                <li>Turn your ideas into full fledged service capabilities.</li>
                <li>No restrictions on creativity, It’s all about exploring your innovation.</li>
                <li>It offers a session in fun-filled learning of the futuristic technology.</li>
            </ul>
            <h4>Student coordinator: Pugazhendhi L  Ph. +91 9790381081</h4>
            <h4>Entry Fee - Rs. 50 per head</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button2.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">VEHICLE BUILDING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <div class="pop-up-text">
            <ul>
                <li>This workshop offers a session on the various areas of vehicle building.</li>
                <li>Participants will be tutored on the modules of a vehicle.</li>
                <li>With this training program, You have the opportunity to develop practical automobile engineering skills.</li>
            </ul>
            <h4>Student coordinator: Jeeva/Kiran Ph. +91 8825677424</h4>
            <h4>Entry Fee - Rs. 50 per head</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button3.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">ROBOTICS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <div class="pop-up-text">
            <ul>
                <li>Robotics is one of the most promising technologies that is going to find its place in almost all the applications of the future.</li>
                <li>You get a chance to work with the industrial robots that is present.</li>
                <li>Unleash your talents by means of innovation and showcase your ideas in front of a panel of experts.</li>
                <li>This workshop aims to provide the students with an immense exposure and expertise in the fields of Robotics and AI a professional level.</li>
            </ul>
            <h4>Student coordinator: Sandhiya .S  Ph. +91 7708589707</h4>
            <h4>Entry Fee - Rs. 50 per head</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button4.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CNC</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <div class="pop-up-text">
            <ul>
                <li>The main intention of this program is to develop and strengthen the entrepreneurial skills and analyse environmental set up relating to small businesses in the field CNC machines.</li>
                <li>This workshop is aimed to give an experience on working with the CNC machine.</li>
                <li>Participants will be tutored to code and work with the machine.</li>
            </ul>
            <h4>Student coordinator: A.Vignesh Ph. +91 9514254071</h4>
            <h4>Entry Fee - Rs. 50 per head</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

function closeTag() {
    popUpDiv.style.display = "none";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
}
const video = document.querySelector('.section-container video source');

const setHeroVideoSize = () => {
	if (innerWidth <= 800) {
		video.setAttribute('src', '../assets/hero-1.mp4');
	} else {
		video.setAttribute('src', '../assets/hero.mp4');
	}
};

window.addEventListener('resize', setHeroVideoSize);
window.addEventListener('load', setHeroVideoSize);
