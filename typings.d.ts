interface Image {
    _type : "image";
    asset : {
        _ref : string;
        _type : "reference";
    };
}
interface Sanitybody {
    _createdAt : string;
    _id : string;
    _rev : string;
    _updatedAt : string;
}

export interface Social extends Sanitybody {
    _type: "social";
    title: string;
    url: string;
}

export interface Skill extends Sanitybody {
    title : string;
    _type:"skill" ;
    image : Image;
    progress : number;
}

export interface Technology extends Sanitybody {
    title : string;
    _type:"technology" ;
    image : Image;
    progress : number;
}

export interface PageInfo extends Sanitybody {
    _type:"pageinfo" ;
    address : string;
    backgroundInformation : string;
    email : string;
    role : string;
    heroImage : Image;
    name : string;
    phoneNumber : string;
    profilePic : Image;
}

export interface Project extends Sanitybody {
    title : string;
    _type:"project" ;
    image : Image;
    linkToBuild : string;
    summary : string;
    technologies : Technology[];
}

export interface Experience extends Sanitybody {
    _type:"experience" ;
    company : string;
    companyImage : Image;
    dateStarted : Date;
    dateEnded : Date;
    isCurrentlyWorkingHere : boolean;
    jobTitle : string;
    points : string[];
    technologies : Technology[];
}
