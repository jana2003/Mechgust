const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');

button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">QUREKA</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here’s an exciting opportunity to know around on growing technologies. Test your memory by
            the quirky questions coming your way. Showcase your knowledge with your partner by answering
            the questions and become a Tech geek among your group.</p> <br>
        <div class="pop-up-text">
            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
                <li>THE EVENT INCLUDES ONE ROUND OF TWENTY QUESTIONS.</li>
                <li>ALL PARTICIPANTS WILL BE PROVIDED WITH A COLLEGE MAP.</li>
                <li>PARTICIPANTS SHOULD FIND THE LOCATION WITH THE HINT WHERE THE QUESTION WILL BE AVAILABLE WITH ONE OF OUR TEAM'S ORGANIZERS.
                </li>
                <li>THE ORGANISER WILL GIVE THE NEXT QUESTION WITH A HINT OF THE PLACE AFTER GIVING THE ANSWER TO THE QUESTION, AND THIS WILL CONTINUE UNTIL THE END OF THE QUESTIONS.</li>
                <li>THE ALLOCATION OF POINTS WILL BE BASED ON THE POSITION IN WHICH YOU FIND THE ANSWER.</li>
                <li>IF THERE IS A TIE, THERE WILL BE A TEN-QUESTION ON-THE-SPOT QUIZ.</li>
                <li>PARTICIPATION CERTIFICATE WILL BE PROVIDED FOR ALL THE PARTICIPANTS WHILE AN ACHEIVEMENT CERTIFICATE WILL BE PROVIDED FOR THE 1ST & 2ND PLACE HOLDERS WITH A CASH PRIZE.</li>
                <li>Panel decision is final</li>
            </ul>
            <ul>
                <li>Round 1: General Topic</li>
                <li>Round 2: Technical Topic</li>
            </ul>
            <h4>Student coordinator: Gokul N Ph. +91 8754411553</h4>
            <button class="button btn" style="width: 65%;" onclick="window.location.href='/views/events.html'">Back to events</button>
        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
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
});

button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CAE ANALYSIS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Design, create and analyze your creation. It’s about challenging yourselves, pushing those around you, and allowing your commitment and skill, and the motivation of others, to tap into your potential and demonstrate your skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>Only Individual participant is allowed.</li>
                <li>College ID card or Bonafide certificate is a must.</li>
                <li>Participants are requested to login their corresponding Google meet link 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp group and be active in it for further updates.</li>
                <li>Participants are requested to present their screen throughout the event.</li>
                <li>Participants should unmute and Switch On the Camera whenever instructed by the Coordinators</li>
                <li>Any suspicion of malpractices or misbehavior will be disqualified immediately.</li>
                <li>Do ensure that the Webcam and Microphone of Laptop / Desktop are working properly during the event.</li>
                <li>If your device is using a Wi-Fi router, make sure to sit near the Wi-Fi Router/Modem to avoid any signal related issues.</li>
                <li>In case of disconnection of network/power failure during the event, the event can be resumed by logging again from the instance of interruption. The event Coordinators will not be responsible for the time loss due to any malfunction of your devices Internet connectivity, Power failure etc.</li>
                <li>Coordinators   decision will be final.</li>
            </ul>
            <ul>
            <li>Round 1: Written exam</li>
            <li>Round 2: Software exam</li>
            </ul>
            <h4>Softwares: Ansys, Abaqus,NX NASTRAN etc.</h4>
            <h4>Softwares: Ansys, Abaqus,NX NASTRAN etc.</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CAD MODELLING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">For all the science enthusiasts and budding technocrats, we bring to you, CAD modelling which gives you the opportunity to hone your creative thinking. This event aims to give every participant a platform to mold yourself for the industrial requirements.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    Only Individual participant is allowed.
                </li>
                <li>
                    College ID card or Bonafide certificate is a must.
                </li>
                <li>
                    Participants are requested to login their corresponding Google meet link 5 minutes before the event.
                </li>
                <li>
                    Participants are requested to join their corresponding WhatsApp group and be active in it for further updates.
                </li>
                <li>
                    Participants are requested to present their screen throughout the event.
                </li>
                <li>
                    Participants should unmute and Switch On the Camera whenever instructed by the Coordinators
                </li>
                <li>
                    Any suspicion of malpractices or misbehavior will be disqualified immediately.
                </li>
                <li>
                    Do ensure that the Webcam and Microphone of Laptop / Desktop are working properly during the event.
                </li>
                <li>
                    If your device is using a Wi-Fi router, make sure to sit near the Wi-Fi Router/Modem to avoid any signal related issues.
                </li>
                <li>
                    In case of disconnection of network/power failure during the event, the event can be resumed by logging again from the instance of interruption. The event Coordinators will not be responsible for the time loss due to any malfunction of your devices Internet connectivity, Power failure etc.
                </li>
                <li>
                    Coordinators &nbsp; decision will be final.
                </li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button5.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Diagrammatical Reasoning</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here is a place where you can challenge your logical thinking, to interpret data and solve problems.
        Take your IQ and problem solving abilities to the next level.
        Crack it if you can!
        </p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    All the questions will be related to engineering field.
                    The event will take place in 3 levels and number of teams will be 
                    filtered depending upon the total number of registrations we get.
                    The level of difficulty will increase in each level.
                    Number of questions, question type and time limit will be announced 
                    during the event.
                    <br>
                    The students must be prepared in all curriculum subjects, their 
                    applications and should possess logical thinking
                </li>
            </ul>
            <h4>Softwares: NX CAD, NX  CAM, CATIA, Solidworks, Creo</h4>
            <h4>Student coordinator: Sudharashan.  Ph. +91 9962405780</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});
