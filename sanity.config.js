import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'violet-locust',
  projectId: 'qsd8xwuz',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2023/7/7',
  plugins: [deskTool()],
  schema: {types: schemas}
})