import Mechanical from '../../assets/departments/mechanical.jpg';
import Computer from '../../assets/departments/computer.jpg';
import Civil from '../../assets/departments/civil.jpg';
import ECE from '../../assets/departments/communication.jpg';
import EEE from '../../assets/departments/electrical.jpg';
import AEI from '../../assets/departments/instrumentation.jpg';
import ASH from '../../assets/departments/humanities.jpg';
import ADS from '../../assets/departments/artificial.jpg';
import Games from '../../assets/departments/games.jpg';


const CardsData = [
    {
        imgsrc: Mechanical,
        title: "Mechanical",
        text: "Events conducted by Mechanical Department",
        explore : '/me-events'
    },
    {
        imgsrc: Computer,
        title: "Computer Science",
        text: "Events conducted by CSE Department",
        explore : '/cse-events'
    },
    {
        imgsrc: Civil,
        title: "Civil Engineering",
        text: "Events conducted by CE Department",
        explore : '/ce-events'
    },
    {
        imgsrc: ECE,
        title: "Electrical and Communication Engineering",
        text: "Events conducted by ECE Department",
        explore : '/ece-events'
    },
    {
        imgsrc: AEI,
        title: "Applied Electronics & Instrumentation",
        text: "Events conducted by AEI Department",
        explore : '/aei-events'
    },
    {
        imgsrc: EEE,
        title: "Electrical and Electronics Engineering",
        text: "Events conducted by EEE Department",
        explore : '/eee-events'
    },
    {
        imgsrc: ASH,
        title: "Applied Science and Humanities",
        text: "Events conducted by ASH Department",
        explore : '/ash-events'
    },
    {
        imgsrc: ADS,
        title: "Artificial Intelligence and Data Science",
        text: "Events conducted by ADS Department",
        explore : '/ads-events'
    },
    {
        imgsrc: Games,
        title: "Common Events",
        text: "Events for all...",
        explore : '/com-events'
    },
]

export default CardsData