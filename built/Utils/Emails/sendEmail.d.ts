export declare const SendEmail: (destinataireEmail: string, subjectEmail: string) => Promise<{
    success: boolean;
    response: string;
    error?: undefined;
} | {
    success: boolean;
    error: unknown;
    response?: undefined;
}>;
