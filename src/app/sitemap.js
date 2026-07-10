export default function sitemap() {
  const baseUrl = "https://codeaiinstitute.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/data-science`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/data-analytics`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gen-ai-mastery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gen-ai-tools-mastery`,
      lastModified: new Date(),
    },
  ];
}