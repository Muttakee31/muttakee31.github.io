export interface Project {
    title: string,
    description: string[],
    url?: string,
    stack: string[]
}
export const projects: Project[] = [
    {
        title: "Dingi Developer Console",
        description: [`Web app console to show the clients about their monthly usage and billing details of Dingi Map.`,
            "Clients can pay bills via any payment method",
            "Shows cost and number of API calls per service"
        ],
        stack: ["React", "Bootstrap", "Firebase"]
    },
    {
        title: "Shop Manager",
        description: ["A desktop app to track daily sales, product stock and supply bills in a shop",
                    "Shop owner can track due payment from the customer",
                    "Generates daily bills and reports"],
        stack: ["React", "Electron", "Material UI"]
    },
    {
        title: "Itehk Admin Panel",
        description: ["An admin panel that keeps track of the couriers and drivers in an online courier platform",
                    "Shows location of drivers delivering the courier",
                    "Onboards new drivers and admins"],
        stack: ["React", "Material UI", "Mapbox"]
    },
    {
        title: "Mission DMC MCQ",
        description: ["Android App to practice medical questions and participate in daily exams",
            "Uses SSLCommerz to activate subscription",
            "Uses Firebase to create socially linked account"],
        stack: ["Django", "Android", "Rest API", "Firebase"]
    },
    {
        title: "Itehk Web App",
        description: ["An web app for where customers can use the service to deliver parcels",
                    "Added stripe as payment gateway",
                    "Shows status of orders"],
        stack: ["React", "Material UI"],
    },
    {
        title: "FollowR Order Portal",
        description: ["Platform to order tracking device",
                    "Showcases trackers available for sales",
                    "Calculates the additional feature cost"],
        stack: ["Next.js", "Bootstrap"],
    },
    /*{
        title: "Field Buzz Sales",
        description: [""],
        stack: ["Django", "jQuery"]
    },*/
    {
        title: "Inspiring Bangladesh",
        description: ["Website to show funds from donors for a volunteering organization"],
        stack: ["React", "Bootstrap"]
    }
]