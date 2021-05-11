import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  incrementFirstBucket,
  decrementFirstBucket,
  incrementSecondBucket,
  decrementSecondBucket,
  incrementGoal,
  decrementGoal,
  getResultAsync,
  selectFirstBucket,
  selectSecondBucket,
  selectGoal,
  selectResult,
} from "./counterSlice";
import styles from "./Counter.module.css";
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";

export function Counter() {
  const firstBucket = useAppSelector(selectFirstBucket);
  const secondBucket = useAppSelector(selectSecondBucket);
  const goalNumber = useAppSelector(selectGoal);
  const results = [...useAppSelector(selectResult)];
  const listItems = results.map((step: any) => (
    <li>
      {step[0]}, {step[1]}
    </li>
  ));
  const dispatch = useAppDispatch();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      // root: {
      //   flexGrow: 1,
      // },
      paper: {
        padding: theme.spacing(2),
      },
    })
  );

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid container spacing={3}>
          <Paper className={classes.paper}>
            <div className={styles.row}>
              Bucket 1
              {firstBucket > 0 && (
                <button
                  className={styles.button}
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrementFirstBucket())}
                >
                  -
                </button>
              )}
              <span className={styles.value}>{firstBucket}</span>
              <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(incrementFirstBucket())}
              >
                +
              </button>
            </div>
            <div className={styles.row}>
              Bucket 2
              {secondBucket > 0 && (
                <button
                  className={styles.button}
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrementSecondBucket())}
                >
                  -
                </button>
              )}
              <span className={styles.value}>{secondBucket}</span>
              <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(incrementSecondBucket())}
              >
                +
              </button>
            </div>
            <div className={styles.row}>
              Goal
              {goalNumber > 0 && (
                <button
                  className={styles.button}
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrementGoal())}
                >
                  -
                </button>
              )}
              <span className={styles.value}>{goalNumber}</span>
              <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(incrementGoal())}
              >
                +
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() =>
                  dispatch(
                    getResultAsync({ firstBucket, secondBucket, goalNumber })
                  )
                }
              >
                Request answer
              </button>
            </div>
          </Paper>
          <Paper className={classes.paper}>{listItems}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
