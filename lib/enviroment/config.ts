import * as dotenv from 'dotenv'


dotenv.config()

const config ={
    geminiApiKey: process.env.GEMINI_API_KEY,
    openApiKey: process.env.OPEN_API_KEY!,
}
      

export default config