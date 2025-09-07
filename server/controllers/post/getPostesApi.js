import PostModel from "../../models/PostModel.js";

const getPostesApi = async (req, res) => {
  const { state, queryTags } = req.body;

  if (queryTags.length == 0 || !state) {
    console.log(`Invalid request: Query tags and stae is requered!`);
    return res
      .status(401)
      .json({ success: false, message: "Invalid request!" });
  }

  try {
    let data = await PostModel.find({ tags: { $in: queryTags } });
    if (data?.length <= 5) {
      data = await PostModel.find({ ["address.state"]: state });
    }

    console.log(data);
    res.status(200).json({ success: true, message: "Got post data!", data });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    res
      .status(501)
      .json({ message: "Internal server error!", success: false, error });
  }
};

export default getPostesApi;
