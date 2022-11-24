import Events from "./Events";
import AdsEventData from '../../data/departmentEvents/AdsEventData';
import AeiEventData from '../../data/departmentEvents/AeiEventData';
import AshEventData from '../../data/departmentEvents/AshEventData';
import CeEventData from '../../data/departmentEvents/CeEventData';
import CommonEventData from '../../data/departmentEvents/CommonEventData';
import CseEventData from '../../data/departmentEvents/CseEventData';
import EceEventData from '../../data/departmentEvents/EceEventData';
import MechanicalEventData from '../../data/departmentEvents/MechanicalEventData.js';
import EeeEventData from '../../data/departmentEvents/EeeEventData';

export const AdsEvents = () => {
    return (
        <Events eventsData={AdsEventData} />
    )
}

export const AeiEvents = () => {
    return (
        <Events eventsData={AeiEventData} />
    )
}

export const AshEvents = () => {
    return (
        <Events eventsData={AshEventData} />
    )
}

export const CeEvents = () => {
    return (
        <Events eventsData={CeEventData} />
    )
}

export const CommEvents = () => {
    return (
        <Events eventsData={CommonEventData} />
    )
}

export const CseEvents = () => {
    return (
        <Events eventsData={CseEventData} />
    )
}

export const EceEvents = () => {
    return (
        <Events eventsData={EceEventData} />
    )
}

export const MeEvents = () => {
    return (
        <Events eventsData={MechanicalEventData} />
    )
}

export const EeeEvents = () => {
    return (
        <Events eventsData={EeeEventData} />
    )
}