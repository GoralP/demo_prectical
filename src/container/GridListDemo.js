// import React from "react";

// const GridList = () => {
//   return <div>gridlist</div>;
// };

// export default GridList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";
import image from "../image/nature.jpg";
import spring from "../image/spring.jpg";
import morning from "../image/morning.jpg";
import burgers from "../image/burgers.jpg";
// import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 850,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

// import image from 'path/to/image.jpg';
// [etc...]

const tileData = [
  {
    img: image,
    title: "Image",
    author: "author",
    featured: true,
    cols: 1,
  },
  {
    img: burgers,
    title: "burgers",
    author: "author",
    featured: true,
    cols: 1,
  },
  {
    img: morning,
    title: "morning",
    author: "author",
    featured: true,
    cols: 1,
  },

  {
    img: image,
    title: "Image",
    author: "author",
    featured: true,
    cols: 1,
    cols: 1,
  },
  {
    img: burgers,
    title: "burgers",
    author: "author",
    featured: true,
    cols: 1,
  },
  {
    img: morning,
    title: "morning",
    author: "author",
    featured: true,
    cols: 1,
  },

  //   {
  //     [etc...]
  //  },
];

const GridListDemo = () => {
  const classes = useStyles();

  

  return (
    // <div className={classes.root}>
    //   <GridList cellHeight={200} spacing={1} className={classes.gridList}>
    //     {tileData.map((tile) => (
    //       <GridListTile
    //         key={tile.img}
    //         cols={tile.featured ? 2 : 1}
    //         rows={tile.featured ? 2 : 1}
    //       >
    //         <img src={tile.img} alt={tile.title} />
    //         <GridListTileBar
    //           title={tile.title}
    //           titlePosition="top"
    //           actionIcon={
    //             <IconButton
    //               aria-label={`star ${tile.title}`}
    //               className={classes.icon}
    //             >
    //               <StarBorderIcon />
    //             </IconButton>
    //           }
    //           actionPosition="left"
    //           className={classes.titleBar}
    //         />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </div>

    // <div className={classes.root}>
    //   <GridList cellHeight={160} className={classes.gridList} cols={3}>
    //     {tileData.map((tile, index) => (
    //       <GridListTile key={tile.image} cols={tile.cols || 1}>
    //         <img src={tile.img} alt={tile.title} />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </div>

    <div className={classes.root}>
      <GridList cellHeight={290} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default GridListDemo;
