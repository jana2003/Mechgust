const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');

button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CONNEXION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">You know the drill! Connect the dots of famous pop culture references and have fun solving the puzzles in an effort to come out on top with your team of movie nerds</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>Entries will be only accepted for teams of three.</li>
                <li>There will be three basic rounds and final.</li>
                <li>Three teams will be playing in one of the three basic rounds.</li>
            </ul>
            <h4>Student coordinator: Saran.C Ph. +91 8925236404</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PICTURESQUE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">You're a photographer, you're getting good at taking photos, but what if you want to take it further? What about winning some prizes, and earn some recognition along the way? If this sounds good then, this competition could be the perfect thing for you to take part in.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>Photos will be taken only in DSLR/Mobile and only short lens are allowed for  DSLR.</li>
                <li>Photograph submission should be genuine.</li>
                <li>PaNo editing is allowed.</li>
                <li>Theme is an open theme</li>
                <li>Panel decision will be final.</li>
            </ul>
            <h4>Student coordinator: Bala Sai Chandra Ph. +91 8531856142</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">SURPRISE EVENT</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Ssssshhh….. It’s a Surprise.</p> <br>
        <div class="pop-up-text">
            <h4>Student coordinator: Saranya S Ph. +91 9952057980</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Meme CREATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">If you are good at editing and you think you have a good sense of humour, then this is the right platform for you to show-off.<br>
        Voice your opinions and make people think & laugh with your hilarious memes.
        </p> <br>
        <div class="pop-up-text">
            <h4>Student coordinator: Abhishek  Ph. +91 6374075860</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button5.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Singing</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Slow and steady wins the race. Fast and Hasty goes into the waste.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>A Call for all the singers to showcase your singing skills!</li>
                <li>Let the world be lost in your melodies.</li>
                <li>So just get your mic on and be ready to mesmerise your audience.</li>
            </ul>
            <h4>Student coordinator: Sai vaishnav Ph. +91 7338740404</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

function closeTag() {
	popUpDiv.style.display = 'none';
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
