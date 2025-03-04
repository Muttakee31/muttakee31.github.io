interface NavItem {
    title: string,
    url: string
}

export const jediLogo = "https://img.icons8.com/windows/32/000000/jedi-order.png";
// export const darthLogo = "https://img.icons8.com/nolan/32/darth-vader.png";
// export const darthLogo = "https://img.icons8.com/dusk/32/000000/darth-vader.png";
export const darthLogo = "https://img.icons8.com/color/32/000000/darth-vader.png";
export const skillTabs = ["Languages", "Frameworks", "Libraries", "Database", "Others"];
export const navItems: NavItem[] = [
    {
        title: 'About',
        url: '/'
    },
    {
        title: 'Skills',
        url: '/skills'
    },
    {
        title: 'Projects',
        url: '/projects'
    },
    {
        title: 'Timeline',
        url: '/career'
    },
    {
        title: 'Certifications',
        url: '/certifications'
    }
];
export const paths = navItems.map(item => item.url);