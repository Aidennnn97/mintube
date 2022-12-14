import Video from '../models/Video';

// callback
// Video.find({}, (error, videos) => {
//     if(error){
//         return res.render("server-error");
//     }
//     return res.render("home", {pageTitle:"Home", videos});
// });

export const home = async(req, res) => {
    //promise
    const videos = await Video.find({}).sort({createdAt: "desc"});
    console.log(videos);
    return res.render("home", {pageTitle:"Home", videos});
};
export const watch = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    if(video === null){
        return res.render("404", {pageTitle: "Video not found."});
    }
    return res.render("watch", {pageTitle: video.title, video: video});
}
export const getEdit = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle: "Video not found."});
    }
    return res.render("edit", {pageTitle:`Edit: ${video.title}`, video});
}
export const postEdit = async(req, res) => {
    const {id} = req.params;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id: id});
    if(!video){
        return res.render("404", {pageTitle: "Video not found."});
    }
    await Video.findByIdAndUpdate(id, {
        title, 
        description, 
        hashtags: Video.formatHashtags(hashtags),
    });

    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req ,res) => {
    return res.render("upload", {pageTitle: `Upload Video`});
};

export const postUpload = async(req, res) => {
    const {title, description, hashtags} = req.body;
    // const video = new Video({
    //     title: title,
    //     description: description,
    //     createdAt: Date.now(),
    //     hashtags: hashtags.split(",").map((word)=>`#${word}`),
    //     meta: {
    //         views: 0,
    //         rating: 0,
    //     }
    // });
    // await video.save();

    try {
        // 위의 주석과 같음
        await Video.create({
            title: title,
            description: description,
            hashtags: Video.formatHashtags(hashtags),
            meta: {
                views: 0,
                rating: 0,
            }
        });
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.render("upload", {pageTitle: `Upload Video`, errorMessage: error._message});
    }
};

export const deleteVideo = async(req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
};

export const search = async(req, res) => {
    // console.log(req.query);
    const {keyword} = req.query;
    let videos = [];
    if(keyword){
        videos = await Video.find({
            title: {
                $regex: new RegExp(`${keyword}$`, "i"),
            },
        });
    }
    return res.render("search", {pageTitle:`Search`, videos});
}