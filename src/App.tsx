import { FC, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useApi } from "./Apis/UseApi";
import { getUser } from "./Apis/Users/Users";
import { UserTable } from "./UserTable";

export const App: FC = () => {
  const { apiCall: userApi, loading, data: userData } = useApi(getUser);

  useEffect(() => {
    userApi();
  }, [userApi]);

  return (
    <Grid
      container
      height="90vh"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Grid
          container
          mb={3}
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography variant="h5">Random User:</Typography>
          <Button
            variant="contained"
            disabled={loading}
            onClick={() => userApi()}
            size="small"
          >
            Refetch
          </Button>
        </Grid>
        <UserTable user={userData?.results[0]} />
      </Grid>
    </Grid>
  );
};
