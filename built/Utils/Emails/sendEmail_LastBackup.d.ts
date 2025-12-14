export declare const SendEmail: (defaultLayout: string, templateName: string, destinataireEmail: string, subjectEmail: string, contextObject: any) => Promise<{
    success: boolean;
    response: string;
    error?: undefined;
} | {
    success: boolean;
    error: unknown;
    response?: undefined;
}>;