button6.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Diagrammatical Reasoning</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here is a place where you can challenge your logical thinking, to interpret data and solve problems.
        Take your IQ and problem solving abilities to the next level.
        Crack it if you can!
        </p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    All the questions will be related to engineering field.
                    The event will take place in 3 levels and number of teams will be 
                    filtered depending upon the total number of registrations we get.
                    The level of difficulty will increase in each level.
                    Number of questions, question type and time limit will be announced 
                    during the event.
                    <br>
                    The students must be prepared in all curriculum subjects, their 
                    applications and should possess logical thinking
                </li>
            </ul>
            <h4>Softwares: NX CAD, NX  CAM, CATIA, Solidworks, Creo</h4>
            <h4>Student coordinator: Sudharashan.  Ph. +91 9962405780</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});
button7.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Diagrammatical Reasoning</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here is a place where you can challenge your logical thinking, to interpret data and solve problems.
        Take your IQ and problem solving abilities to the next level.
        Crack it if you can!
        </p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    All the questions will be related to engineering field.
                    The event will take place in 3 levels and number of teams will be 
                    filtered depending upon the total number of registrations we get.
                    The level of difficulty will increase in each level.
                    Number of questions, question type and time limit will be announced 
                    during the event.
                    <br>
                    The students must be prepared in all curriculum subjects, their 
                    applications and should possess logical thinking
                </li>
            </ul>
            <h4>Softwares: NX CAD, NX  CAM, CATIA, Solidworks, Creo</h4>
            <h4>Student coordinator: Sudharashan.  Ph. +91 9962405780</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});
button8.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Diagrammatical Reasoning</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here is a place where you can challenge your logical thinking, to interpret data and solve problems.
        Take your IQ and problem solving abilities to the next level.
        Crack it if you can!
        </p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    All the questions will be related to engineering field.
                    The event will take place in 3 levels and number of teams will be 
                    filtered depending upon the total number of registrations we get.
                    The level of difficulty will increase in each level.
                    Number of questions, question type and time limit will be announced 
                    during the event.
                    <br>
                    The students must be prepared in all curriculum subjects, their 
                    applications and should possess logical thinking
                </li>
            </ul>
            <h4>Softwares: NX CAD, NX  CAM, CATIA, Solidworks, Creo</h4>
            <h4>Student coordinator: Sudharashan.  Ph. +91 9962405780</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});
button9.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">Diagrammatical Reasoning</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here is a place where you can challenge your logical thinking, to interpret data and solve problems.
        Take your IQ and problem solving abilities to the next level.
        Crack it if you can!
        </p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>
                    All the questions will be related to engineering field.
                    The event will take place in 3 levels and number of teams will be 
                    filtered depending upon the total number of registrations we get.
                    The level of difficulty will increase in each level.
                    Number of questions, question type and time limit will be announced 
                    during the event.
                    <br>
                    The students must be prepared in all curriculum subjects, their 
                    applications and should possess logical thinking
                </li>
            </ul>
            <h4>Softwares: NX CAD, NX  CAM, CATIA, Solidworks, Creo</h4>
            <h4>Student coordinator: Sudharashan.  Ph. +91 9962405780</h4>
            <button class="button btn" style="width: 65%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

function closeTag() {
	popUpDiv.style.display = 'none';
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
