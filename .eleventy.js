// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("Phillip", function(firstName, lastName){
    return `<div class="Phillip">
      <div class="PhillipFirstName">${firstName}</div>
      <div class="PhillipLastName">${lastName}</div>
    </div>`;
  });
};