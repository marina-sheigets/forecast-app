export const getFormattedDate = (d: number) => {
    // Convert seconds to milliseconds
    const date = new Date(d * 1000);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
}