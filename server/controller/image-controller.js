import { GridFSBucket } from 'mongodb';
import grid from 'gridfs-stream'
import mongoose from 'mongoose';

const url = 'http://localhost:8000';

let gridfsBucket, gfs;

const conn = mongoose.connection;
conn.once('open', async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    gridfsBucket = new GridFSBucket(db.connection.db, {
      bucketName: 'fs'
    });

    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
  } catch (error) {
    console.error(error.message);
  }
});

export const uploadFile = (request, response) => {
  if (!request.file) {
    return response.status(404).json("File not found");
  }

  const imageUrl = `${url}/file/${request.file.filename}`;
  response.status(200).json(imageUrl);
}

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename })
    if (!file) {
      return response.status(404).json({ msg: 'File not found' });
    }

    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json({ msg: error.message });
  }
}
