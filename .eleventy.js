export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};
