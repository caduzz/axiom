import axios from "axios";

export const api = {
    webHookSendMessage: async (message) => {
        const webhookUrl = 'https://discord.com/api/webhooks/1099185575900229652/QZ272AnyHKZBll5m6C5FT6K63kdabpSG38dmiMP3Yw1EJ9HMB3GAh2dVd-vwpwPqpJOj'
        const logoUrl = 'https://cdn.discordapp.com/avatars/847288977312317452/590dd33414260297b732e1aa95e17e8d.webp?size=160'
        const payload = {
            content: message,
            embeds: [{color: 0x0099ff,
                title: 'Axiom Site',
                url: 'http://localhost:3000',
                author: {
                    name: 'Some name',
                    icon_url: logoUrl,
                    url: logoUrl,
                },
                description: 'Some description here',
                thumbnail: {
                    url: logoUrl,
                },
                timestamp: new Date().toISOString(),
                footer: {
                    text: 'Some footer text here',
                    icon_url: logoUrl,
                }
            }]
        };
        
        await axios.post(webhookUrl, payload);
    }
}