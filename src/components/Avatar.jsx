import {
    Avatar,
    Menu,
    Text,
    MenuButton,
    MenuList,
    MenuItem,
    ChakraProvider
  } from "@chakra-ui/react";
  import propTypes from "prop-types";

import { BsBoxArrowInLeft } from "react-icons/bs";

const UserAvatar = (prop) => {
  return (
    <ChakraProvider>
       <Menu>
          <MenuButton>
            <Avatar src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <Text fontWeight="500" p={"1rem"}>
              Hello, {prop.userName}
            </Text> 
            <MenuItem>
              <BsBoxArrowInLeft color="red" />
              <Text p={"0 1rem"} align={"center"} color={"red"}>
                Log out
              </Text>
            </MenuItem>
          </MenuList>
        </Menu> 
    </ChakraProvider>
  )
}

UserAvatar.propTypes = {
    userName: propTypes.string
};



export default UserAvatar
