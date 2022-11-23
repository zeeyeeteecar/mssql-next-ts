import React, { FunctionComponent } from "react";
import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IconButton,
  Button,
  HStack,
  Input,
  useToast,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
//import {Permission,  Prop_Permission } from "../Ts";

interface Permission {
  permission_ID: number;
  permission_section: string;
  permission_section_code: string;
  permission_item: string;
  permission_item_code: string;
  permission_item_description: string;
}

interface Prop_Permission {
  permission: Permission;
}

// const EditPerformerButton: FunctionComponent<Props> = ({
//   Performer_id,
//   Performer_title,
// }) => {
export default function PermissionUpdate({ permission }: Prop_Permission) {
  //const { Performer_id } = props;
  //const { Performer_title } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Permission>();

  const toast = useToast({
    position: "top",
    title: "record updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  /***************************update********* */
  const handleUpdate = async (item: Permission) => {
    console.log(item.permission_ID);
    console.log(item.permission_section);

    try {
      const body = {
        permission_ID: item.permission_ID,
        permission_section: item.permission_section,
        permission_section_code: item.permission_section_code,
        permission_item: item.permission_item,
        permission_item_code: item.permission_item_code,
        permission_item_description: item.permission_item_description,
      };
      //alert(JSON.stringify(body));
      await fetch("../api/updatePermission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        containerStyle: {
          border: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="Search database"
        icon={<EditIcon />}
        fontSize="20px"
        color="gray.200"
        borderWidth={0}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Performer Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(handleUpdate)}>
              <VStack spacing={5}>
                <HStack>
                  <Text w={"110px"}>ID</Text>
                  <Input
                    {...register("permission_ID")}
                    defaultValue={permission.permission_ID}
                    readOnly={true}
                  ></Input>
                </HStack>

                <HStack>
                  <Text w={"110px"}>section</Text>
                  <Input
                    {...register("permission_section")}
                    defaultValue={permission.permission_section}
                  ></Input>
                </HStack>

                <HStack>
                  <Text w={"110px"}>section code</Text>
                  <Input
                    {...register("permission_section_code")}
                    defaultValue={permission.permission_section_code}
                  ></Input>
                </HStack>

                <HStack>
                  <Text w={"110px"}>item</Text>
                  <Input
                    {...register("permission_item")}
                    defaultValue={permission.permission_item}
                  ></Input>
                </HStack>

                <HStack>
                  <Text w={"120px"}>item_code</Text>
                  <Input
                    {...register("permission_item_code")}
                    defaultValue={permission.permission_item_code}
                  ></Input>
                </HStack>

                <HStack>
                  <Text w={"110px"}>description</Text>
                  <Input
                    {...register("permission_item_description")}
                    defaultValue={permission.permission_item_description}
                  ></Input>
                </HStack>

                <VStack>
                  <Button type="submit" colorScheme="blue" w="300px">
                    Submit
                  </Button>
                  <Button w="300px" onClick={onClose}>
                    Close
                  </Button>
                </VStack>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

//export default EditPerformerButton;
