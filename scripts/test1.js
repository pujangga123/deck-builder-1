var Jimp = require("jimp").Jimp;
// open a file called "lenna.png"
var image = await Jimp.read("sample2.png");
image.resize(256, 256); // resize
await image.write("sample2-resized.jpg"); // save
