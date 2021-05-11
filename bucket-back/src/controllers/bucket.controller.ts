function CalculateBuckets(args: any): any {
  console.log(args);
  const { a, b, goal } = args;
  if ((a > goal && b > goal) || a < 0 || b < 0 || goal < 0)
    return "not possible";
  const minBucket = Math.min(a, b);
  const maxBucket = Math.max(a, b);
  const history: any[] = [];
  const BucketState = [0, 0];

  const pour = (minBucket: number, maxBucket: number, goal: number) => {
    while (BucketState[0] != goal && BucketState[1] != goal) {
      if (history.length > 100) return;
      history.push([...BucketState]);
      //   console.log("history", history);
      // check if bigger Bucket is empty
      if (BucketState[0] === 0) {
        // if first Bucket is empty, fill it up
        BucketState[0] = minBucket;
        continue;
      } else if (BucketState[0] != 0) {
        // if first Bucket is not empty
        // check if second Bucket is full
        // if it is, pour it out and repeat the cycle
        if (BucketState[1] === maxBucket) {
          BucketState[1] = 0;
          continue;
        }
        if (BucketState[0] + BucketState[1] > maxBucket) {
          const BucketDiff = maxBucket - BucketState[1];
          BucketState[0] -= BucketDiff;
          BucketState[1] = maxBucket;
        } else {
          BucketState[1] += BucketState[0];
          BucketState[0] = 0;
        }
      }
    }
    history.push([...BucketState]);
  };
  pour(minBucket, maxBucket, goal);
  console.log("history", history);
  if (history.length > 1000) return "not possible";
  return history;
}

export default { CalculateBuckets };
