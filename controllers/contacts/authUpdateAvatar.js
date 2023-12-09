const path = require("path");
const fs = require("fs/promises")
const { User } = require("../../models/user");
const Jimp = require("jimp");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");


const updateAvatar = async(req, res)=> {
    const {_id} = req.user;
    const {path: tempUpload, originalname} = req.file;
    const avatarIMG = await Jimp.read(tempUpload);
    avatarIMG.resize(250, 250);
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, {avatarURL});
    await avatarIMG.writeAsync(resultUpload);

    res.json({
        avatarURL
    })
}

module.exports = updateAvatar;


// : path.basename(avatarURL)
// await fs.unlink(tempUpload);