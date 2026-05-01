import defaultPhoto from '../assets/images/members/default.jpg'
import williamHeadshot from '../assets/images/members/william_leung_headshot.png'
import orionHeadshot from '../assets/images/members/orion_hoch_headshot.jpeg'
import lorraineHeadshot from '../assets/images/members/lorraine_yang_headshot.JPG'
import annikaHeadshot from '../assets/images/members/annika_malhotra_headshot.png'
import reeceHeadshot from '../assets/images/members/reece_shiraishi_headshot.jpeg'
import nawalHeadshot from '../assets/images/members/nawal_bhatti_headshot.jpg'
import michelleHeadshot from '../assets/images/members/michelle_zhao_headshot.jpeg'
import raashidHeadshot from '../assets/images/members/raashid_husain_headshot.jpeg'
import rithyaHeadshot from '../assets/images/members/rithya_sriram_headshot.png'
import nickHeadshot from '../assets/images/members/nick_spoto_headshot.jpg'
import nehaHeadshot from '../assets/images/members/neha_sudarshan_headshot.JPG'
import alecHeadshot from '../assets/images/members/alec_daveynis_headshot.png'
import ayaHeadshot from '../assets/images/members/aya_saute_headshot.JPG'
import gigachadHeadshot from '../assets/images/members/gigachad.png'

const teamMembers = [{
        id: 1,
        name: 'William Leung',
        netid: 'wcl53',
        role: 'Data Team Lead',
        photo: williamHeadshot,
        bio: 'William loves to bake! So far, he\'s made egg tarts, pineapple bread, tiramisu, and cheesecake but more will be added to the list soon :) Outside of baking, he likes to run, daydream, and go to the Farmer\'s Market.',
        coffee: true
    },
    {
        id: 2,
        name: 'Orion Hoch',
        netid: 'ogh6',
        role: 'Water Team Lead',
        photo: orionHeadshot,
        bio: 'Outside of the team you can find him on WVBR talking sports and movies, biking around Ithaca, and playing in 9 Fantasy leagues.',
        coffee: true
    },
    {
        id: 3,
        name: 'Ashley Zhao',
        netid: 'ajz45',
        role: 'Data Team Member',
        photo: defaultPhoto,
        bio: 'Aside from GeoData, Ashley is involved in Impact Dance at Cornell, and in her free time she enjoys knitting, crochet, and sewing clothes! Ashley has two cats and a dog back home whom she misses dearly.',
        coffee: true
    },
    {
        id: 4,
        name: 'Evelyn Keefe',
        role: 'Air Team Member',
        netid: 'enk36',
        photo: defaultPhoto,
        bio: 'You might catch Evie outside of meetings at the library or on the rooftop of Snee. She really loves Ithaca winters and hopes for snow every year.',
        coffee: true
    },
    {
        id: 5,
        name: 'Annika Malhotra',
        role: 'Business Team Member',
        netid: 'am3359',
        photo: annikaHeadshot,
        bio: 'Annika is from New Jersey! She is a sophomore in the Engineering School with an intended major in Computer Science and ORIE with a minor in AI. She is treasurer of the Phi Sigma Pi Honors Fraternity on campus and part of the Alpha Chi Omega sorority. She is passionate about the crossover between business and technology. She likes to workout and hang out in nature!',
        coffee: true
    },
    {
        id: 6,
        name: 'Lorraine Yang',
        role: 'Business Team Member',
        netid: 'dy343',
        photo: lorraineHeadshot,
        bio: 'Lorraine is a junior majoring statistics with minors in music and environment & sustainability. Outside of GeoData, she\'s involved in Cornell Dragon Boat and Improvisation Ensemble. When she\'s not thinking about schoolwork, she will be in Lincoln Hall trying out different improv techniques on the piano, or exploring the Cornell Lab of Ornithology and the Botanic Garden.',
        coffee: true
    },
    {
        id: 7,
        name: 'Raashid Husain',
        role: 'Rock Team Member',
        netid: 'rah383',
        photo: raashidHeadshot,
        bio: 'Raashid is a fourth-year student studying Environmental Engineering and starting his M.Eng in Systems Engineering. He enjoys kayaking, hiking, and exploring Ithaca!',
        coffee: false
    },
    {
        id: 8,
        name: 'Nick Spoto',
        role: 'Rock Team Member',
        netid: 'njs232',
        photo: nickHeadshot,
        bio: 'Nick Spoto is a student studying computer science in Cornell University\'s College of Engineering, with a minor in AI. He is interested in web development and software engineering, and he wants to work in defense-based software and frontend/backend development.',
        coffee: true
    },
    {
        id: 9,
        name: 'Duke Gandin',
        role: 'Water Team Member',
        netid: 'dag374',
        photo: defaultPhoto,
        bio: 'Duke is currently on the water subteam working to analyze sap flux in trees. Aside from GeoData, he is involved in Cornell running club and likes to explore the Ithaca and Cornell area.',
        coffee: true
    },
    {
        id: 10,
        name: 'Michelle Zhao',
        role: 'Business Team Member',
        netid: 'mz625',
        photo: michelleHeadshot,
        bio: 'Michelle is studying Computer Science and ORIE in the College of Engineering. Outside of GeoData she\'s involved with the Society of Women Engineers and enjoys reading, watching movies, exploring national parks, and keeping up with F1.',
        coffee: true
    },
    {
        id: 11,
        name: 'Shubha Gautam',
        role: '',
        netid: 'sg2563',
        photo: defaultPhoto,
        bio: 'Shubha is new to GeoData, but aside from the team, she\'s involved with Cornell YDSA and The Daily Sun. In my free time, you can find her reading anti-westerns or exploring Ithaca! She\'s from Missouri and often miss living 10 minutes from the Missouri River.',
        coffee: false
    },
    {
        id: 12,
        name: 'Nawal Bhatti',
        role: '',
        netid: 'nb625',
        photo: nawalHeadshot,
        bio: 'Nawal Bhatti is a senior majoring in Information Science with a minor in Business. As part of her CU GeoData subteam, she contributes to the development of drones for data collection and the creation of continuous temperature probes and sensors for Cayuga Lake. ',
        coffee: true
    },
    {
        id: 13,
        name: 'Reece Shiraishi',
        role: '',
        netid: 'rcs374',
        photo: reeceHeadshot,
        bio: 'A junior in ECE, Reece is involved in Cornell IEEE and the pickleball club. He enjoys weightlifting, coding, and eating the cinnamon twists in the dining halls.',
        coffee: false
    },
    {
        id: 14,
        name: 'Rithya Sriram',
        role: 'Data Team Lead',
        netid: 'ra596',
        photo: rithyaHeadshot,
        bio: 'Rithya enjoys space, audiobooks (about five months of listening time), and ice skating! Her toxic trait is thinking everywhere is in walking distance.',
        coffee: true
    },
    {
        id: 15,
        name: 'Alec Daveynis',
        role: 'Data Team Member',
        netid: '',
        photo: alecHeadshot,
        bio: '',
        coffee: true
    },
    {
        id: 16,
        name: 'Aya Saute',
        role: 'Rock Team Lead',
        netid: '',
        photo: ayaHeadshot,
        bio: '',
        coffee: true
    },
    {
        id: 17,
        name: 'Neha Sudarshan',
        role: 'Tech Team Member',
        netid: '',
        photo: nehaHeadshot,
        bio: '',
        coffee: true
    },
    {
        id: 18,
        name: 'Reece Shiraishi',
        role: 'Business Team Member',
        netid: '',
        photo: gigachadHeadshot,
        bio: "That's right, I'm a gigachad.",
        coffee: false
    },
];

export default teamMembers;