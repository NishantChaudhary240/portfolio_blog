import React from "react";
import { Box, Button, Container, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Data } from "../data/Data";
import { FaSun, FaMoon} from "react-icons/fa";

const NavBar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    toast({
      title: "Logged Out Successfully.",
      status: "success",
      variant: "left-accent",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box backgroundColor="#143039">
      <Container maxWidth="90em" minHeight="4em">
        <Flex alignItems="center" justifyContent="space-between" minHeight={16}>
          <Box>
            <Text
              color="#ffffff"
              fontSize="2em"
              fontWeight="bold"
              textDecoration="none"
              textTransform="uppercase"
              as={Link}
              to="/"
            >
              {Data.name}
            </Text>
          </Box>

          <Flex alignItems="center" gap="3em" fontSize={"25px"} fontWeight={700} margin={"15px"}>
            <NavItem to="/" label="Home" currentPath={pathname} />
            <NavItem to="/portfolio" label="Portfolio" currentPath={pathname} />
            <NavItem to="/blogs" label="Blogs" currentPath={pathname} />

            {!!user && (
              <Box>
                <Button
                backgroundColor={"#1e4e5c"}
                fontWeight={600}
                  width={"70px"}
                  height={"35px"}
                  borderRadius={"10px"}
                  variant="outline"
                  color="#ffffff"
                  _hover={{ color: "#ffffff", backgroundColor: "#000000" }}
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                    toast({
                      title: "Logged Out Successfully.",
                      status: "success",
                      variant: "left-accent",
                      position: "top-right",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Log Out
                </Button>
              </Box>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const NavItem = ({ to, label, currentPath }) => (
  <Box _hover={{ "& > div": { transform: "scaleX(1.3)" } }}>
    <Link to={to} style={{ textDecoration: "none", color: "#ffffff" }}>
      {label}
    </Link>
    <Box
      height={0.5}
      backgroundColor="#ffffff"
      _hover={{ transform: "scaleX(1.3)" }}
      transform={`scaleX(${currentPath === to ? "1.3" : "0"})`}
      transition="all 0.5s ease-in-out"
    ></Box>
  </Box>
);

export default NavBar;
