import Service from "../../../../../../models/service";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }

    const { postID, post, userID } = req.query;

    if (!postID || !userID) {
      return res
        .status(405)
        .send({ message: "Invalid action: Please comment on a post" });
    }

    const service = await Service.findById(postID);

    const { content, author } = JSON.parse(req.body);

    service.comments.push({
      content,
      author,
    });

    await service.save();

    return res.json({ message: "Sucessful" });
  } catch (err) {
    console.log(err);
    return res.status(504).send({ message: `invalid action: ${err.message}` });
  }
};

export default handler;
