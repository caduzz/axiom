import { BsTools, BsFillShieldFill, BsInfoCircleFill, BsFire } from "react-icons/bs"


export const botinfos = {
    commands: {
        data: [
            {
                name: "avatar",
                description: "Mostra o Avatar do usuario.",
                status: "on",
                type: "info"
            },
            {
                name: "help",
                description: "Informa os principais comandos.",
                status: "on",
                type: "info"
            },
            {
                name: "ban",
                description: "Selecione um membro para banir.",
                status: "on",
                type: "moderation"
            },
            {
                name: "clear",
                description: "Limpar messagens de um chat.",
                status: "on",
                type: "moderation"
            },
            {
                name: "kick",
                description: "Selecione um membro e expulse-o.",
                status: "on",
                type: "moderation"
            },
            {
                name: "reaction_role",
                description: "Gera uma mensagem de reaction role.",
                status: "off",
                type: "moderation"
            },
            {
                name: "unban",
                description: "Selecione um membro para desbanir.",
                status: "on",
                type: "moderation"
            },
            {
                name: "color",
                description: "Pegar 5 cores de uma imagens.",
                status: "on",
                type: "utils"
            },
            {
                name: "ocr",
                description: "Ocr, uma biblioteca que pega o texto em uma imagen.",
                status: "off",
                type: "utils"
            },
            {
                name: "chat",
                description: "Integração com chat gpt.",
                status: "on",
                type: "utils"
            },
            {
                name: "imagine",
                description: "Cria uma imagen para criar.",
                status: "on",
                type: "utils"
            },
            {
                name: "create_count_tinder",
                description: "Cria uma imagen para criar.",
                status: "off",
                type: "tinder"
            },
            {
                name: "list_matchs",
                description: "Cria uma imagen para criar.",
                status: "off",
                type: "tinder"
            },
        ],
        type: [
            { 
                name: "info",
                icon: (<BsTools size={16} style={{marginRight: 10}}/>),
                count: 2
            },
            { 
                name: "moderation",
                icon: (<BsFillShieldFill size={16} style={{marginRight: 10}}/>),
                count: 7
            },
            { 
                name: "utils",
                icon: (<BsInfoCircleFill size={16} style={{marginRight: 10}}/>),
                count: 4
            },
            { 
                name: "tinder",
                icon: (<BsFire size={16} style={{marginRight: 10}}/>),
                count: 2
            },
        ]
    }
}