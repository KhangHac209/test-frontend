import Link from "next/link";
import { Button, Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Box>
                <Typography variant="h4">Welcome to the HRM System</Typography>
                <Link href="/admin" passHref>
                    <Button variant="contained" color="primary" style={{ margin: "10px" }}>
                        Admin Dashboard
                    </Button>
                </Link>
                <Link href="/user" passHref>
                    <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
                        User Dashboard
                    </Button>
                </Link>
            </Box>
        </Layout>
    );
};

export default Home;
