import React from "react";
import { useState, Dispatch } from "react";
import useSWR from "swr";
import axios from "axios";

import {
  VStack,
  HStack,
  Text,
  IconButton,
  Flex,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import * as ts from "./Ts";
import PermissionUpdate from "./PermissionUpdate";

export default function MainFrame() {
  /********************* List all permission *****/
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/findPermission", fetcher, {
    refreshInterval: 1000,
  });

  console.log(data);

  return (
    <>
      {" "}
      <Flex verticalAlign="top" w="100%">
        <VStack
          direction="column"
          p={5}
          w="1200px"
          overflowY="auto"
          //borderWidth="3px"
          //borderColor="red.200"
          verticalAlign="top"
        >
          <HStack>PerformerCreate</HStack>

          <RadioGroup defaultValue="">
            <VStack w="100%" borderWidth="0px">
              {data &&
                data.map((permission: ts.Permission, index: any) => {
                  //console.log("Performer_id==", item.Performer_id);

                  return (
                    <HStack
                      className="performer_row"
                      key={index}
                      //backgroundColor="gray.50"
                      height="50px"
                      w="100%"
                      p={3}
                    >
                      <Text w="50px">{permission.permission_ID}</Text>
                      <Text w="100px">{permission.permission_section}</Text>
                      <Text w="100px">
                        {permission.permission_section_code}
                      </Text>
                      <Text w="100px">{permission.permission_item}</Text>
                      <Text w="100px">{permission.permission_item_code}</Text>
                      <Text w="300px">
                        {permission.permission_item_description}
                      </Text>
                      <PermissionUpdate permission={permission} />

                      <Radio value={permission.permission_item_code}></Radio>
                    </HStack>
                  );
                })}
            </VStack>
          </RadioGroup>
        </VStack>
      </Flex>
    </>
  );
}
