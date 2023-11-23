import { FC } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  colors,
} from "@mui/material";
import { User } from "./Apis/Users/Types";
import { makeStyles } from "@mui/styles";
import { MemeorizedCell } from "./MemorizedCell";

export const UserTable: FC<{ user?: User }> = ({ user }) => {
  const classes = useStyles();
  const headers = ["First Name", "Last Name", "Country", "Picture"];
  return (
    <Table size="medium" className={classes.table}>
      <TableHead>
        <TableRow>
          {headers.map((item) => (
            <TableCell key={item} width="25%">
              <Typography fontWeight="bold">{item}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <MemeorizedCell type="text" content={user?.name.first} />
          <MemeorizedCell type="text" content={user?.name.last} />
          <MemeorizedCell type="text" content={user?.location.country} />
          <MemeorizedCell type="image" content={user?.picture.thumbnail} />
        </TableRow>
      </TableBody>
    </Table>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    width: "700px !important",
    border: `solid 1px ${colors.grey[300]}`,
  },
  thead: {
    fontWeight: "bold",
    fontSize: 14,
  },
}));
