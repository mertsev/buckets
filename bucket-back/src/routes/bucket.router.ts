import { TRoutesInput } from "../types/routes";
import BucketController from "../controllers/bucket.controller";

export default ({ app }: TRoutesInput): any => {
  app.get(
    "/api/buckets/:firstBucket&:secondBucket&:desiredResult",
    (req, res) => {
      const buckets = BucketController.CalculateBuckets({
        a: Number(req.params.firstBucket),
        b: Number(req.params.secondBucket),
        goal: Number(req.params.desiredResult),
      });
      return res.send({ buckets });
    }
  );
};
