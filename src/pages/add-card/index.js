import Head from "next/head";
import { Box, Card, CardContent, CardHeader, Container, Divider, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import dynamic from "next/dynamic";
import { AddStaff } from "src/components/staff/add-staff";
import ListOfStaff from "src/components/staff/staff-lists";
import { useContext, useEffect } from "react";
import { Store } from "src/statesManagement/store/store";
import { useRouter } from "next/router";
import { getStaff } from "src/statesManagement/store/actions/register-staff-action";
import { getStores } from "src/statesManagement/store/actions/store-outlet-action";
import { useSnackbar } from "notistack";
import { COMPANY_NAME } from "src/utils/company_details";
import { getCardPaymentLink } from "src/statesManagement/store/actions/add-card";

const DynamicComponentWithNoSSR = dynamic(() => import("src/components/navbar-branch-indicator"), {
  ssr: false,
});

const Staff = () => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const { userInfo, staff, branch, error } = state;
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
   
    !userInfo && router.push("/auth");
 getCardPaymentLink({ dispatch: dispatch, enqueueSnackbar: enqueueSnackbar, Router: router});
  }, []);
  return (
    <>
      <Head>
        <title>
          Add Card | {COMPANY_NAME}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <DynamicComponentWithNoSSR />
        <Container maxWidth={false}>
       
          <Box sx={{ mt: 3 }}>
         
              <Card>
                <CardHeader title="Add Card" />
                <Divider />
                <Typography
                  sx={{
                    mt: 4,
                  }}
                  variant="h6"
                  style={{ textAlign: "center" }}
                >
                 Please wait,  You will be redirected to the payment page on a new tab.
                </Typography>
                <Typography
                  sx={{
                    mt: 4,
                  }}
                  variant="subtitle2"
                  style={{ textAlign: "center" }}
                >
                 You can leave this page after completing your payment on the new tab.
                </Typography>
                <CardContent></CardContent>
              </Card>
          
          </Box>
        </Container>
      </Box>
    </>
  );
};
Staff.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Staff;
