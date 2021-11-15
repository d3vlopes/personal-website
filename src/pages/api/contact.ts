import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.USERMAIL,
    to: process.env.RECEIVERMAIL,
    replyTo: req.body.email,
    subject: `Contato através do site - ${req.body.subject}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Enviado por:
    ${req.body.email}</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      res.send({ status: 'fail' })
    } else {
      console.log(info)
      res.send({ status: 'success' })
    }
  })
}
