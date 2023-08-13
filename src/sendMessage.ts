import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"
import { Size } from "./types"

const sendMessage = async (sizes: Size[]) => {
  const snsClient = new SNSClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: `${process.env.ACCESS_KEY_AWS}`,
      secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`,
    },
  })

  const formatMessage = sizes.map(size => {
    return size.size
  })

  const params = {
    Message: `Hay stock disponible en las tienda oficial de Vans para las zapas que quiere LUZ:\nTalles disponibles:\n${formatMessage.join(
      ", "
    )}`,
    TopicArn: `${process.env.TOPIC_ARN}`,
  }

  const run = async () => {
    try {
      const data = await snsClient.send(new PublishCommand(params))
      console.log(`Success:\n${data}`)
      return data
    } catch (err) {
      console.log(`Success:\n${err}`)
    }
  }
  await run()
}

export default sendMessage
