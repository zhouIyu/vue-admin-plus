export default function getPageTitle (title: string) {
    const appTitle = 'Vue Admin Plus';
    if (title) {
        return title + '-' + appTitle;
    }
    return appTitle;
}
