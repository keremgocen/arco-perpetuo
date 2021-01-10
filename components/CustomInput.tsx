import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        "&.Mui-disabled": {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  })
)(TextField);

export default CustomInput;
