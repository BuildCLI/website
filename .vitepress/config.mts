import {DefaultTheme, defineConfig} from 'vitepress';
import {getLatestReleaseOrTag} from "./utils/repository";
import {gitUrl, repoUrl, docsUrl, repository} from "./utils/constants";

const tag = await getLatestReleaseOrTag(repository);
export default defineConfig({
    title: "BuildCLI Docs",
    description: "Java Project Management Tool",
    srcDir: 'src',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    head: [['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }]],
    
    themeConfig: {
        nav: navBarItems(),
        sidebar: sidebar(),
        search: {
            provider: 'local',
        },
        appearance: {
            initialValue: 'dark'
        },
        socialLinks: [
            {icon: 'github', link: repoUrl},
            {icon: 'discord', link: 'https://discord.gg/rQjbtF7GdP'},
        ],

        editLink: {
            pattern: docsUrl + '/edit/main/src/:path',
            text: 'Edit this page on GitHub',
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        }
    },
});

function navBarItems(): DefaultTheme.NavItem[] {
    return [
        {text: 'Home', link: '/'},
        {text: 'Getting Started', link: '/installation/'},
        {
            text: tag,
            items: [
                {text: 'Changelog', link: repoUrl + '/blob/main/CHANGELOG.md'},
                {text: 'Releases', link: repoUrl + '/releases'},
                {text: 'License', link: repoUrl + '/blob/main/LICENSE'},
            ],
        },
    ];
}

function sidebar(): DefaultTheme.Sidebar {
    return [
        {
            base: '/',
            text: 'Reference',
            collapsed: false,
            items: sidebarReference(),
        },
        {
            base: '/commands/',
            text: 'Available Commands',
            link: '/',
            collapsed: false,
            items: sidebarCommands(),
        },
        {
            base: '/faq/',
            text: 'FAQ',
            collapsed: false,
            items: sidebarFAQ(),
        },
    ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Installation',
            link: 'installation',
        },
    ];
}

function sidebarFAQ(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Why BuildCLI?',
            link: 'why',
        },
    ];
}

function sidebarCommands(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'About',
            link: 'about',
        },
        {
            text: 'AI',
            link: 'ai',
        },
        {
            text: 'Autocomplete',
            link: 'autocomplete',
        },
        {
            text: 'Changelog',
            link: 'changelog',
        },
        {
            text: 'Config',
            link: 'config',
        },
        {
            text: 'Doctor',
            link: 'doctor',
        },
        
        {
            text: 'Hook',
            link: 'hook',
        },
        {
            text: 'Project',
            link: 'project',
        },
        {
            text: 'Run',
            link: 'run',
        },
        {
            text: 'Version',
            link: 'version',
        },
    ];
}
