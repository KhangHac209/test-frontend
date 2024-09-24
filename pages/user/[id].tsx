import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/Layout";

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [employee, setEmployee] = useState<any>(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    setEmployee(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [id]);

    if (!employee) return <Typography>Loading...</Typography>;

    return (
        <Layout>
            <Typography variant="h4">{employee.name}'s Profile</Typography>
            <Typography>Email: {employee.email}</Typography>
            <Typography>Phone: {employee.phone}</Typography>
            <Typography>Website: {employee.website}</Typography>
            <Typography>Company: {employee.company.name}</Typography>
        </Layout>
    );
};

export default UserProfile;
