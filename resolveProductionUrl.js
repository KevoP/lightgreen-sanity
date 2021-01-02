const project_url = process.env.SANITY_STUDIO_PROJECT_URL
const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET

export default function resolveProductionUrl(document) {
   return `${project_url}/api/preview?secret=${secret}&slug=${document.slug.current}`;
 }