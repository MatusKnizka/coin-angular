export interface Framework {
    id: string;
    name: string;
    version: string;
    deprecationDate: Date;
    hypLevel: HypeLevel;
}

export enum HypeLevel {
    MINIMUM = 'MINIMUM',
    MEDIUM = 'MEDIUM',
    MAXIMUM = 'MAXIMUM'
}


