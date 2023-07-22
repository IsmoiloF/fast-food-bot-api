import { query } from 'express'
import {pool} from '../db/db'
import {bot} from '../index'
import { Context } from 'grammy'





type User = {
    id:number,
    name:string,
    tel_number:string,
}

type Product = {
    id:number,
    name:string,
    price:string,
    description:string,
}

type savat = {
    id:number,
    orders:string,
    user_id:number,
    product_id:number,
}




async function startReply(ctx:any): Promise<void>{
    try{
        const startText: string =  'Assalomu alaykum FastFood delivery botimizga hush kelibsiz bu bot yordamida siz ozingiz yoqtirgan ovqatlarni buyurtma qilishingiz mumkin'
        const Username:number = ctx.message.from.first_name
        const db = await pool 
        const name = ctx.message.from.username
        const userID = ctx.message.chat.id
        console.log(userID)
        ctx.reply(startText)
        ctx.reply('Iltimos ismingizni kiriting.')

        // db.query('SELECT * FROM users;', (err, result:any, filed)=>{
        //     // console.log(result[0])
        //     // console.log(userID)
        //     // console.log(result.length)
        //     let isUser = true;

        //     for(let i:number=0; i<result.length;i++){
        //         if(userID==result[i].userID){
        //             isUser=true
        //         }else{
        //             isUser=false
        //         }
        //     } 

        //     console.log(isUser)
        // })


    }catch(err){
        console.log(err);
    }
}

// async function inputName(ctx:any): Promise<void>{
//     try {
//         const ism = ctx.message?.text
//         const db = await pool 
//         const userID = ctx.message.from.id
//         const name = ctx.message.text 
//         const Username = ctx.message.from.username
//         db.query('INSERT INTO users(UserID, name, username) VALUES(?, ?, ?)',[userID, name, Username])
//         ctx.reply('Iltimos telfon raqmingizni kiriting.')
          
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function inputPhone_numebr(ctx:any) {
//     try {
//             var option = <any> {
//                 "parse_mode": "Markdown",
//                 "reply_markup": {
//                     "one_time_keyboard": true,
//                     "keyboard": [[{
//                         text: "My phone number",
//                         request_contact: true
//                     }]]
//                 }
//             };
//             bot.api.sendMessage(ctx.chat.id, "How can we contact you?", option).then(() => {
//                 // handle user phone
//             })

        
    
//     } catch (error) {
//         console.log(error)
//     }
// }




const controller = {
    startReply,
    // inputName,
    // inputPhone_numebr,
}

export {controller}