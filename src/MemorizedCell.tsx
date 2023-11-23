import { FC, memo, useCallback } from "react";
import { TableCell } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Cell: FC<{ content?: string; type: "text" | "image" }> = ({
  content,
  type,
}) => {
  const classes = useStyles();

  // This logic is implemented due to a business decision, highlighting only cells that have changed.
  // This approach can also be extended to operate at the row level, contributing to performance improvement.
  const HighlightingCell = useCallback(
    () => (
      <TableCell className={classes.cell} data-testid="cell-td">
        {content ? (
          <>
            {type === "image" && (
              <img className={classes.picture} src={content} alt="user" />
            )}
            {type === "text" && (content ?? "--")}
          </>
        ) : (
          "--"
        )}
      </TableCell>
    ),
    [classes.cell, classes.picture, content, type]
  );

  return <HighlightingCell />;
};

export const MemeorizedCell = memo(Cell);

const useStyles = makeStyles(() => ({
  cell: {
    animation: "highlight 0.8s",
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
}));
