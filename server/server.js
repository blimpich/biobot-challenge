const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const kits = require("./fixture");

// TODO: in a production environment we shouldn't allow any origin to access our API
app.use(cors());

app.get("/api/kits/filter", (req, res) => {
  const { label_id } = req.query;

  if (!label_id) {
    return res
      .status(400)
      .json({ error: "Label ID is required for filtering." });
  }

  const prefixLength = label_id.length;

  const filteredKits = kits.filter(
    (kit) => kit.label_id.slice(0, prefixLength) === label_id
  );

  res.json(filteredKits);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
