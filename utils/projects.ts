export interface Project {
    title: string,
    description: string[],
    url?: string,
    stack: string[]
}
export const projects: Project[] = [
    {
        title: "Employee Intranet for Fast food chain",
        description: [
            "A CMS for managing employees and share updates",
            "Worked on Optimizely CMS and its various features",
        ],
        stack: [".NET Core", "Optimizely CMS", "SSO", "Content Graph", "Azure Services"]
    },
    {
        title: "Media Sales Intelligence platform",
        description: [
            "A SaaS solution for media salespeople to track business",
            "Worked with Serverless, Event-driven architecture",
            "Integrated services of Salesforce, Nylas, Outlook, Google Ad manager for business analytics"
        ],
        stack: [".NET Core", "ASP .NET MVC", "Angular", "SQL Server", "AngularJS", "Azure Services"]
    },
    {
        title: "DevPro",
        description: [
            "Portfolio for a renewable power consultancy firm",
            "Integrated CMS functionality for dynamic content generation",
            "Used Next.js to build the frontend"
        ],
        stack: ["Next.js", "Strapi"]
    },
    {
        title: "Workforce tracking",
        description: [
            "A complete tracking solution to track worker and his distance from workplace",
            "Collects users location from smartphone via ionic app",
            "Shows the real-time location of worker in a web app"
        ],
        stack: ["ASP.NET Web API", "Angular", "Ionic"]
    },
    {
        title: "Fieldbuzz Sales",
        description: [
            "A SaaS solution for FMCG organizations to store their data and hierarchical info",
            "Users had the control to manipulate UI and generate reports from the user panel",
            "Worked on data visualization and query optimization"
        ],
        stack: ["Django", "jQuery", "REST API"]
    },
    {
        title: "Mission DMC MCQ",
        description: [
            "Android App for preparing for medical admission",
            "Users can buy subscription and sit for daily exams",
            "Uses Firebase for authentication"],
        stack: ["Django", "Android", "Postgres", "Firebase"]
    },
    {
        title: "Shop Manager",
        description: [
            "A desktop app to track daily sales, product stock and supply bills in a shop",
            "Shop owner can track due payment from the customer",
            "Generates daily bills and reports"],
        stack: ["React", "Electron", "Material UI"]
    },
    {
        title: "Itehk Admin Panel",
        description: [
            "An admin panel that keeps track of the couriers and drivers in an online courier platform",
            "Shows location of drivers delivering the courier",
            "Onboards new drivers and admins"],
        stack: ["React", "Material UI", "Mapbox"]
    },
    {
        title: "Itehk Web App",
        description: [
            "An web app for where customers can use the service to deliver parcels",
            "Added stripe as payment gateway",
            "Shows status of orders"
            ],
        stack: ["React", "Material UI"],
    },
    {
        title: "Dingi Developer Console",
        description: [
            `Web app console to show the clients about their monthly usage and billing details of Dingi Map.`,
            "Clients can pay bills via any payment method",
            "Shows cost and number of API calls per service"
            ],
        stack: ["React", "Bootstrap", "Firebase"]
    },
    {
        title: "FollowR Enterprise",
        description: [
            "A complete SaaS solution for organization to track all their vehicles",
            "Worked on showing the location and movement of vehicles real time",
            "Integrated google maps and deployed the project for client-specific environments"],
        stack: ["React", "Google Maps API"],
    },
    {
        title: "FollowR Order Portal",
        description: [
            "Platform to order tracking device",
            "Showcases trackers available for sales"
            ],
        stack: ["Next.js", "Bootstrap", "Nginx"],
    },
    {
        title: "Inspiring Bangladesh",
        description: ["Website to show funds from donors for a volunteering organization"],
        stack: ["React", "Bootstrap"]
    }
]