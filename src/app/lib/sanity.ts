import { createClient } from '@sanity/client'


export const sanityClient = createClient({
    projectId: 'msyw98qy',   // Replace with your project ID
    dataset: 'firstdataset',          // Or your dataset name
    apiVersion: '2025-05-21',       // Use a recent date
    useCdn: true,                   // Use the CDN for public data
  })
  