import { FC, useState, useEffect, memo } from "react";
import { TableCell } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Cell: FC<{ content?: string; type: "text" | "image" }> = ({
  content,
  type,
}) => {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(true);
    setTimeout(() => setFlag(false), 500);
  }, [content]);

  return (
    <TableCell className={flag ? classes.cell : ""}>
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
  );
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
