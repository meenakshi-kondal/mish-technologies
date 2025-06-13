export interface HOME_PROFILE {
    tagline: string;
    ideas: string[];
    action: string;
    description?: string;
}

export interface ABOUT_DATA {
    header: string;
    content: string[];
    action: string[];
    button: string
}

export interface SERVICE_DATA {
    title: string;
    tagline: string;
    services: {
        name: string;
        content: string;
        image: string;
    }[];
}

export interface TEAM_DATA {
    title: string;
    tagline: string;
    watermark: string;
    members: {
        name: string;
        designation: string;
        content: string;
        image: string
    }[]
}

export interface CONTACT_DATA {
    title: string;
    content: string;
    contact: { name: string; icon: string }[];
    image: string;
    form: {
        name: string;
        email: string;
        message: string;
        action: string;
    }
}

export interface FOOTER_DATA {
    title: string;
    slogan: string;
    quick_links: { name: string; path: string }[];
    social_media: { icon: string; path: string }[];
    copyright: string;
    tagline: string
}

export interface TECHNOLOGY_DATA {
    header: string;
    images: { src: string; alt: string }[];
}