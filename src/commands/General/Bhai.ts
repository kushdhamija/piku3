import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bhai',
            description: 'sends a specific sticker',
            category: 'general',
            usage: `${client.config.prefix}bhai`,
            aliases: ['bhai']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
            const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
            const n = [
            './assets/STK-20220328-WA0814.webp'
        ]

       M.reply(sticker)
