import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const CustomMenu = () => {
  return (
    <Menu>
      <MenuButton
        border={"1px"}
        fontWeight={"medium"}
        borderColor={"gray.500"}
        borderRadius={"full"}
        minW={"120px"}
        px={6}
        py={2}
        bg={"gray.800"}
      >
        Chain
      </MenuButton>
      <MenuList>
        <MenuItem name="departure-chain"> Polygon</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
