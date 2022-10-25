import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  emptyStar: {
    color: "white"
  }
}));
const Star = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        defaultValue={3.5}
        precision={0.5}
        readOnly
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
        }
      />
    </div>
  );
};
export default Star;
