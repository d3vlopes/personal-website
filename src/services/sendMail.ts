import { send } from 'emailjs-com'

type MailData = {
  name: string
  email: string
  subject: string
  message: string
}

export const sendMail = async (mailData: MailData) => {
  const templateID = 'template_yjvzbbb'

  await send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    templateID,
    mailData,
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  )
}
