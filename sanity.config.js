import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import project from './sanity/schemas/port-schemas'

export default defineConfig({
  name: 'default',
  title: 'violet-locust',
  projectId: 'qsd8xwuz',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2023/7/7',
  plugins: [deskTool()],
  schema: {types: [project]}
})
