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
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", {pageTitle:"Home", videos});
};
export const watch = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    return res.render("watch", {pageTitle: video.title, video: video});
}
export const getEdit = (req, res) => {
    const {id} = req.params;
    return res.render("edit", {pageTitle:`Editing: `});
}
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
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
            hashtags: hashtags.split(",").map((word)=>`#${word}`),
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
}