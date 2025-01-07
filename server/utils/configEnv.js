import dotenv from 'dotenv'
import path from "path"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const environment = process.env.ENVIRONMENT;

dotenv.config({path: path.join(`${__dirname}`, `../env/prod.env`)});

// For ubuntu uncommnet this when pushing for production
// dotenv.config({path: path.join(`${__dirname}`, `../env/${environment}.env`)});