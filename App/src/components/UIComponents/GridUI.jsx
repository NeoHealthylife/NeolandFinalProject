import React from "react";
import CardComp from "../Card";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { Grid, GridItem } from "@chakra-ui/react";

const GridUI = (props) => {
  const { items } = props;
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} gap={6}>
      {items.map((item) => (
        <GridItem key={"item"} justifyContent={"center"}>
          <CardComp
            key={item._id}
            className="card"
            imgSrc={item.image}
            tags={item.tags}
            node={item}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default GridUI;
