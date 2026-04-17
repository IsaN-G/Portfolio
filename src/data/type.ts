export type Projects = {
    id:  string;
    title: string;
    image: string;
    description?: string;
    year?: number | string;
    client?: string;
    role?: string;
    technologies?: string[];
    tags?: string[];
    liveUrl?: string;
    githubUrl?: string;
    category?: string;
    workflow: string;
    architecture: string;
};
